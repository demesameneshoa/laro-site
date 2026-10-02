'use client';
import { useEffect, useRef, useState } from 'react';

type Row = { n: string; t: string; mid?: string; r: string; img: string };

// Award-style rows; hovering one shows its image floating at the pointer, tilted by speed.
export default function HoverRows({ rows }: { rows: Row[] }) {
  const [hover, setHover] = useState<number | null>(null);
  const fl = useRef<HTMLDivElement>(null);
  const wrap = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    let x = 0, y = 0, cx = 0, cy = 0, raf = 0;
    const move = (e: PointerEvent) => { x = e.clientX; y = e.clientY; };
    const loop = () => {
      const vx = x - cx; cx += (x - cx) * 0.14; cy += (y - cy) * 0.14;
      if (fl.current) fl.current.style.transform = `translate3d(${cx}px, ${cy}px, 0) rotate(${Math.max(-14, Math.min(14, vx * 0.08)).toFixed(2)}deg)`;
      raf = requestAnimationFrame(loop);
    };
    const el = wrap.current; el?.addEventListener('pointermove', move);
    raf = requestAnimationFrame(loop);
    return () => { el?.removeEventListener('pointermove', move); cancelAnimationFrame(raf); };
  }, []);
  return (
    <div className="hrows" ref={wrap} onPointerLeave={() => setHover(null)}>
      {rows.map((r, i) => (
        <div key={r.n + r.t} className="hrow reveal" data-active={hover === i ? 'true' : undefined} onPointerEnter={() => setHover(i)}>
          <span className="hr-a"><span className="hr-n">{r.n}</span><span className="hr-t">{r.t}</span></span>
          {r.mid ? <span className="hr-m">{r.mid}</span> : <span />}
          <span className="hr-r">{r.r}</span>
        </div>
      ))}
      <div className={`hr-float${hover !== null ? ' show' : ''}`} ref={fl} aria-hidden="true">
        {rows.map((r, i) => (<img key={i} src={r.img} alt="" className={hover === i ? 'on' : ''} />))}
      </div>
    </div>
  );
}
