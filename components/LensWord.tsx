'use client';
import { useEffect, useRef } from 'react';

// Giant word with a glass lens that follows the pointer and shows an image through it.
export default function LensWord({ word, left, right, image }: { word: string; left: string; right: string; image: string }) {
  const sec = useRef<HTMLDivElement>(null);
  const lens = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const s = sec.current, l = lens.current; if (!s || !l) return;
    let x = s.clientWidth / 2, y = s.clientHeight / 2, cx = x, cy = y, raf = 0;
    const move = (e: PointerEvent) => { const b = s.getBoundingClientRect(); x = e.clientX - b.left; y = e.clientY - b.top; };
    const loop = () => {
      cx += (x - cx) * 0.09; cy += (y - cy) * 0.09;
      l.style.transform = `translate3d(${cx.toFixed(1)}px, ${cy.toFixed(1)}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      s.addEventListener('pointermove', move); raf = requestAnimationFrame(loop);
    }
    return () => { s.removeEventListener('pointermove', move); cancelAnimationFrame(raf); };
  }, []);
  return (
    <div className="lens-word" ref={sec}>
      <span className="lw-side l">{left}</span>
      <p className="lw-big reveal" aria-label={word}><span aria-hidden="true">{word}</span></p>
      <span className="lw-side r">{right}</span>
      <div className="lens" ref={lens} aria-hidden="true"><img src={image} alt="" /></div>
    </div>
  );
}
