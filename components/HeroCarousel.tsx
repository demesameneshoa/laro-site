'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { heroSlides, intro } from '@/lib/content';
import { ArrowUpRight } from './Icons';

const DURATION = 6500;

// Home hero: a full-bleed carousel of real LARO work with the brand promise on top.
// Advances on its own (paused while hovered or focused, and for reduced motion); arrows and the
// progress segments let visitors move through it themselves.
export default function HeroCarousel() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduce, setReduce] = useState(false);
  const timer = useRef<number | undefined>(undefined);
  const n = heroSlides.length;
  const go = (k: number) => setI(((k % n) + n) % n);

  useEffect(() => { setReduce(window.matchMedia('(prefers-reduced-motion: reduce)').matches); }, []);
  useEffect(() => {
    if (paused || reduce) return;
    timer.current = window.setTimeout(() => setI((x) => (x + 1) % n), DURATION);
    return () => window.clearTimeout(timer.current);
  }, [i, paused, reduce, n]);

  const s = heroSlides[i];
  return (
    <section className="hc" aria-roledescription="carousel" aria-label="LARO Advertising PLC work"
      onPointerEnter={() => setPaused(true)} onPointerLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}
      data-paused={paused || reduce ? 'true' : 'false'}>
      <div className="hc-frame">
        {heroSlides.map((x, k) => (
          <div key={x.image} className="hc-slide" data-on={k === i ? 'true' : 'false'} aria-hidden={k !== i} role="group" aria-roledescription="slide" aria-label={`${k + 1} of ${n}: ${x.label}`}>
            <img src={x.image} alt={x.label} style={{ objectPosition: x.pos }} loading={k === 0 ? 'eager' : 'lazy'} fetchPriority={k === 0 ? 'high' : 'auto'} />
          </div>
        ))}
        <div className="hc-shade" aria-hidden="true" />
        <div className="hc-copy">
          <span className="hc-kicker">LARO Advertising PLC · Addis Ababa, since 2012</span>
          <h1 className="hc-title">Elevate your brand.<br />Elevate your business.</h1>
          <p className="hc-lead">{intro.oneLiner}</p>
          <div className="hc-cta">
            <Link href="/work" className="go-btn light"><span>View our work</span><ArrowUpRight size={18} /></Link>
            <Link href="/contact" className="go-btn"><span>Request a quote</span><ArrowUpRight size={18} /></Link>
          </div>
        </div>
        <div className="hc-bar">
          <Link href={s.href} className="hc-now" key={i}>
            <span className="hc-num">{String(i + 1).padStart(2, '0')} / {String(n).padStart(2, '0')}</span>
            <span className="hc-label">{s.label}</span>
            <span className="hc-svc">{s.service}</span>
          </Link>
          <div className="hc-ctrl">
            <div className="hc-segs" role="tablist" aria-label="Choose a slide">
              {heroSlides.map((x, k) => (
                <button key={x.image} type="button" role="tab" aria-selected={k === i} aria-label={x.label} onClick={() => go(k)}
                  className="hc-seg" data-state={k < i ? 'done' : k === i ? 'on' : 'next'} style={{ ['--dur' as string]: `${DURATION}ms` }}><i key={k === i ? `on-${i}` : 'x'} /></button>
              ))}
            </div>
            <button type="button" className="hc-arrow" onClick={() => go(i - 1)} aria-label="Previous slide">←</button>
            <button type="button" className="hc-arrow" onClick={() => go(i + 1)} aria-label="Next slide">→</button>
          </div>
        </div>
      </div>
    </section>
  );
}
