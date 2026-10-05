'use client';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { services } from '@/lib/content';
import { ArrowUpRight } from './Icons';

// "OUR SERVICES": the section pins, a green disc sweeps across the title, then the title panel
// slides away and the eight service columns travel in horizontally, on every screen size.
// With reduced motion it falls back to a vertical list.
export default function PinnedServices() {
  const sec = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const s = sec.current, t = track.current; if (!s || !t) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let raf = 0;
    const layout = () => {
      const pin = !reduce;
      s.classList.toggle('pinned', pin);
      if (!pin) { s.style.height = ''; t.style.transform = ''; return; }
      const dist = t.scrollWidth - s.clientWidth;
      s.style.height = `${innerHeight * 2.2 + dist}px`;
      update();
    };
    const update = () => {
      if (!s.classList.contains('pinned')) return;
      const total = s.offsetHeight - innerHeight;
      const p = Math.min(1, Math.max(0, -s.getBoundingClientRect().top / total));
      const split = (innerHeight * 1.2) / total; // first part: disc sweep
      const a = Math.min(1, p / split);
      const b = Math.max(0, (p - split) / (1 - split));
      s.style.setProperty('--a', a.toFixed(4));
      const dist = t.scrollWidth - s.clientWidth;
      t.style.transform = `translate3d(${(-dist * b).toFixed(1)}px, 0, 0)`;
    };
    const onScroll = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(update); };
    layout();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', layout);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', layout); cancelAnimationFrame(raf); };
  }, []);
  return (
    <section className="ps" ref={sec} aria-labelledby="ps-h">
      <div className="ps-sticky">
        <div className="ps-track" ref={track}>
          <div className="ps-title">
            <h2 id="ps-h" className="ps-h">Our Services</h2>
            <span className="ps-disc" aria-hidden="true"><span className="ps-h">Our Services</span></span>
          </div>
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="ps-col" data-cursor="Explore">
              <span className="ps-fill" aria-hidden="true" />
              <span className="ps-img" aria-hidden="true"><img src={s.image} alt="" style={{ objectPosition: s.imagePos }} /></span>
              <span className="ps-n">Service {s.n}</span>
              <span className="ps-t">{s.title}</span>
              <span className="ps-d">{s.tagline}</span>
              <span className="ps-go"><ArrowUpRight size={22} /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
