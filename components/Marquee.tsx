'use client';
import { useEffect, useRef, type ReactNode } from 'react';

// Infinite ticker; speeds up with scroll velocity and follows scroll direction.
export default function Marquee({ children, speed = 0.6, reverse = false, className = '' }: { children: ReactNode; speed?: number; reverse?: boolean; className?: string }) {
  const track = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const el = track.current; if (!el) return;
    let x = 0, last = scrollY, vel = 0, dir = reverse ? -1 : 1, raf = 0;
    const loop = () => {
      const dy = scrollY - last; last = scrollY;
      vel += (Math.min(40, Math.abs(dy)) - vel) * 0.1;
      if (dy !== 0) dir = (dy > 0 ? 1 : -1) * (reverse ? -1 : 1);
      x -= (speed + vel * 0.25) * dir;
      const half = el.scrollWidth / 2;
      if (half > 0) { if (x <= -half) x += half; if (x > 0) x -= half; }
      el.style.transform = `translate3d(${x}px, 0, 0)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [speed, reverse]);
  return (
    <div className={`marquee ${className}`}>
      <div className="marquee-track" ref={track}>
        <div className="marquee-group">{children}</div>
        <div className="marquee-group" aria-hidden="true">{children}</div>
      </div>
    </div>
  );
}
