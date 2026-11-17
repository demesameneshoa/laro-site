import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Receives the footer "Send us a message" form and the /contact "Request a quote" form
// and emails them to the LARO inbox (info@laroadvertising.com by default).
//
// Delivery, in order of preference (set these in Vercel → Project → Settings → Environment Variables):
//   1. SMTP through the existing mailbox: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS (optional SMTP_SECURE)
//   2. Resend: RESEND_API_KEY (+ MAIL_FROM on a domain verified in Resend)
// MAIL_TO overrides the recipient. Without any provider, requests are only logged (and fail in production).
export const runtime = 'nodejs';

// Comma-separate for several recipients.
const MAIL_TO = (process.env.MAIL_TO || process.env.QUOTE_TO_EMAIL || 'info@laroadvertising.com').split(',').map((s) => s.trim()).filter(Boolean);

const LABELS: Record<string, string> = {
  name: 'Name',
  organization: 'Organization',
  phone: 'Phone',
  email: 'Email',
  services: 'Interested in',
  quantity: 'Quantity',
  date: 'Deadline / event date',
  budget: 'Budget',
  message: 'Message',
};

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!));
const oneLine = (s: string) => s.replace(/[\r\n]+/g, ' ').trim();
const isEmail = (s: string) => /^[^\s@<>"]+@[^\s@<>"]+\.[^\s@<>"]+$/.test(s);

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try { body = await req.json(); } catch { return NextResponse.json({ ok: false, error: 'Invalid JSON' }, { status: 400 }); }

  // Honeypot: a hidden field people never fill in. Bots do; pretend success and drop it.
  if (String(body.website ?? '').trim()) return NextResponse.json({ ok: true });

  const field = (k: string, max = 200) => String(body[k] ?? '').trim().slice(0, max);
  const name = oneLine(field('name', 120));
  const phone = oneLine(field('phone', 60));
  const email = oneLine(field('email', 160));
  if (!name || !phone) return NextResponse.json({ ok: false, error: 'Name and phone are required' }, { status: 422 });
  if (email && !isEmail(email)) return NextResponse.json({ ok: false, error: 'Please enter a valid email address' }, { status: 422 });

  const kind = body.form === 'quote' ? 'quote' : 'message';
  const org = oneLine(field('organization', 160));
  const subject = kind === 'quote'
    ? `Quote request from ${name}${org ? ` (${org})` : ''}`
    : `Website message from ${name}`;

  const rows = Object.keys(LABELS)
    .map((k) => [LABELS[k], field(k, k === 'message' ? 5000 : 500)] as const)
    .filter(([, v]) => v);
  const source = kind === 'quote' ? 'Request a quote form (/contact)' : 'Let’s connect form (website footer)';
  const page = oneLine(field('page', 300));
  const sent = new Date().toLocaleString('en-GB', { timeZone: 'Africa/Addis_Ababa', dateStyle: 'medium', timeStyle: 'short' });

  const text = [
    `New ${kind === 'quote' ? 'quote request' : 'message'} from laroadvertising.com`,
    '',
    ...rows.map(([k, v]) => `${k}: ${v}`),
    '',
    `Form: ${source}${page ? `\nPage: ${page}` : ''}`,
    `Sent: ${sent} (Addis Ababa)`,
    email ? '\nReply to this email to answer the sender directly.' : '',
  ].join('\n');

  const html = `<div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#1a1a1a;max-width:640px">
  <div style="background:#0b6b3a;color:#fff;padding:16px 20px;border-radius:8px 8px 0 0">
    <div style="font-size:12px;opacity:.85;text-transform:uppercase;letter-spacing:.08em">laroadvertising.com</div>
    <div style="font-size:18px;font-weight:bold;margin-top:4px">${esc(kind === 'quote' ? 'New quote request' : 'New website message')}</div>
  </div>
  <table cellpadding="0" cellspacing="0" style="width:100%;border:1px solid #e3e3e3;border-top:0;border-collapse:collapse">
    ${rows.map(([k, v]) => `<tr><td style="padding:10px 14px;border-top:1px solid #eee;width:170px;color:#666;vertical-align:top">${esc(k)}</td><td style="padding:10px 14px;border-top:1px solid #eee;white-space:pre-wrap">${esc(v)}</td></tr>`).join('')}
  </table>
  <p style="color:#888;font-size:12px;margin-top:12px">${esc(source)}${page ? ` · ${esc(page)}` : ''} · ${esc(sent)} (Addis Ababa)${email ? '<br>Reply to this email to answer the sender directly.' : ''}</p>
</div>`;

  const replyTo = email ? `"${name.replace(/"/g, '')}" <${email}>` : undefined;

  try {
    if (process.env.SMTP_HOST && process.env.SMTP_PASS) {
      const port = Number(process.env.SMTP_PORT || 465);
      const user = process.env.SMTP_USER || MAIL_TO[0];
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port,
        secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE === 'true' : port === 465,
        auth: { user, pass: process.env.SMTP_PASS },
      });
      await transporter.sendMail({
        from: process.env.MAIL_FROM || `"LARO Website" <${user}>`,
        to: MAIL_TO,
        replyTo,
        subject,
        text,
        html,
      });
    } else if (process.env.RESEND_API_KEY) {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: process.env.MAIL_FROM || process.env.QUOTE_FROM_EMAIL || 'LARO Website <onboarding@resend.dev>',
          to: MAIL_TO,
          reply_to: replyTo,
          subject,
          text,
          html,
        }),
      });
      if (!res.ok) throw new Error(`Resend ${res.status}: ${await res.text()}`);
    } else {
      console.log(`[contact form → ${MAIL_TO.join(', ')}] ${subject}\n${text}`);
      // Don't tell a visitor "sent" in production when nothing was delivered.
      if (process.env.NODE_ENV === 'production') {
        console.error('[contact form] No mail provider configured: set SMTP_HOST/SMTP_USER/SMTP_PASS (or RESEND_API_KEY).');
        return NextResponse.json({ ok: false, error: 'Email is not configured' }, { status: 503 });
      }
    }
  } catch (err) {
    console.error('[contact form] send failed', err);
    return NextResponse.json({ ok: false, error: 'Email failed' }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
