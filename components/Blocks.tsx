import Link from 'next/link';
import type { ReactNode } from 'react';
import { Letters } from './Text';
import { ArrowUpRight } from './Icons';
import Marquee from './Marquee';
import { clients } from '@/lib/content';

export function PageHero({ crumb, title, lead, image, imagePos, children }: { crumb: string; title: string; lead?: string; image?: string; imagePos?: string; children?: ReactNode }) {
  return (
    <section className="phero">
      <div className="container">
        <nav className="crumbs reveal" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span>{crumb}</span></nav>
        <div className="ph-grid">
          <Letters as="h1" text={title} className={`ph-title${title.length > 22 ? ' long' : ''}`} />
          <div className="ph-side">
            {lead ? <p className="lead reveal">{lead}</p> : null}
            {children ? <div className="reveal">{children}</div> : null}
          </div>
        </div>
      </div>
      {image ? (
        <div className="ph-media reveal" data-cursor="LARO">
          <img src={image} alt="" style={{ objectPosition: imagePos }} data-parallax="0.12" />
        </div>
      ) : null}
    </section>
  );
}

// Section header: eyebrow + title on the left, lead (and optional action) on the right
export function SecHead({ eyebrow, title, lead, action }: { eyebrow?: string; title: string; lead?: string; action?: ReactNode }) {
  return (
    <div className="sec-head">
      <div className="sh-l">
        {eyebrow ? <span className="eyebrow reveal">{eyebrow}</span> : null}
        <Letters text={title} />
      </div>
      {lead || action ? (
        <div className="sh-r">
          {lead ? <p className="lead reveal">{lead}</p> : null}
          {action ? <div className="reveal">{action}</div> : null}
        </div>
      ) : null}
    </div>
  );
}

// Green pill link with white text, used for "View all works", "Integrated solutions" etc.
export function GoBtn({ href, children, light = false }: { href: string; children: ReactNode; light?: boolean }) {
  return <Link href={href} className={`go-btn${light ? ' light' : ''}`}><span>{children}</span><ArrowUpRight size={18} /></Link>;
}

export function Title({ text, sub }: { text: string; sub?: string }) {
  return (
    <div className="title-c">
      <Letters text={text} />
      {sub ? <p className="lead reveal">{sub}</p> : null}
    </div>
  );
}

export function SecFoot({ left, href, label }: { left: ReactNode; href: string; label: string }) {
  return (
    <>
      <div className="sec-foot"><p>{left}</p><GoBtn href={href}>{label}</GoBtn></div>
      <hr className="rule" />
    </>
  );
}

// Client logos on two rows drifting in opposite directions (speed follows scrolling)
export function LogoGrid() {
  const half = Math.ceil(clients.length / 2);
  const row = (list: typeof clients) => list.map((c) => (
    <span key={c.name} className="logo-cell" data-cursor="Client" title={c.name}>
      <img src={c.logo} alt={c.name} loading="lazy" decoding="async" />
    </span>
  ));
  return (
    <div className="logo-rows reveal">
      <Marquee speed={0.5}><div className="logo-row">{row(clients.slice(0, half))}</div></Marquee>
      <Marquee speed={0.5} reverse><div className="logo-row">{row(clients.slice(half))}</div></Marquee>
    </div>
  );
}

// Every client logo in a grid with its name (Clients page)
export function LogoWall() {
  return (
    <ul className="logo-wall">
      {clients.map((c, i) => (
        <li key={c.name} className="reveal" style={{ ['--d' as string]: `${(i % 4) * 60}ms` }} data-cursor="Client">
          <span className="lw-logo"><img src={c.logo} alt="" loading="lazy" decoding="async" /></span>
          <span className="lw-name">{c.name}</span>
        </li>
      ))}
    </ul>
  );
}

export function ArrowBtn({ href, children, dark = false }: { href: string; children: ReactNode; dark?: boolean }) {
  return <Link href={href} className={`pill-btn${dark ? ' dark' : ''}`}><span>{children}</span><span className="circ"><ArrowUpRight size={18} /></span></Link>;
}
