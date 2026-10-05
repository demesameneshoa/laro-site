'use client';
import { useEffect, useState } from 'react';
import { credentials } from '@/lib/content';
import LogoMark from './Logo';

const KINDS = ['All', 'Registration', 'Certificate', 'Recognition'] as const;

// Gallery of certificates and credentials with a filter and a lightbox. Each card is a framed
// placeholder until the real scans are added (set `image` on an item in lib/content.ts).
export default function Credentials() {
  const [kind, setKind] = useState<(typeof KINDS)[number]>('All');
  const [open, setOpen] = useState<number | null>(null);
  const items = credentials.filter((c) => kind === 'All' || c.kind === kind);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(null);
      if (e.key === 'ArrowRight') setOpen((o) => (o === null ? o : (o + 1) % items.length));
      if (e.key === 'ArrowLeft') setOpen((o) => (o === null ? o : (o + items.length - 1) % items.length));
    };
    window.addEventListener('keydown', onKey);
    document.documentElement.classList.add('menu-open');
    return () => { window.removeEventListener('keydown', onKey); document.documentElement.classList.remove('menu-open'); };
  }, [open, items.length]);

  const Cert = ({ c, big = false }: { c: (typeof credentials)[number]; big?: boolean }) => (
    <span className={`cert${big ? ' big' : ''}`}>
      <span className="cert-in">
        <LogoMark width={big ? 90 : 54} light={false} />
        <span className="cert-kind">{c.kind}</span>
        <span className="cert-t">{c.t}</span>
        <span className="cert-org">{c.org}</span>
        <span className="cert-seal" aria-hidden="true" />
        <span className="cert-year">{c.year}</span>
      </span>
      <span className="ph-tag">Placeholder · add scan</span>
    </span>
  );

  return (
    <>
      <div className="filters" role="group" aria-label="Filter credentials">
        {KINDS.map((k) => (<button key={k} type="button" className="filter" aria-pressed={k === kind} onClick={() => setKind(k)}>{k}</button>))}
      </div>
      <div className="cred-grid" key={kind}>
        {items.map((c, i) => (
          <button key={c.t} type="button" className="cred in-anim" style={{ ['--d' as string]: `${(i % 4) * 70}ms` }} onClick={() => setOpen(i)} data-cursor="View" aria-label={`View ${c.t}`}>
            <Cert c={c} />
            <span className="cred-cap"><b>{c.t}</b><span>{c.org}</span></span>
          </button>
        ))}
      </div>
      {open !== null && items[open] ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={items[open].t} onClick={() => setOpen(null)}>
          <div className="lb-in" onClick={(e) => e.stopPropagation()}>
            <Cert c={items[open]} big />
            <div className="lb-bar">
              <span><b>{items[open].t}</b> · {items[open].org}</span>
              <span className="lb-btns">
                <button type="button" onClick={() => setOpen((open + items.length - 1) % items.length)} aria-label="Previous">←</button>
                <button type="button" onClick={() => setOpen((open + 1) % items.length)} aria-label="Next">→</button>
                <button type="button" onClick={() => setOpen(null)} aria-label="Close">✕</button>
              </span>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
