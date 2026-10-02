import type { Metadata } from 'next';
import { commitment, intro, legalDocs, team, why } from '@/lib/content';
import { CtaBand, PageHero, SectionHead } from '@/components/Blocks';
import { Doc, Download } from '@/components/Icons';

export const metadata: Metadata = { title: 'About', description: 'LARO Advertising PLC is an Ethiopian branding, printing, advertising, promotional products and event company founded in 2012.' };

export default function AboutPage() {
  return (
    <>
      <PageHero crumb="About" title="About LARO" lead={intro.lead} image="/images/signage.jpg" imagePos="45% 40%" />
      <section className="sec">
        <div className="container statement">
          <div className="st-label reveal"><span className="eyebrow">Who we are</span></div>
          <div className="st-body reveal">
            <p className="big">Founded in Addis Ababa in 2012, LARO Advertising PLC brings strategy, creativity, production and execution together. <em>{intro.oneLiner}</em></p>
            <p className="lead">{intro.body}</p>
            <p className="lead">{intro.purpose}</p>
          </div>
        </div>
      </section>
      <section className="sec sec-paper">
        <div className="container statement">
          <div className="st-label reveal"><span className="eyebrow">Our commitment</span></div>
          <div className="st-body reveal"><p className="big" style={{ color: 'var(--ink)' }}>{commitment}</p></div>
        </div>
      </section>
      <section className="sec">
        <div className="container">
          <SectionHead eyebrow="Why LARO" title="What clients can count on." />
          <div className="why-grid">{why.map((w, i) => (<div className="why reveal" key={w.t}><span className="mono green">{String(i + 1).padStart(2, '0')}</span><h3>{w.t}</h3><p>{w.d}</p></div>))}</div>
        </div>
      </section>
      <section className="sec sec-alt" id="leadership">
        <div className="container">
          <SectionHead eyebrow="Our leadership team" title="The people behind every project." />
          <div className="team-grid">
            {team.map((m) => (
              <article className="member reveal" key={m.name}>
                <div className="ph" role="img" aria-label={`Portrait placeholder for ${m.name}`}><span className="ph-tag">Portrait placeholder</span><b aria-hidden="true">{m.initials}</b></div>
                <div><h3>{m.name}</h3><p>{m.role}</p></div>
                <span className="exp">{m.exp} · {m.note}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="sec" id="legal">
        <div className="container">
          <SectionHead eyebrow="Legal documents" title="Registered, licensed and tender-ready." lead="Copies of our registration and tax documents are available for procurement and supplier onboarding." />
          <div className="docs">
            {legalDocs.map((d) => (
              <a className="doc reveal" key={d.t} href="#" aria-label={`${d.t} (document to be added)`}>
                <span className="ic"><Doc /></span><h3>{d.t}</h3><p>{d.d}</p>
                <span className="dl" style={{ color: 'var(--placeholder)' }}><Download /> PDF placeholder · upload document</span>
              </a>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
