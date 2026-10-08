'use client';
import Link from 'next/link';
import { useState, type FormEvent } from 'react';
import { company, services } from '@/lib/content';
import { ArrowUpRight, Mail, Phone, Pin, Chat } from './Icons';

// Green "Let's connect!" panel with a short contact form, then the link columns.
export default function Footer() {
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setState('sending');
    try {
      const res = await fetch('/api/quote', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(Object.fromEntries(new FormData(form).entries())) });
      if (!res.ok) throw new Error();
      setState('sent'); form.reset();
    } catch { setState('error'); }
  }
  return (
    <footer className="ftr">
      <div className="connect">
        <div className="container connect-grid">
          <div className="cn-l">
            <h2 className="cn-big reveal"><span>Let’s</span><span>C<i aria-hidden="true" /><span className="sr-only">o</span>nnect!</span></h2>
            <ul className="cn-info">
              {company.email ? <li><span className="ic"><Mail size={15} /></span><a href={`mailto:${company.email}`}>{company.email}</a></li> : null}
              <li><span className="ic"><Phone size={15} /></span><a href={company.phoneHref[0]}>{company.phones[0]}</a></li>
              <li><span className="ic"><Phone size={15} /></span><a href={company.phoneHref[1]}>{company.phones[1]}</a></li>
              {company.whatsapps.map((w) => (
                <li key={w.href}><span className="ic"><Chat size={15} /></span><a href={w.href} target="_blank" rel="noopener noreferrer">WhatsApp {w.label}</a></li>
              ))}
              <li><span className="ic"><Pin size={15} /></span><span>{company.address.join(', ')}</span></li>
            </ul>
            <div className="socials">{company.socials.map((s) => (<a key={s.label} href={s.href} aria-label={s.label}>{s.label.slice(0, 2)}</a>))}</div>
          </div>
          <form className="cn-form" onSubmit={onSubmit} aria-label="Send us a message">
            <div className="ul-field full"><label htmlFor="f-name">Name</label><input id="f-name" name="name" autoComplete="name" required /></div>
            <div className="ul-field"><label htmlFor="f-email">Email</label><input id="f-email" name="email" type="email" autoComplete="email" /></div>
            <div className="ul-field"><label htmlFor="f-phone">Phone</label><input id="f-phone" name="phone" type="tel" autoComplete="tel" required /></div>
            <div className="ul-field full"><label htmlFor="f-msg">Message</label><textarea id="f-msg" name="message" rows={2} /></div>
            <div className="full cn-send">
              {state === 'sent' ? <span role="status">Thank you. We will be in touch shortly.</span> : state === 'error' ? <span role="alert">Could not send. Please call {company.phones[0]}.</span> : <span />}
              <button type="submit" className="go-btn dark" disabled={state === 'sending'}><span>{state === 'sending' ? 'Sending…' : 'Send message'}</span><ArrowUpRight size={18} /></button>
            </div>
          </form>
        </div>
      </div>
      <div className="container ftr-links">
        <img src="/images/logo-full-white.png" alt={`${company.name}, ${company.tagline}`} width={556} height={376} className="ftr-logo" />
        <div className="fl-col"><h4>Services</h4>{services.map((s) => (<Link key={s.slug} href={`/services/${s.slug}`}>{s.short}</Link>))}</div>
        <div className="fl-col"><h4>Company</h4>{['Work', 'Solutions', 'About', 'Clients', 'Contact'].map((l) => (<Link key={l} href={`/${l.toLowerCase()}`}>{l}</Link>))}</div>
        <div className="fl-col"><h4>Visit</h4><address className="addr">{company.address.map((l) => <span key={l}>{l}</span>)}</address></div>
      </div>
      <div className="container ftr-bot"><span>{company.name} {new Date().getFullYear()}</span><span>{company.tagline}</span><a href="#top">Back to top ↑</a></div>
    </footer>
  );
}
