'use client';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { services, work } from '@/lib/content';
import { Dots, Letters } from './Text';
import { ArrowUpRight } from './Icons';
import WorkMedia from './WorkMedia';

// Three-column staggered grid; the outer columns drift at a different speed from the middle one.
export default function MasonryWork({ limit = 9, heading = true }: { limit?: number; heading?: boolean }) {
  const cols = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let raf = 0;
    const update = () => {
      cols.current.forEach((c, i) => {
        if (!c || innerWidth < 760) { if (c) c.style.transform = ''; return; }
        const r = c.parentElement!.getBoundingClientRect();
        const p = (innerHeight - r.top) / (innerHeight + r.height);
        const speed = i === 1 ? -60 : 50;
        c.style.transform = `translate3d(0, ${((p - 0.5) * speed * 2).toFixed(1)}px, 0)`;
      });
    };
    const onScroll = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf); };
  }, []);
  const items = work.slice(0, limit);
  const columns: typeof items[] = [[], [], []];
  items.forEach((w, i) => columns[i % 3].push(w));
  return (
    <section className="mw sec" aria-labelledby={heading ? 'mw-h' : undefined}>
      <div className="container">
        {heading ? <div id="mw-h" className="mw-head"><Letters text="Our Selected Works" /></div> : null}
        <div className="mw-grid">
          {columns.map((col, ci) => (
            <div key={ci} className={`mw-col c${ci}`} ref={(el) => { cols.current[ci] = el; }}>
              {col.map((w) => (
                <Link key={w.image} href="/work" className={`mw-card reveal ${w.size === 'tall' ? 'tall' : ''}`} data-cursor="View">
                  <span className="mw-img"><WorkMedia w={w} /></span>
                  <span className="mw-t">{w.title}</span>
                  {w.client ? <span className="mw-client">{w.client}</span> : null}
                  <Dots items={(w.tags ?? [w.cat]).map((t) => services.find((x) => x.tag === t)?.short ?? t)} />
                </Link>
              ))}
            </div>
          ))}
        </div>
        {heading ? (
          <div className="sec-foot">
            <p>Recent 3D corporate flags, signage, premium corporate gifts, printing and event work for institutions across Ethiopia.</p>
            <Link href="/work" className="go-btn"><span>View all works</span><ArrowUpRight size={18} /></Link>
          </div>
        ) : null}
        {heading ? <hr className="rule" /> : null}
      </div>
    </section>
  );
}
