'use client';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { projects, services } from '@/lib/content';

const svc = (t: string) => services.find((s) => s.tag === t)?.short ?? t;
// Category filters follow the service list; a service shows a filter once it has projects.
const CATS = [{ tag: 'All', label: 'All' }, ...services.filter((s) => projects.some((p) => p.services.includes(s.tag))).map((s) => ({ tag: s.tag, label: s.short }))];
const norm = (x: string) => x.toLowerCase().normalize('NFKD').replace(/[^\w\s&]/g, ' ');

// Portfolio: search box + service categories over project cards that open each project page.
export default function ProjectGrid() {
  const [cat, setCat] = useState('All');
  const [q, setQ] = useState('');
  const list = useMemo(() => {
    const words = norm(q).split(/\s+/).filter(Boolean);
    return projects.filter((p) => {
      if (cat !== 'All' && !p.services.includes(cat)) return false;
      if (!words.length) return true;
      const hay = norm([p.title, p.client ?? '', p.summary, p.scope.join(' '), p.services.map(svc).join(' ')].join(' '));
      return words.every((w) => hay.includes(w));
    });
  }, [cat, q]);

  return (
    <>
      <div className="pg-tools">
        <label className="pg-search">
          <span className="sr-only">Search projects</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
          <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search projects, clients or services" />
          {q ? <button type="button" onClick={() => setQ('')} aria-label="Clear search">✕</button> : null}
        </label>
        <span className="pg-count" aria-live="polite">{list.length} {list.length === 1 ? 'project' : 'projects'}</span>
      </div>
      <div className="filters" role="group" aria-label="Filter projects by service">
        {CATS.map((c) => (
          <button key={c.tag} type="button" className="filter" aria-pressed={c.tag === cat} onClick={() => setCat(c.tag)}>{c.label}</button>
        ))}
      </div>
      <div className="pg-grid">
        {list.map((p, i) => {
          const m = p.media[0];
          const clips = p.media.filter((x) => x.video).length;
          return (
            <Link key={p.slug} href={`/work/${p.slug}`} className="pg-card in-anim" style={{ ['--d' as string]: `${(i % 3) * 70}ms` }} data-cursor="View">
              <span className="pg-img">
                <img src={m.src} alt={p.client ? `${p.title} for ${p.client}` : p.title} loading="lazy" style={{ objectPosition: m.pos }} />
                <span className="pg-badge">{p.media.length} {p.media.length === 1 ? 'photo' : 'items'}{clips ? ` · ${clips} video${clips > 1 ? 's' : ''}` : ''}</span>
              </span>
              <span className="pg-svc">{p.services.map(svc).join(' · ')}</span>
              <span className="pg-t">{p.title}</span>
              {p.client ? <span className="pg-c">{p.client}</span> : null}
            </Link>
          );
        })}
      </div>
      {list.length === 0 ? (
        <p className="pg-empty">No projects match “{q}”. <button type="button" onClick={() => { setQ(''); setCat('All'); }}>Show all projects</button></p>
      ) : null}
    </>
  );
}
