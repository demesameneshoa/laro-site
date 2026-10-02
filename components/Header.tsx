'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { company, nav } from '@/lib/content';
import { Close, Menu, Phone } from './Icons';

export default function Header() {
  const pathname = usePathname() || '/';
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  return (
    <>
      <header className={`hdr${solid ? ' solid' : ''}`}>
        <div className="container hdr-inner">
          <Link href="/" className="hdr-logo" aria-label={`${company.name}, home`}>
            <img src="/images/logo-mark-light.png" alt={company.name} width={159} height={84} />
          </Link>
          <nav className="hdr-nav" aria-label="Primary">
            {nav.slice(1).map((n) => (
              <Link key={n.href} href={n.href} aria-current={isActive(n.href) ? 'page' : undefined}>{n.label}</Link>
            ))}
          </nav>
          <div className="hdr-cta">
            <a className="btn btn-ghost btn-sm phone" href={company.phoneHref[0]}><Phone size={16} />{company.phones[0]}</a>
            <Link className="btn btn-primary btn-sm" href="/contact">Request a quote</Link>
            <button className="menu-btn" type="button" aria-label="Open menu" aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(true)}><Menu /></button>
          </div>
        </div>
      </header>
      <div id="mobile-nav" className={`mnav${open ? ' open' : ''}`} aria-hidden={!open} role="dialog" aria-label="Menu">
        <div className="mnav-top">
          <img src="/images/logo-mark-light.png" alt={company.name} style={{ height: 32, width: 'auto' }} />
          <button className="menu-btn" style={{ display: 'inline-flex' }} type="button" aria-label="Close menu" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}><Close /></button>
        </div>
        <nav aria-label="Mobile">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} aria-current={isActive(n.href) ? 'page' : undefined} tabIndex={open ? 0 : -1}>{n.label}</Link>
          ))}
        </nav>
        <div className="mnav-foot">
          <Link className="btn btn-primary" href="/contact" tabIndex={open ? 0 : -1}>Request a quote</Link>
          <a className="btn btn-ghost" href={company.phoneHref[0]} tabIndex={open ? 0 : -1}><Phone size={16} />{company.phones[0]}</a>
        </div>
      </div>
    </>
  );
}
