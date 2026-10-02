'use client';
import { useState, type FormEvent } from 'react';
import { services } from '@/lib/content';
import { Arrow } from './Icons';

export default function QuoteForm() {
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setState('sending');
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch('/api/quote', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
      if (!res.ok) throw new Error('Request failed');
      setState('sent');
      form.reset();
    } catch {
      setState('error');
    }
  }

  return (
    <form className="form" onSubmit={onSubmit} aria-labelledby="quote-title">
      <div className="full form-foot" style={{ marginBottom: 4 }}>
        <span id="quote-title" className="mono" style={{ color: 'var(--ink)' }}>Request a quote</span>
        <span className="mono" style={{ color: 'var(--green-deep)' }}>Reply within one working day</span>
      </div>
      <div className="field"><label htmlFor="q-name">Name</label><input id="q-name" name="name" autoComplete="name" required placeholder="Full name" /></div>
      <div className="field"><label htmlFor="q-org">Organization</label><input id="q-org" name="organization" autoComplete="organization" placeholder="Ministry, bank, NGO…" /></div>
      <div className="field"><label htmlFor="q-phone">Phone</label><input id="q-phone" name="phone" type="tel" autoComplete="tel" required placeholder="+251 …" /></div>
      <div className="field"><label htmlFor="q-email">Email</label><input id="q-email" name="email" type="email" autoComplete="email" placeholder="name@organization.org" /></div>
      <div className="field"><label htmlFor="q-service">Service</label>
        <select id="q-service" name="service" defaultValue="">
          <option value="" disabled>Choose a service</option>
          {services.map((s) => <option key={s.slug} value={s.title}>{s.title}</option>)}
          <option value="Integrated solution">Integrated solution (several services)</option>
        </select>
      </div>
      <div className="field"><label htmlFor="q-date">Deadline or event date</label><input id="q-date" name="date" type="date" /></div>
      <div className="field full"><label htmlFor="q-qty">Quantity</label><input id="q-qty" name="quantity" placeholder="e.g. 300 gift sets, 40 table flags" /></div>
      <div className="field full"><label htmlFor="q-msg">Project details</label><textarea id="q-msg" name="message" placeholder="Objectives, specifications, sizes, delivery or installation needs" /></div>
      <div className="full form-foot">
        <span className="form-note">Branding packages start at ETB 30,000.</span>
        <button className="btn btn-primary" type="submit" disabled={state === 'sending'}>{state === 'sending' ? 'Sending…' : 'Send request'} <Arrow size={16} /></button>
      </div>
      {state === 'sent' ? <p className="full form-status" role="status">Thank you. Your request has been received and our team will contact you shortly.</p> : null}
      {state === 'error' ? <p className="full form-status" role="alert" style={{ background: 'rgba(200,40,40,0.1)', color: '#9b1c1c' }}>Something went wrong. Please call +251 954 676 767 or try again.</p> : null}
    </form>
  );
}
