'use client';

import { useEffect, useRef, useState } from 'react';
import { site } from '../content/site';

/**
 * Logo loading screen for the first visit to the home page in a browser session.
 * The inline script in app/layout.js decides before paint whether it shows.
 */
export default function Loader() {
  const ref = useRef(null);
  const barRef = useRef(null);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (!html.classList.contains('laro-loading')) { setGone(true); return undefined; }
    try { sessionStorage.setItem('laro-seen', '1'); } catch (e) { /* private mode */ }
    let progress = 0.15, done = false;
    const bump = (p) => { progress = Math.max(progress, p); if (barRef.current) barRef.current.style.transform = `scaleX(${progress})`; };
    const finish = () => {
      if (done) return; done = true; bump(1);
      setTimeout(() => {
        if (ref.current) ref.current.classList.add('is-done');
        html.classList.remove('laro-loading');
        document.dispatchEvent(new CustomEvent('laro:ready'));
        setTimeout(() => setGone(true), 900);
      }, 200);
    };
    const onProgress = (e) => bump(e.detail || 0);
    document.addEventListener('laro:progress', onProgress);
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const minT = new Promise((r) => setTimeout(r, reduce ? 250 : 2400));
    const ready = new Promise((r) => {
      if (window.__laroShowroomReady || !document.querySelector('[data-laro-showroom]')) r();
      else document.addEventListener('laro:showroom-ready', r, { once: true });
    });
    Promise.race([Promise.all([minT, ready]), new Promise((r) => setTimeout(r, 9000))]).then(finish);
    return () => document.removeEventListener('laro:progress', onProgress);
  }, []);

  if (gone) return null;
  return (
    <div className="laro-loader" ref={ref} role="status" aria-label="Loading">
      <svg viewBox="-2 -2 468 215" role="img" aria-label="LARO">
        <path d="M61,1 L9,19 L0,210 L106,210 L160,161 L142,110 L54,184 L52,183 Z" pathLength="1" fill="#00A14B" stroke="#00A14B" strokeWidth="2.4" style={{ animationDelay: '.15s,1.35s' }} />
        <path d="M190,0 L223,100 L224,11 L282,61 L228,118 L246,163 L291,210 L359,210 L286,136 L292,127 L355,60 L292,0 Z" pathLength="1" fill="#00A14B" stroke="#00A14B" strokeWidth="2.4" style={{ animationDelay: '.37s,1.53s' }} />
        <path d="M319,0 L319,11 L369,59 L404,68 L411,151 L410,154 L365,155 L363,153 L363,68 L320,114 L320,159 L372,210 L463,210 L441,20 Z" pathLength="1" fill="#F2F3EE" stroke="#F2F3EE" strokeWidth="2.4" style={{ animationDelay: '.59s,1.71s' }} />
        <path d="M74,0 L66,157 L123,108 L126,14 L190,209 L245,209 L177,1 Z" pathLength="1" fill="#F2F3EE" stroke="#F2F3EE" strokeWidth="2.4" style={{ animationDelay: '.81s,1.89s' }} />
      </svg>
      <div className="laro-loader-sub">ADVERTISING PLC</div>
      <div className="laro-loader-bar"><span ref={barRef} /></div>
      <div className="laro-mono laro-loader-note">Preparing the showroom</div>
      <div className="laro-mono laro-loader-corner" style={{ left: 'var(--laro-gut)' }}>Addis Ababa · Since 2012</div>
      <div className="laro-mono laro-loader-corner" style={{ right: 'var(--laro-gut)' }}>{site.tagline}</div>
    </div>
  );
}
