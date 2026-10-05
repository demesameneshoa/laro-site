'use client';
import { useEffect, useRef, useState } from 'react';
import { approach } from '@/lib/content';

const IMAGES = ['/images/stationery.jpg', '/images/print.jpg', '/images/gifts.jpg', '/images/signage.jpg', '/images/flags.jpg', '/images/events.jpg'];

// "From brief to delivery" as a journey: a rail of six stops that fills in green as it advances,
// and a stage that shows the active step with its picture. Advances on its own while in view;
// hovering or tapping a stop takes over.
export default function ApproachJourney({ images = IMAGES }: { images?: string[] }) {
  const steps = approach.steps;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const visible = useRef(false);

  useEffect(() => {
    const el = root.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { visible.current = e.isIntersecting; }, { threshold: 0.35 });
    io.observe(el);
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return () => io.disconnect();
    const id = window.setInterval(() => { if (visible.current && !paused) setActive((a) => (a + 1) % steps.length); }, 4200);
    return () => { io.disconnect(); clearInterval(id); };
  }, [paused, steps.length]);

  const s = steps[active];
  return (
    <div className="journey" ref={root} onPointerEnter={() => setPaused(true)} onPointerLeave={() => setPaused(false)} style={{ ['--prog' as string]: active / (steps.length - 1) }}>
      <div className="jr-rail" role="tablist" aria-label="Our approach, step by step">
        <span className="jr-line" aria-hidden="true"><i /></span>
        {steps.map((st, i) => (
          <button key={st.n} type="button" role="tab" id={`jr-tab-${i}`} aria-controls="jr-panel" aria-selected={i === active}
            className={`jr-stop${i < active ? ' done' : ''}${i === active ? ' on' : ''}`}
            onPointerEnter={() => setActive(i)} onFocus={() => setActive(i)} onClick={() => setActive(i)}>
            <span className="jr-dot" aria-hidden="true">{st.n}</span>
            <span className="jr-name">{st.t}</span>
          </button>
        ))}
      </div>
      <div className="jr-stage" id="jr-panel" role="tabpanel" aria-labelledby={`jr-tab-${active}`}>
        <div className="jr-text" key={active}>
          <span className="jr-count">Step {s.n} of 0{steps.length}</span>
          <h3>{s.t}</h3>
          <p>{s.d}</p>
          <div className="jr-nav">
            <button type="button" onClick={() => setActive((active + steps.length - 1) % steps.length)} aria-label="Previous step">←</button>
            <button type="button" onClick={() => setActive((active + 1) % steps.length)} aria-label="Next step">→</button>
          </div>
        </div>
        <div className="jr-media" aria-hidden="true">
          {steps.map((st, i) => (<img key={st.n} src={images[i % images.length]} alt="" className={i === active ? 'on' : ''} />))}
          <span className="jr-big">{s.n}</span>
        </div>
      </div>
    </div>
  );
}
