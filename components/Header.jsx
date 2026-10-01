'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icon from './Icon';
import { site, tel } from '../content/site';

export default function Header() {
  const pathname = usePathname();
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
    document.body.classList.toggle('laro-menu-open', open);
    if (window.__lenis) { open ? window.__lenis.stop() : window.__lenis.start(); }
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const isActive = (href) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  return (
    <>
      <header className={`laro-header${solid || open ? ' is-solid' : ''}`}>
        <Link className="laro-logo" href="/" aria-label={`${site.name}, home`}>
          <img src="/img/logo.png" alt={site.name} width={75} height={40} />
        </Link>
        <nav className="laro-nav" aria-label="Primary">
          <ul>
            {site.nav.map((n) => (
              <li key={n.href} className={isActive(n.href) ? 'current-menu-item' : undefined}>
                <Link href={n.href} aria-current={isActive(n.href) ? 'page' : undefined}>{n.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <a className="laro-tel" href={tel(site.phone1)}><Icon name="phone" size={16} />{site.phone1}</a>
        <Link className="laro-btn laro-btn--green laro-cut" href={site.cta.href}>{site.cta.text}</Link>
        <button className="laro-burger" type="button" aria-expanded={open} aria-controls="laro-menu" aria-label="Menu" onClick={() => setOpen((o) => !o)}>
          <span aria-hidden="true" /><b>Menu</b>
        </button>
      </header>

      <div className="laro-menu" id="laro-menu" aria-hidden={!open} inert={!open}>
        <ul>
          <li><Link href="/">Home</Link></li>
          {site.nav.map((n) => <li key={n.href}><Link href={n.href}>{n.label}</Link></li>)}
        </ul>
        <div className="laro-menu-foot">
          <span className="laro-mono">Talk to us</span>
          <a href={tel(site.phone1)}>{site.phone1}</a>
          <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener">WhatsApp</a>
        </div>
      </div>
    </>
  );
}
