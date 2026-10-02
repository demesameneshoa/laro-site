import Link from 'next/link';
import type { ReactNode } from 'react';
import { Letters } from './Text';
import { ArrowUpRight } from './Icons';
import Marquee from './Marquee';

export function PageHero({ crumb, title, lead, image, imagePos, children }: { crumb: string; title: string; lead?: string; image?: string; imagePos?: string; children?: ReactNode }) {
  return (
    <section className="phero">
      <div className="container">
        <nav className="crumbs reveal" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span>{crumb}</span></nav>
        <Letters as="h1" text={title} className="ph-title" />
        <div className="ph-row">
          {lead ? <p className="lead reveal">{lead}</p> : <span />}
          {children ? <div className="reveal">{children}</div> : null}
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
      <div className="sec-foot"><span>{left}</span><Link href={href} className="arrow-link"><ArrowUpRight size={22} /><span>{label}</span></Link></div>
      <hr className="rule" />
    </>
  );
}

// Client logos on two rows drifting in opposite directions (speed follows scrolling)
export function LogoGrid({ count = 24 }: { count?: number }) {
  const half = Math.ceil(count / 2);
  const row = (from: number, n: number) => Array.from({ length: n }).map((_, i) => (
    <span key={i} className="logo-cell" data-cursor="Client">[LOGO {String(from + i + 1).padStart(2, '0')}]</span>
  ));
  return (
    <div className="logo-rows reveal">
      <Marquee speed={0.5}><div className="logo-row">{row(0, half)}</div></Marquee>
      <Marquee speed={0.5} reverse><div className="logo-row">{row(half, count - half)}</div></Marquee>
    </div>
  );
}

export function ArrowBtn({ href, children, dark = false }: { href: string; children: ReactNode; dark?: boolean }) {
  return <Link href={href} className={`pill-btn${dark ? ' dark' : ''}`}><span>{children}</span><span className="circ"><ArrowUpRight size={18} /></span></Link>;
}
