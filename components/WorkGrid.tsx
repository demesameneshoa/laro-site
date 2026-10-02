'use client';
import { useState } from 'react';
import { work, workCats } from '@/lib/content';
import { WorkCard } from './Blocks';

export default function WorkGrid() {
  const [cat, setCat] = useState('All');
  const items = cat === 'All' ? work : work.filter((w) => w.cat === cat);
  return (
    <>
      <div className="filters" role="group" aria-label="Filter projects by service">
        {workCats.map((c) => (
          <button key={c} type="button" className="filter" aria-pressed={c === cat} onClick={() => setCat(c)}>{c}</button>
        ))}
      </div>
      <div className="work-grid">
        {items.map((w) => <WorkCard key={w.title} w={w} />)}
        {items.length === 0 ? <p className="muted">Projects for this service are coming soon.</p> : null}
      </div>
    </>
  );
}
