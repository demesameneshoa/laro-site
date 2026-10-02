'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/* One observer/scroll loop for the whole page:
   - .reveal          gets .in when it enters the viewport (text, cards, letters)
   - [data-count]     counts up from 0 when revealed
   - .scroll-text     words light up as the paragraph scrolls through the viewport
   - [data-parallax]  drifts at a fraction of scroll speed
   - --scroll-p       on <html>: page progress for the top progress bar
   A MutationObserver picks up elements that mount later (route changes, filters). */
export default function ScrollFx() {
  const pathname = usePathname();
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const fmt = (n: number, suffix: string) => (n >= 10000 ? n.toLocaleString('en-US') : String(n)) + suffix;
    const countUp = (el: HTMLElement) => {
      const target = Number(el.dataset.count || 0);
      const suffix = el.dataset.suffix || '';
      if (reduce || !target) { el.textContent = fmt(target, suffix); return; }
      const from = target > 1000 && target < 10000 ? target - 60 : 0;
      const t0 = performance.now();
      const step = (t: number) => {
        const p = Math.min(1, (t - t0) / 1400);
        el.textContent = fmt(Math.round(from + (target - from) * (1 - Math.pow(1 - p, 4))), suffix);
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        const el = en.target as HTMLElement;
        el.classList.add('in');
        el.querySelectorAll<HTMLElement>('[data-count]').forEach(countUp);
        if (el.dataset.count !== undefined) countUp(el);
        io.unobserve(el);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.1 });
    const seen = new WeakSet<Element>();
    const scan = () => {
      document.querySelectorAll<HTMLElement>('.reveal:not(.in)').forEach((el) => { if (!seen.has(el)) { seen.add(el); io.observe(el); } });
    };
    scan();
    const mo = new MutationObserver(() => { scan(); onScroll(); });
    mo.observe(document.body, { childList: true, subtree: true });

    let raf = 0;
    const update = () => {
      const vh = innerHeight;
      const max = document.documentElement.scrollHeight - vh;
      document.documentElement.style.setProperty('--scroll-p', String(max > 0 ? scrollY / max : 0));
      document.querySelectorAll<HTMLElement>('.scroll-text').forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.bottom < -100 || r.top > vh + 100) return;
        const p = Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (r.height + vh * 0.35)));
        const words = el.querySelectorAll<HTMLElement>('.sw');
        const lit = Math.round(p * words.length);
        words.forEach((w, i) => w.classList.toggle('lit', i < lit));
      });
      if (!reduce) document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((el) => {
        const r = (el.parentElement ?? el).getBoundingClientRect();
        if (r.bottom < -200 || r.top > vh + 200) return;
        const speed = Number(el.dataset.parallax || 0.15);
        el.style.transform = `translate3d(0, ${((r.top + r.height / 2 - vh / 2) * -speed).toFixed(1)}px, 0)`;
      });
    };
    function onScroll() { cancelAnimationFrame(raf); raf = requestAnimationFrame(update); }
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { io.disconnect(); mo.disconnect(); window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); cancelAnimationFrame(raf); };
  }, [pathname]);
  return <div className="scroll-progress" aria-hidden="true" />;
}
