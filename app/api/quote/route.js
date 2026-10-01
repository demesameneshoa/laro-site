/*
 * Quote form endpoint. Sends the request by email through Resend (https://resend.com, free tier).
 *
 * In Vercel › Project › Settings › Environment Variables add:
 *   RESEND_API_KEY   your Resend API key (starts with re_)
 *   QUOTE_TO_EMAIL   where requests go, e.g. sales@laroadvertising.com
 *   QUOTE_FROM_EMAIL optional, e.g. "LARO Website <website@laroadvertising.com>"
 *                    (needs your domain verified in Resend; without it the Resend test
 *                    sender is used, which can only deliver to your own Resend login email)
 * Then redeploy. Until these are set, the form asks visitors to call instead.
 */
import { site } from '../../../content/site';

export const runtime = 'nodejs';

const hits = new Map(); // simple per-instance rate limit
const clean = (v, max = 500) => String(v ?? '').replace(/[\u0000-\u001f\u007f]/g, ' ').trim().slice(0, max);

export async function POST(req) {
  let body;
  try { body = await req.json(); } catch { return Response.json({ ok: false, message: 'Invalid request.' }, { status: 400 }); }

  if (body.website) return Response.json({ ok: true }); // honeypot: bots fill the hidden field

  const data = {
    Name: clean(body.name, 120),
    Organization: clean(body.org, 160),
    Phone: clean(body.phone, 40),
    Email: clean(body.email, 160),
    Service: clean(body.service, 80),
    Quantity: clean(body.qty, 120),
    'Event date': clean(body.date, 40),
    Message: String(body.msg ?? '').trim().slice(0, 4000),
    Page: clean(body.page, 200),
  };
  if (!data.Name || !data.Phone) {
    return Response.json({ ok: false, message: 'Add your name and a phone number so we can call you back.' }, { status: 400 });
  }

  const ip = (req.headers.get('x-forwarded-for') || '').split(',')[0].trim() || 'unknown';
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < 10 * 60 * 1000);
  if (recent.length >= 5) return Response.json({ ok: false, message: `Too many requests. Please call us on ${site.phone1}.` }, { status: 429 });
  recent.push(now); hits.set(ip, recent);

  const key = process.env.RESEND_API_KEY;
  const to = process.env.QUOTE_TO_EMAIL;
  if (!key || !to) {
    console.warn('Quote form: RESEND_API_KEY or QUOTE_TO_EMAIL not set', data);
    return Response.json({ ok: false, message: `The online form is not connected yet. Please call ${site.phone1} or message us on WhatsApp.` }, { status: 503 });
  }

  const text = Object.entries(data).filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`).join('\n');
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.Email);
  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: process.env.QUOTE_FROM_EMAIL || 'LARO Website <onboarding@resend.dev>',
        to: to.split(',').map((s) => s.trim()).filter(Boolean),
        subject: `Quote request: ${data.Service || 'General'} from ${data.Name}`,
        text,
        ...(validEmail ? { reply_to: data.Email } : {}),
      }),
    });
    if (!res.ok) {
      console.error('Quote form: Resend error', res.status, await res.text());
      return Response.json({ ok: false, message: `The message could not be sent. Please call us on ${site.phone1}.` }, { status: 502 });
    }
    return Response.json({ ok: true });
  } catch (err) {
    console.error('Quote form: send failed', err);
    return Response.json({ ok: false, message: `The message could not be sent. Please call us on ${site.phone1}.` }, { status: 502 });
  }
}
