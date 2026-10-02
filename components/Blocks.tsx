import Link from 'next/link';
import type { ReactNode } from 'react';
import { closing, company, type Service, type WorkItem } from '@/lib/content';
import { Arrow, ArrowUpRight } from './Icons';

export function SectionHead({ eyebrow, title, lead, action }: { eyebrow: string; title: ReactNode; lead?: string; action?: ReactNode }) {
  return (
    <div className="sec-head reveal">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="display h2">{title}</h2>
        {lead ? <p className="lead">{lead}</p> : null}
      </div>
      {action}
    </div>
  );
}

export function PageHero({ crumb, title, lead, image, imagePos, children }: { crumb: string; title: ReactNode; lead?: string; image?: string; imagePos?: string; children?: ReactNode }) {
  return (
    <section className={`phero${image ? ' has-img' : ''}`}>
      {image ? <div className="bgimg"><img src={image} alt="" style={{ objectPosition: imagePos }} /></div> : null}
      <div className="container inner">
        <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span>{crumb}</span></nav>
        <h1 className="display h1">{title}</h1>
        {lead ? <p className="lead">{lead}</p> : null}
        {children}
      </div>
    </section>
  );
}

export function ServiceCard({ s }: { s: Service }) {
  return (
    <Link href={`/services/${s.slug}`} className="svc-card reveal">
      <span className="bg" aria-hidden="true"><img src={s.image} alt="" style={{ objectPosition: s.imagePos }} /></span>
      <span className="num">{s.n}</span>
      <h3>{s.title}</h3>
      <p>{s.tagline}</p>
      <span className="go">View service <ArrowUpRight /></span>
    </Link>
  );
}

export function WorkCard({ w }: { w: WorkItem }) {
  return (
    <Link href="/work" className={`work-card reveal ${w.size ?? 'std'}`} aria-label={`${w.title}, ${w.cat}`}>
      <img src={w.image} alt={`Placeholder visual: ${w.title}`} style={{ objectPosition: w.pos }} />
      <span className="ph-tag">Placeholder · replace with project photo</span>
      <span className="work-info"><h3>{w.title}</h3><span className="tag">{w.cat}</span></span>
    </Link>
  );
}

export function CtaBand() {
  return (
    <section className="sec">
      <div className="container">
        <div className="cta-band reveal">
          <span className="shape" aria-hidden="true" />
          <div className="l">
            <span className="mono" style={{ color: 'rgba(22,25,22,0.7)' }}>{company.tagline}</span>
            <h2 className="display h2">{closing.title}</h2>
            <div className="lines">{closing.lines.map((l) => <span key={l}>{l}</span>)}</div>
          </div>
          <div className="r">
            <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6 }}>{closing.body}</p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <Link className="btn btn-dark" href="/contact">Request a quote <Arrow size={16} /></Link>
              <a className="btn btn-ghost" style={{ color: 'var(--ink)', boxShadow: 'inset 0 0 0 1px rgba(22,25,22,0.4)' }} href={company.phoneHref[0]}>{company.phones[0]}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
