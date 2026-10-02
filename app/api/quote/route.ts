import { NextResponse } from 'next/server';

// Receives quote requests from the contact form.
// To deliver them by email, add a provider (e.g. Resend) and set QUOTE_TO_EMAIL + RESEND_API_KEY in Vercel.
export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try { body = await req.json(); } catch { return NextResponse.json({ ok: false, error: 'Invalid JSON' }, { status: 400 }); }
  const name = String(body.name ?? '').trim();
  const phone = String(body.phone ?? '').trim();
  if (!name || !phone) return NextResponse.json({ ok: false, error: 'Name and phone are required' }, { status: 422 });

  const summary = Object.entries(body).map(([k, v]) => `${k}: ${String(v ?? '').slice(0, 2000)}`).join('\n');

  if (process.env.RESEND_API_KEY && process.env.QUOTE_TO_EMAIL) {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: process.env.QUOTE_FROM_EMAIL ?? 'LARO Website <onboarding@resend.dev>',
        to: [process.env.QUOTE_TO_EMAIL],
        subject: `Quote request from ${name}`,
        text: summary,
      }),
    });
    if (!res.ok) return NextResponse.json({ ok: false, error: 'Email failed' }, { status: 502 });
  } else {
    console.log('[quote request]\n' + summary);
  }
  return NextResponse.json({ ok: true });
}
