import type { Metadata } from 'next';
import { commitment, intro, legalDocs, team, why } from '@/lib/content';
import { PageHero, Title } from '@/components/Blocks';
import WeAre from '@/components/WeAre';
import HoverRows from '@/components/HoverRows';
import { Letters, ScrollText } from '@/components/Text';
import { Doc, Download } from '@/components/Icons';

export const metadata: Metadata = { title: 'About', description: 'LARO Advertising PLC is an Ethiopian branding, printing, advertising, promotional products and event company founded in 2012.' };

export default function AboutPage() {
  return (
    <>
      <PageHero crumb="About" title="About Us" lead={intro.lead} image="/images/signage.jpg" imagePos="45% 40%" />
      <section className="sec">
        <div className="container two-col">
          <span className="label reveal">Since 2012</span>
          <ScrollText text="Founded in Addis Ababa in 2012, LARO Advertising PLC brings strategy, creativity, production and execution together." accent={intro.oneLiner} />
        </div>
        <div className="container stats">
          {[{ n: 2012, l: 'Founded' }, { n: 8, l: 'Capabilities' }, { n: 11, l: 'Sectors served' }, { n: 18, l: 'Partner brands', s: '+' }].map((x) => (
            <div className="stat reveal" key={x.l}><b data-count={x.n} data-suffix={x.s ?? ''}>{x.n}{x.s ?? ''}</b><span>{x.l}</span></div>
          ))}
        </div>
      </section>
      <WeAre line1="Elevate" line2="Your Business" link={false} />
      <section className="sec">
        <div className="container two-col"><span className="label reveal">Our commitment</span><p className="big-quote reveal">“{commitment}”</p></div>
      </section>
      <section className="sec sec-gray">
        <div className="container">
          <div className="aw-head"><Letters text="Why LARO" /><p className="aw-quote reveal">{intro.purpose}</p></div>
          <HoverRows rows={why.map((w, i) => ({ n: `0${i + 1}`, t: w.t, r: w.d, img: ['/images/gifts.jpg', '/images/events.jpg', '/images/print.jpg', '/images/signage.jpg', '/images/stationery.jpg', '/images/eco.jpg', '/images/flags.jpg'][i] }))} />
        </div>
      </section>
      <section className="sec" id="leadership">
        <div className="container">
          <Title text="Our Leadership Team" />
          <div className="team">
            {team.map((m, i) => (
              <article key={m.name} className="member reveal" style={{ ['--d' as string]: `${i * 70}ms` }} data-cursor={m.initials}>
                <div className="ph" role="img" aria-label={`Portrait placeholder for ${m.name}`}><b aria-hidden="true">{m.initials}</b><span className="ph-tag">Portrait placeholder</span></div>
                <h3>{m.name}</h3><p>{m.role}</p><span className="label">{m.exp} · {m.note}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="sec sec-gray" id="legal">
        <div className="container">
          <Title text="Legal Documents" sub="Registration and tax documents for procurement and supplier onboarding." />
          <div className="docs">
            {legalDocs.map((d, i) => (
              <a key={d.t} className="doc reveal" href="#legal" style={{ ['--d' as string]: `${i * 70}ms` }} data-cursor="PDF">
                <span className="ic"><Doc /></span><h3>{d.t}</h3><p>{d.d}</p><span className="dl"><Download /> PDF placeholder · upload document</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
