'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { company, nav, services } from '@/lib/content';
import { ArrowUpRight, Phone } from './Icons';

// Logo left, pill navigation centred (Services opens a dropdown), "Contact us" right.
// Hides on scroll down, returns on scroll up. Phones get a full-screen green menu.
export default function Header() {
  const pathname = usePathname() || '/';
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [solid, setSolid] = useState(false);
  const [drop, setDrop] = useState(false);

  useEffect(() => {
    let last = scrollY;
    const onScroll = () => {
      const y = scrollY;
      setSolid(y > 30);
      if (y > 400 && y > last + 4) { setHidden(true); setDrop(false); }
      else if (y < last - 4 || y <= 400) setHidden(false);
      last = y;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => { setOpen(false); setDrop(false); }, [pathname]);
  useEffect(() => {
    document.documentElement.classList.toggle('menu-open', open);
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') { setOpen(false); setDrop(false); } };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));
  const main = nav.filter((n) => n.href !== '/contact');

  return (
    <>
      <header className={`hdr${hidden && !open ? ' hide' : ''}${solid ? ' solid' : ''}${open ? ' open' : ''}`}>
        <div className="hdr-inner">
          <Link href="/" className="hdr-logo" aria-label={`${company.name}, home`}>
            <img src="/images/logo-mark-dark.png" alt={company.name} width={159} height={84} />
          </Link>
          <nav className="pill" aria-label="Primary">
            {main.map((n) => n.href === '/services' ? (
              <div key={n.href} className={`pill-dd${drop ? ' open' : ''}`} onPointerEnter={() => setDrop(true)} onPointerLeave={() => setDrop(false)}>
                <Link href={n.href} aria-current={isActive(n.href) ? 'page' : undefined}>{n.label}</Link>
                <button type="button" className="dd-btn" aria-label="Show all services" aria-expanded={drop} onClick={() => setDrop((d) => !d)}>
                  <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>
                </button>
                <div className="dd-panel">
                  {services.map((s) => (
                    <Link key={s.slug} href={`/services/${s.slug}`} tabIndex={drop ? 0 : -1}>
                      <span className="dd-n">{s.n}</span><span>{s.short}</span><img src={s.image} alt="" style={{ objectPosition: s.imagePos }} />
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={n.href} href={n.href} aria-current={isActive(n.href) ? 'page' : undefined}>{n.label}</Link>
            ))}
          </nav>
          <Link href="/contact" className="hdr-contact" aria-current={isActive('/contact') ? 'page' : undefined}>
            <span>Contact us</span><span className="circ"><ArrowUpRight size={18} /></span>
          </Link>
          <button className={`burger${open ? ' x' : ''}`} type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="menu" onClick={() => setOpen((o) => !o)}><i /><i /></button>
        </div>
      </header>
      <div id="menu" className={`menu${open ? ' open' : ''}`} aria-hidden={!open}>
        <nav className="menu-nav" aria-label="Site menu">
          {nav.map((n, i) => (
            <Link key={n.href} href={n.href} style={{ ['--i' as string]: i }} aria-current={isActive(n.href) ? 'page' : undefined} tabIndex={open ? 0 : -1}>{n.label}</Link>
          ))}
        </nav>
        <div className="menu-foot">
          {company.phones.map((p, i) => (<a key={p} href={company.phoneHref[i]} tabIndex={open ? 0 : -1}><Phone size={16} /> {p}</a>))}
        </div>
      </div>
    </>
  );
}
