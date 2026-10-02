'use client';
import { useEffect, useRef, useState } from 'react';
import { heroSlides } from '@/lib/content';

// Giant LARO wordmark. The O is a round window onto the showreel; scrolling pins the hero and
// grows that window until it fills the screen. Slides crossfade like a video until a real reel is added.
export default function HeroWordmark() {
  const sec = useRef<HTMLElement>(null);
  const win = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const id = reduce ? 0 : window.setInterval(() => setActive((a) => (a + 1) % heroSlides.length), 4200);
    const s = sec.current, w = win.current;
    if (!s || !w) return () => clearInterval(id);
    let raf = 0;
    const update = () => {
      const total = s.offsetHeight - innerHeight;
      const p = total > 0 ? Math.min(1, Math.max(0, -s.getBoundingClientRect().top / total)) : 0;
      s.style.setProperty('--p', p.toFixed(4));
      s.classList.toggle('dark', p > 0.3);
      // window geometry: from the O's rect to the full viewport
      const o = s.querySelector<HTMLElement>('.hw-o');
      if (o) {
        const r0 = o.getBoundingClientRect();
        const sr = (o.closest('.hw-sticky') as HTMLElement).getBoundingClientRect();
        const r = { left: r0.left - sr.left, top: r0.top - sr.top, width: r0.width };
        const e = p < 0.05 ? 0 : Math.min(1, (p - 0.05) / 0.75);
        const k = 1 - Math.pow(1 - e, 3);
        const vw = sr.width, vh = sr.height;
        const size = r.width;
        const left = r.left + (0 - r.left) * k, top = r.top + (0 - r.top) * k;
        const width = size + (vw - size) * k, height = size + (vh - size) * k;
        const radius = (size / 2) * (1 - k);
        w.style.left = `${left}px`; w.style.top = `${top}px`;
        w.style.width = `${width}px`; w.style.height = `${height}px`; w.style.borderRadius = `${radius}px`;
      }
    };
    const onScroll = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    document.fonts?.ready.then(update);
    return () => { clearInterval(id); cancelAnimationFrame(raf); window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); };
  }, []);
  return (
    <section className="hw" ref={sec} aria-label="LARO Advertising PLC">
      <div className="hw-sticky">
        <h1 className="hw-word" aria-label="LARO Advertising PLC. Elevate your brand, elevate your business.">
          <span aria-hidden="true">LAR</span><span className="hw-o" aria-hidden="true" /><span className="sr-only">O</span>
        </h1>
        <div className="hw-win" ref={win} aria-hidden="true">
          {heroSlides.map((s, i) => (<img key={s.image} src={s.image} alt="" className={i === active ? 'on' : ''} style={{ objectPosition: s.pos }} />))}
          <span className="hw-cap">{heroSlides[active].caption}</span>
        </div>
        <div className="hw-tags container">
          <span>Elevate your brand.</span><span>One partner.</span><span>Elevate your business.</span>
        </div>
        <div className="container"><hr className="rule" /></div>
      </div>
    </section>
  );
}
