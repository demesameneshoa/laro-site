'use client';
import { useState, type FormEvent } from 'react';
import { services } from '@/lib/content';
import { ArrowUpRight, Check } from './Icons';

const budgets = ['Under ETB 30,000', 'ETB 30k – 100k', 'ETB 100k – 500k', 'Above ETB 500k', 'Not sure yet'];

// Quote request: service chips, underline fields, budget chips.
export default function QuoteForm() {
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [picked, setPicked] = useState<string[]>([]);
  const [budget, setBudget] = useState('');
  const toggle = (s: string) => setPicked((p) => (p.includes(s) ? p.filter((x) => x !== s) : [...p, s]));
  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setState('sending');
    const data = { ...Object.fromEntries(new FormData(form).entries()), services: picked.join(', '), budget };
    try {
      const res = await fetch('/api/quote', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
      if (!res.ok) throw new Error();
      setState('sent'); form.reset(); setPicked([]); setBudget('');
    } catch { setState('error'); }
  }
  if (state === 'sent') {
    return (
      <div className="qform sent" role="status">
        <span className="sent-ic"><Check size={34} /></span>
        <h3>Thank you. Your request is in.</h3>
        <p>Our team will review your brief and contact you within one working day.</p>
        <button className="pill-btn dark" type="button" onClick={() => setState('idle')}><span>Send another request</span></button>
      </div>
    );
  }
  return (
    <form className="qform" onSubmit={onSubmit} aria-label="Request a quote">
      <fieldset className="full">
        <legend>I’m interested in</legend>
        <div className="chips">
          {services.map((s) => (<button key={s.slug} type="button" className="chip" aria-pressed={picked.includes(s.short)} onClick={() => toggle(s.short)}>{s.short}</button>))}
        </div>
      </fieldset>
      <div className="ul-field"><label htmlFor="q-name">Name *</label><input id="q-name" name="name" autoComplete="name" required /></div>
      <div className="ul-field"><label htmlFor="q-org">Organization</label><input id="q-org" name="organization" autoComplete="organization" /></div>
      <div className="ul-field"><label htmlFor="q-phone">Phone *</label><input id="q-phone" name="phone" type="tel" autoComplete="tel" required /></div>
      <div className="ul-field"><label htmlFor="q-email">Email</label><input id="q-email" name="email" type="email" autoComplete="email" /></div>
      <div className="ul-field"><label htmlFor="q-qty">Quantity</label><input id="q-qty" name="quantity" /></div>
      <div className="ul-field"><label htmlFor="q-date">Deadline or event date</label><input id="q-date" name="date" type="date" /></div>
      <fieldset className="full">
        <legend>Budget</legend>
        <div className="chips">{budgets.map((b) => (<button key={b} type="button" className="chip" aria-pressed={budget === b} onClick={() => setBudget(budget === b ? '' : b)}>{b}</button>))}</div>
      </fieldset>
      <div className="ul-field full"><label htmlFor="q-msg">Project details</label><textarea id="q-msg" name="message" rows={3} /></div>
      <div className="full cn-send">
        <span className="muted">{state === 'error' ? 'Could not send. Please call +251 954 676 767.' : 'Branding packages start at ETB 30,000.'}</span>
        <button type="submit" className="arrow-link" disabled={state === 'sending'}><ArrowUpRight size={22} /><span>{state === 'sending' ? 'Sending…' : 'Send request'}</span></button>
      </div>
    </form>
  );
}
