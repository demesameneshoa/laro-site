'use client';

import { useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Lenis from 'lenis';
import { mount, onTick } from '../lib/engine';

/**
 * Runs on every page:
 *  • Lenis smooth scrolling (desktop; phones keep native scrolling)
 *  • the scroll engine (reveals, showroom, parallax…) re-mounted after each navigation
 *  • the green page-transition wipe between pages
 */
export default function Engine() {
  const pathname = usePathname();
  const router = useRouter();
  const wipeRef = useRef(null);
  const first = useRef(true);

  // Smooth scrolling, once.
  useEffect(() => {
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return undefined;
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    window.__lenis = lenis;
    const off = onTick((dt, now) => lenis.raf(now));
    return () => { off(); lenis.destroy(); window.__lenis = undefined; };
  }, []);

  // Scroll engine for the current page.
  useEffect(() => {
    if (!first.current) {
      if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true, force: true });
      else window.scrollTo(0, 0);
    }
    let unmount = () => {};
    const id = requestAnimationFrame(() => { unmount = mount(document.getElementById('laro-main') || document); });
    return () => { cancelAnimationFrame(id); unmount(); };
  }, [pathname]);

  // Page transition: cover → navigate → uncover.
  useEffect(() => {
    const wipe = wipeRef.current;
    if (!wipe) return;
    if (first.current) { first.current = false; return; }
    wipe.classList.remove('is-cover');
    wipe.classList.add('is-out');
    const t = setTimeout(() => wipe.classList.remove('is-out'), 900);
    return () => clearTimeout(t);
  }, [pathname]);

  useEffect(() => {
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return undefined;
    const onClick = (e) => {
      const a = e.target.closest && e.target.closest('a[href]');
      if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      if ((a.target && a.target !== '_self') || a.hasAttribute('download')) return;
      const href = a.getAttribute('href');
      if (!href || href.startsWith('#') || /^(tel|mailto|sms):/.test(href)) return;
      let url; try { url = new URL(a.href, location.href); } catch (err) { return; }
      if (url.origin !== location.origin || /\.[a-z0-9]{2,5}$/i.test(url.pathname)) return;
      if (url.pathname === location.pathname) return;
      e.preventDefault();
      const wipe = wipeRef.current;
      wipe.classList.remove('is-out');
      wipe.classList.add('is-cover');
      setTimeout(() => router.push(url.pathname + url.search + url.hash), 560);
      setTimeout(() => wipe.classList.remove('is-cover'), 5000); // never leave the page covered
    };
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, [router]);

  return (
    <div className="laro-wipe" ref={wipeRef} aria-hidden="true">
      <img src="/img/logo.png" alt="" width={120} height={64} />
    </div>
  );
}
