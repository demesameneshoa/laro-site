import { NextResponse } from 'next/server';

// Receives messages from the website forms (Contact page "Request a Quote" and the footer "Let's Connect")
// and emails them to LARO through Resend (https://resend.com).
//
// Vercel → Project → Settings → Environment Variables:
//   RESEND_API_KEY    required  API key from resend.com
//   QUOTE_TO_EMAIL    optional  where messages go (default: info@laroadvertising.com; comma-separate for several)
//   QUOTE_FROM_EMAIL  optional  sender, on a domain verified in Resend, e.g. "LARO Website <website@laroadvertising.com>"
//                               (default: Resend's test sender, which only delivers to the Resend account's own email)

const TO = (process.env.QUOTE_TO_EMAIL ?? 'info@laroadvertising.com').split(',').map((s) => s.trim()).filter(Boolean);
const FROM = process.env.QUOTE_FROM_EMAIL ?? 'LARO Website <onboarding@resend.dev>';

const LABELS: Record<string, string> = {
  form: 'Form', name: 'Name', organization: 'Organization', phone: 'Phone', email: 'Email',
  services: 'Interested in', budget: 'Budget', quantity: 'Quantity', date: 'Deadline / event date', message: 'Message',
};
const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]!));

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try { body = await req.json(); } catch { return NextResponse.json({ ok: false, error: 'Invalid JSON' }, { status: 400 }); }

  // Spam trap: a hidden field people never see or fill in.
  if (String(body.website ?? '').trim()) return NextResponse.json({ ok: true });

  const field = (k: string) => String(body[k] ?? '').trim().slice(0, 4000);
  const name = field('name'), phone = field('phone'), email = field('email');
  if (!name || !phone) return NextResponse.json({ ok: false, error: 'Name and phone are required' }, { status: 422 });

  const rows = Object.keys(LABELS).map((k) => [LABELS[k], field(k)] as const).filter(([, v]) => v);
  const text = rows.map(([k, v]) => `${k}: ${v}`).join('\n');
  const html = `<h2 style="font-family:Arial,sans-serif;color:#00893f;margin:0 0 12px">New message from the LARO website</h2>
<table cellpadding="8" style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse">${rows
    .map(([k, v]) => `<tr><td style="color:#666;vertical-align:top;border-bottom:1px solid #eee">${esc(k)}</td><td style="border-bottom:1px solid #eee;white-space:pre-wrap">${esc(v)}</td></tr>`)
    .join('')}</table>`;

  if (!process.env.RESEND_API_KEY) {
    // Not configured yet: don't pretend it was sent, so the visitor sees the "please call" fallback.
    console.error('[quote] RESEND_API_KEY is not set; message not emailed:\n' + text);
    return NextResponse.json({ ok: false, error: 'Email is not configured' }, { status: 503 });
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: FROM,
      to: TO,
      subject: `${field('form') || 'Website message'}: ${name}${field('organization') ? ` (${field('organization')})` : ''}`,
      text,
      html,
      ...(email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? { reply_to: email } : {}),
    }),
  });
  if (!res.ok) {
    console.error('[quote] Resend error', res.status, await res.text());
    return NextResponse.json({ ok: false, error: 'Email failed' }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
