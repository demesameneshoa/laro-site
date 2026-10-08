import type { Metadata } from 'next';
import { commitment, intro, leadership, why } from '@/lib/content';
import { PageHero, SecHead } from '@/components/Blocks';
import WeAre from '@/components/WeAre';
import HoverRows from '@/components/HoverRows';
import Credentials from '@/components/Credentials';
import Brochure from '@/components/Brochure';
import { ScrollText } from '@/components/Text';

export const metadata: Metadata = { title: 'About', description: 'LARO Advertising PLC is an Ethiopian branding, printing, advertising, 3D corporate flags, premium corporate gifts and event company founded in 2012.' };

const stats = [
  { n: 2012, s: '', label: 'Founded', note: 'in Addis Ababa, Ethiopia' },
  { n: 8, s: '', label: 'Capabilities', note: 'from strategy to installation' },
  { n: 11, s: '', label: 'Sectors served', note: 'public, international and private' },
  { n: 18, s: '+', label: 'Partner brands', note: 'brands we produce for' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero crumb="About" title="About Us" lead={intro.lead} image="/images/signage.jpg" imagePos="45% 40%" />
      <section className="sec">
        <div className="container two-col">
          <span className="eyebrow reveal">Since 2012</span>
          <ScrollText text="Founded in Addis Ababa in 2012, LARO Advertising PLC brings strategy, creativity, production and execution together." accent={intro.oneLiner} />
        </div>
        <div className="container stats">
          {stats.map((x, i) => (
            <div className="stat reveal" key={x.label} style={{ ['--d' as string]: `${i * 80}ms` }}>
              <span className="stat-label">{x.label}</span>
              <b data-count={x.n} data-suffix={x.s}>{x.n}{x.s}</b>
              <span className="stat-note">{x.note}</span>
            </div>
          ))}
        </div>
      </section>
      <WeAre line1="Elevate" line2="Your Business" link={false} />
      <section className="sec">
        <div className="container two-col"><span className="eyebrow reveal">Our commitment</span><p className="big-quote reveal">“{commitment}”</p></div>
      </section>
      <section className="sec sec-gray">
        <div className="container">
          <SecHead eyebrow="Why LARO" title="What Clients Can Count On" lead={intro.purpose} />
          <HoverRows rows={why.map((w, i) => ({ n: `0${i + 1}`, t: w.t, r: w.d, img: ['/images/gifts.jpg', '/images/events.jpg', '/images/print.jpg', '/images/signage.jpg', '/images/stationery.jpg', '/images/eco.jpg', '/images/flags.jpg'][i] }))} />
        </div>
      </section>
      <section className="sec" id="leadership">
        <div className="container">
          <SecHead eyebrow="Leadership" title="Our Leadership Team" lead="The people who brief, produce, coordinate and deliver every LARO project." />
          {leadership.map((g) => (
            <div key={g.group} className="lead-group">
              <h3 className="lg-title reveal"><span>{g.group}</span><i>{String(g.people.length).padStart(2, '0')}</i></h3>
              <div className="team">
                {g.people.map((m, i) => (
                  <article key={m.name} className="member reveal" style={{ ['--d' as string]: `${i * 70}ms` }}>
                    <div className="ph" tabIndex={0} aria-label={`${m.name}: full profile`}>
                      {m.photo ? <img src={m.photo} alt={`Portrait of ${m.name}`} loading="lazy" /> : <><b aria-hidden="true">{m.initials}</b><span className="ph-tag">Portrait placeholder</span></>}
                      <span className="m-more" aria-hidden="true">+</span>
                      <div className="m-pop"><span className="m-pop-role">{m.role}</span><p>{m.bio}</p></div>
                    </div>
                    <h4>{m.name}</h4><p className="m-role">{m.role}</p>
                    <p className="m-bio">{m.short}</p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="sec sec-gray" id="credentials">
        <div className="container">
          <SecHead eyebrow="Credentials" title="Certificates & Credentials" lead="Certificates and recognitions from the organizations we work with. Select any item to view it larger." />
          <Credentials />
        </div>
      </section>
      <section className="sec" id="brochure">
        <div className="container"><Brochure /></div>
      </section>
    </>
  );
}
