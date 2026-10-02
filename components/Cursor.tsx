'use client';
import { useEffect, useRef, useState } from 'react';

// Small green dot plus a large soft disc that trails behind; over [data-cursor] elements the disc
// fills green and shows the label.
export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState('');
  const [state, setState] = useState('');
  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    document.documentElement.classList.add('has-cursor');
    let x = innerWidth / 2, y = innerHeight / 2, rx = x, ry = y, raf = 0;
    const move = (e: PointerEvent) => {
      x = e.clientX; y = e.clientY;
      if (dot.current) dot.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      const t = (e.target as HTMLElement | null)?.closest<HTMLElement>('[data-cursor], a, button, input, textarea, select, label');
      if (!t) { setState(''); setLabel(''); return; }
      if (t.dataset.cursor) { setState('label'); setLabel(t.dataset.cursor); }
      else if (t.matches('input, textarea, select')) { setState('text'); setLabel(''); }
      else { setState('link'); setLabel(''); }
    };
    const loop = () => {
      rx += (x - rx) * 0.12; ry += (y - ry) * 0.12;
      if (ring.current) ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    const leave = () => setState('hidden');
    window.addEventListener('pointermove', move, { passive: true });
    document.addEventListener('pointerleave', leave);
    raf = requestAnimationFrame(loop);
    return () => { window.removeEventListener('pointermove', move); document.removeEventListener('pointerleave', leave); cancelAnimationFrame(raf); document.documentElement.classList.remove('has-cursor'); };
  }, []);
  return (
    <>
      <div ref={ring} className={`cursor-ring ${state}`} aria-hidden="true"><span>{label}</span></div>
      <div ref={dot} className="cursor-dot" aria-hidden="true" />
    </>
  );
}
