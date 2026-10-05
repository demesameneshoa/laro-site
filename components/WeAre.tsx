'use client';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { ArrowUpRight } from './Icons';

const TRAIL = ['/images/signage.jpg', '/images/gifts.jpg', '/images/events.jpg', '/images/stationery.jpg', '/images/flags.jpg', '/images/eco.jpg', '/images/print.jpg', '/images/carpet.jpg'];

// Big statement with a green disc that sweeps in on scroll and a trail of project images
// that pop up under the pointer as it moves.
export default function WeAre({ line1 = 'We Are', line2 = 'LARO!', link = true }: { line1?: string; line2?: string; link?: boolean }) {
  const sec = useRef<HTMLElement>(null);
  const layer = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const s = sec.current, l = layer.current; if (!s || !l) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let raf = 0;
    const update = () => {
      const r = s.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (innerHeight - r.top) / (innerHeight + r.height * 0.6)));
      s.style.setProperty('--p', p.toFixed(4));
    };
    const onScroll = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    let lastX = -999, lastY = -999, idx = 0;
    const move = (e: PointerEvent) => {
      if (reduce || e.pointerType !== 'mouse') return;
      const b = s.getBoundingClientRect();
      const x = e.clientX - b.left, y = e.clientY - b.top;
      if (Math.hypot(x - lastX, y - lastY) < 110) return;
      lastX = x; lastY = y;
      const img = document.createElement('img');
      img.src = TRAIL[idx++ % TRAIL.length]; img.alt = ''; img.className = 'trail';
      img.style.left = `${x}px`; img.style.top = `${y}px`;
      img.style.setProperty('--r', `${(Math.random() * 16 - 8).toFixed(1)}deg`);
      l.appendChild(img);
      setTimeout(() => img.remove(), 1100);
    };
    s.addEventListener('pointermove', move);
    return () => { window.removeEventListener('scroll', onScroll); s.removeEventListener('pointermove', move); cancelAnimationFrame(raf); };
  }, []);
  const content = (dup: boolean) => (
    <div className="container we-inner">
      <p className="we-big" aria-hidden="true"><span>{line1}</span><span>{line2}</span></p>
      {link ? (
        <div className="sec-foot">
          <p>Strategy, creativity, production and execution, brought together under one partner.</p>
          <Link href="/about" className={`go-btn${dup ? ' light' : ''}`} tabIndex={dup ? -1 : undefined}><span>Go to about us</span><ArrowUpRight size={18} /></Link>
        </div>
      ) : null}
      <hr className="rule" />
    </div>
  );
  return (
    <section className="we" ref={sec} aria-label={`${line1} ${line2}`}>
      {content(false)}
      {/* green disc: a clipped layer holding a white copy of the same content, so text turns white where the disc passes */}
      <div className="we-green" aria-hidden="true">{content(true)}</div>
      <div className="we-layer" ref={layer} aria-hidden="true" />
    </section>
  );
}
