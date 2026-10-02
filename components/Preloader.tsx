'use client';
import { useEffect, useState } from 'react';
import LogoMark from './Logo';

// First visit: green screen, a ring fills like a pie while the counter runs to 100%, then the panel lifts.
export default function Preloader() {
  const [n, setN] = useState(0);
  const [done, setDone] = useState(false);
  useEffect(() => {
    if (document.documentElement.classList.contains('no-preload')) { setDone(true); return; }
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dur = reduce ? 200 : 1800;
    const t0 = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / dur);
      setN(Math.round(100 * (1 - Math.pow(1 - p, 2.4))));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 300);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);
  return (
    <div className={`preloader${done ? ' out' : ''}`} aria-hidden="true">
      <div className="pl-pie" style={{ ['--n' as string]: n }}>
        <div className="pl-core"><LogoMark width={92} light={false} /><b>{n}%</b><span>Loading…</span></div>
      </div>
    </div>
  );
}
