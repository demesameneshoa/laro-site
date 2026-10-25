'use client';
import { useEffect, useState } from 'react';
import type { Media } from '@/lib/content';
import WorkMedia from './WorkMedia';

// Project page gallery: a grid of photos and clips; any item opens full screen.
export default function ProjectGallery({ media, title }: { media: Media[]; title: string }) {
  const [open, setOpen] = useState<number | null>(null);
  const n = media.length;
  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(null);
      if (e.key === 'ArrowRight') setOpen((o) => (o === null ? o : (o + 1) % n));
      if (e.key === 'ArrowLeft') setOpen((o) => (o === null ? o : (o + n - 1) % n));
    };
    window.addEventListener('keydown', onKey);
    document.documentElement.classList.add('menu-open');
    return () => { window.removeEventListener('keydown', onKey); document.documentElement.classList.remove('menu-open'); };
  }, [open, n]);
  return (
    <>
      <div className={`pj-gallery n${Math.min(n, 6)}`}>
        {media.map((m, k) => (
          <button key={m.src} type="button" className={`pj-item pj-${k} reveal`} style={{ ['--d' as string]: `${(k % 3) * 70}ms` }} onClick={() => setOpen(k)} data-cursor={m.video ? 'Play' : 'View'} aria-label={`Open ${m.video ? 'video' : 'photo'} ${k + 1} of ${n}`}>
            <WorkMedia m={m} alt={`${title}, ${m.video ? 'video' : 'photo'} ${k + 1}`} eager={k === 0} />
            {m.video ? <span className="mw-play" aria-hidden="true">▶</span> : null}
          </button>
        ))}
      </div>
      {open !== null ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={title} onClick={() => setOpen(null)}>
          <div className="lb-in work" onClick={(e) => e.stopPropagation()}>
            <span className="lb-media"><WorkMedia m={media[open]} alt={`${title}, ${open + 1} of ${n}`} controls /></span>
            <div className="lb-bar">
              <span><b>{title}</b> · {open + 1} / {n}</span>
              <span className="lb-btns">
                <button type="button" onClick={() => setOpen((open + n - 1) % n)} aria-label="Previous">←</button>
                <button type="button" onClick={() => setOpen((open + 1) % n)} aria-label="Next">→</button>
                <button type="button" onClick={() => setOpen(null)} aria-label="Close">✕</button>
              </span>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
