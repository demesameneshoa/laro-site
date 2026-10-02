'use client';
import { Fragment, useEffect, useRef } from 'react';

// Giant word with a glass lens. The lens is sized to the counter (inner hole) of the word's O and
// rests inside it; with a mouse it follows the pointer and glides back into the O when the pointer leaves.
// Counter geometry of DM Sans Medium "O", in em, measured from the glyph origin and baseline.
const HOLE = { cx: 0.3875, cy: -0.35, d: 0.475 };

export default function LensWord({ word, left, right, image }: { word: string; left: string; right: string; image: string }) {
  const sec = useRef<HTMLDivElement>(null);
  const lens = useRef<HTMLDivElement>(null);
  const mark = useRef<HTMLElement>(null);
  const oIndex = word.toUpperCase().indexOf('O');

  useEffect(() => {
    const s = sec.current, l = lens.current, m = mark.current; if (!s || !l) return;
    let home = { x: s.clientWidth / 2, y: s.clientHeight / 2 };
    let x = home.x, y = home.y, cx = x, cy = y, raf = 0, inside = false;
    const measure = () => {
      const b = s.getBoundingClientRect();
      if (m) {
        const r = m.getBoundingClientRect(); // zero-size marker at the O's origin, on the baseline
        const fs = parseFloat(getComputedStyle(m.parentElement as Element).fontSize);
        home = { x: r.left - b.left + HOLE.cx * fs, y: r.top - b.top + HOLE.cy * fs };
        const d = HOLE.d * fs;
        l.style.width = l.style.height = `${d}px`;
        l.style.margin = `${-d / 2}px 0 0 ${-d / 2}px`;
      }
      if (!inside) { x = home.x; y = home.y; }
    };
    const place = () => { l.style.transform = `translate3d(${cx.toFixed(1)}px, ${cy.toFixed(1)}px, 0)`; };
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const move = (e: PointerEvent) => { const b = s.getBoundingClientRect(); x = e.clientX - b.left; y = e.clientY - b.top; inside = true; };
    const leave = () => { inside = false; x = home.x; y = home.y; };
    const loop = () => { cx += (x - cx) * 0.09; cy += (y - cy) * 0.09; place(); raf = requestAnimationFrame(loop); };
    const onResize = () => { measure(); if (!fine || reduce) { cx = home.x; cy = home.y; place(); } };
    measure(); cx = home.x; cy = home.y; place();
    document.fonts?.ready.then(onResize);
    window.addEventListener('resize', onResize);
    if (fine && !reduce) { s.addEventListener('pointermove', move); s.addEventListener('pointerleave', leave); raf = requestAnimationFrame(loop); }
    return () => { window.removeEventListener('resize', onResize); s.removeEventListener('pointermove', move); s.removeEventListener('pointerleave', leave); cancelAnimationFrame(raf); };
  }, []);

  return (
    <div className="lens-word" ref={sec}>
      <span className="lw-side l">{left}</span>
      <p className="lw-big" aria-label={word}>
        <span aria-hidden="true">
          {Array.from(word).map((ch, i) => (
            <Fragment key={i}>{i === oIndex ? <span className="lw-o"><i ref={mark} className="lw-mark" />{ch}</span> : ch}</Fragment>
          ))}
        </span>
      </p>
      <span className="lw-side r">{right}</span>
      <div className="lens" ref={lens} aria-hidden="true"><img src={image} alt="" /></div>
    </div>
  );
}
