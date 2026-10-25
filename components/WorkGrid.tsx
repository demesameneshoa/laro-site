'use client';
import { useEffect, useState } from 'react';
import { work, workCats } from '@/lib/content';
import { Dots } from './Text';
import WorkMedia from './WorkMedia';

export default function WorkGrid() {
  const [cat, setCat] = useState('All');
  const [k, setK] = useState(0);
  const [open, setOpen] = useState<number | null>(null);
  const items = cat === 'All' ? work : work.filter((w) => w.cat === cat || (w.tags ?? []).includes(cat));

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

  const cur = open !== null ? items[open] : null;
  return (
    <>
      <div className="filters" role="group" aria-label="Filter projects by service">
        {workCats.map((c) => (
          <button key={c} type="button" className="filter" aria-pressed={c === cat} onClick={() => { setCat(c); setK((x) => x + 1); setOpen(null); }}>{c}</button>
        ))}
      </div>
      <div className="wgrid" key={k}>
        {items.map((w, i) => (
          <button key={w.image} type="button" className="mw-card in-anim" style={{ ['--d' as string]: `${(i % 3) * 90}ms` }} data-cursor={w.video ? 'Play' : 'View'} onClick={() => setOpen(i)}>
            <span className="mw-img"><WorkMedia w={w} />{w.video ? <span className="mw-play" aria-hidden="true">▶</span> : null}</span>
            <span className="mw-t">{w.title}</span>
            {w.client ? <span className="mw-client">{w.client}</span> : null}
            <Dots items={w.tags ?? [w.cat]} />
          </button>
        ))}
        {items.length === 0 ? <p className="muted">Projects for this service are coming soon.</p> : null}
      </div>
      {cur ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={cur.title} onClick={() => setOpen(null)}>
          <div className="lb-in work" onClick={(e) => e.stopPropagation()}>
            <span className="lb-media"><WorkMedia w={cur} controls /></span>
            <div className="lb-bar">
              <span><b>{cur.title}</b>{cur.client ? ` · ${cur.client}` : ''}</span>
              <span className="lb-btns">
                <button type="button" onClick={() => setOpen((open! + items.length - 1) % items.length)} aria-label="Previous">←</button>
                <button type="button" onClick={() => setOpen((open! + 1) % items.length)} aria-label="Next">→</button>
                <button type="button" onClick={() => setOpen(null)} aria-label="Close">✕</button>
              </span>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
