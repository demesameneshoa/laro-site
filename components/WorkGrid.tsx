'use client';
import Link from 'next/link';
import { useState } from 'react';
import { work, workCats } from '@/lib/content';
import { Dots } from './Text';

export default function WorkGrid() {
  const [cat, setCat] = useState('All');
  const [k, setK] = useState(0);
  const items = cat === 'All' ? work : work.filter((w) => w.cat === cat || (w.tags ?? []).includes(cat));
  return (
    <>
      <div className="filters" role="group" aria-label="Filter projects by service">
        {workCats.map((c) => (
          <button key={c} type="button" className="filter" aria-pressed={c === cat} onClick={() => { setCat(c); setK((x) => x + 1); }}>{c}</button>
        ))}
      </div>
      <div className="wgrid" key={k}>
        {items.map((w, i) => (
          <Link key={w.title} href="/work" className="mw-card in-anim" style={{ ['--d' as string]: `${(i % 3) * 90}ms` }} data-cursor="View">
            <span className="mw-img"><img src={w.image} alt={`Placeholder visual: ${w.title}`} style={{ objectPosition: w.pos }} /><span className="ph-tag">Placeholder · replace with project photo</span></span>
            <span className="mw-t">{w.title}</span>
            <Dots items={w.tags ?? [w.cat]} />
          </Link>
        ))}
        {items.length === 0 ? <p className="muted">Projects for this service are coming soon.</p> : null}
      </div>
    </>
  );
}
