import type { Metadata } from 'next';
import { commitment, coreValues, future, intro, leadership, mission, representsClient, vision, why } from '@/lib/content';
import { LogoWall, PageHero, SecHead } from '@/components/Blocks';
import Testimonials from '@/components/Testimonials';
import WeAre from '@/components/WeAre';
import HoverRows from '@/components/HoverRows';
import Credentials from '@/components/Credentials';
import Brochure from '@/components/Brochure';
import { ScrollText } from '@/components/Text';

export const metadata: Metadata = { title: 'About', description: 'Company story, team, clients and credentials of LARO Advertising PLC, an Ethiopian advertising, branding, printing, 3D corporate flags, corporate gifts and events company founded in 2012.' };

const stats = [
  { n: 2012, s: '', label: 'Founded', note: 'in Addis Ababa, Ethiopia' },
  { n: 10, s: '', label: 'Service areas', note: 'from concept to installation' },
  { n: 11, s: '', label: 'Sectors served', note: 'public, international and private' },
  { n: 18, s: '+', label: 'Partner brands', note: 'brands we produce for' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero crumb="About" title="About Us" lead={intro.lead} image="/images/work/team-meeting.jpg" imagePos="50% 40%" />
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
      <section className="sec sec-gray">
        <div className="container">
          <SecHead eyebrow="Company overview" title="Professional, Reliable, Scalable Services" lead={intro.overview} />
          <dl className="facts">
            {intro.facts.map((f) => (<div key={f.k} className="reveal"><dt>{f.k}</dt><dd>{f.v}</dd></div>))}
          </dl>
          <p className="who-we-are reveal">{intro.whoWeAre}</p>
        </div>
      </section>
      <section className="sec mv-sec">
        <div className="container mv">
          <article className="mv-card mission reveal"><span className="eyebrow">Our mission</span><p>{mission}</p></article>
          <article className="mv-card vision reveal"><span className="eyebrow">Our vision</span><p>{vision}</p></article>
        </div>
        <div className="container">
          <SecHead eyebrow="Core values" title="What We Stand For" />
          <div className="why-cols values">
            {coreValues.map((v, i) => (
              <div key={v.t} className="why-col reveal" style={{ ['--d' as string]: `${(i % 4) * 70}ms` }}>
                <span className="wc-n">0{i + 1}</span><h3>{v.t}</h3><p>{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <WeAre line1="Elevate" line2="Your Business" link={false} />
      <section className="sec">
        <div className="container two-col"><span className="eyebrow reveal">Our commitment</span><p className="big-quote reveal">“{commitment}”</p></div>
        <div className="container represents">
          <span className="eyebrow reveal">Every project represents our client</span>
          <ul className="rep-lines">{representsClient.lines.map(([x, y]) => (<li key={x} className="reveal">{x} <b>{y}</b></li>))}</ul>
          <ul className="chips-row reveal">{representsClient.traits.map((t) => <li key={t}>{t}</li>)}</ul>
          <p className="lead reveal">{representsClient.body}</p>
        </div>
      </section>
      <section className="sec">
        <div className="container">
          <SecHead eyebrow="Our team at work" title="One Team, Brief to Delivery" lead="Account managers, designers and production coordinators working side by side on every project, from the first meeting to final installation." />
          <div className="team-mosaic">
            {[
              ['/images/work/team-brief.jpg', 'The LARO team reviewing a client brief'],
              ['/images/work/team-design.jpg', 'Designers refining artwork together'],
              ['/images/work/team-review.jpg', 'Checking a proof before production'],
              ['/images/work/adey-abeba-carpet-production.jpg', 'Supervising production of an Adey Abeba carpet'],
            ].map(([src, alt], i) => (
              <figure key={src} className={`tm-${i} reveal`} style={{ ['--d' as string]: `${i * 80}ms` }}>
                <img src={src} alt={alt} loading="lazy" />
                <figcaption>{alt}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
      <section className="sec sec-gray">
        <div className="container">
          <SecHead eyebrow="Why LARO" title="What Clients Can Count On" lead={intro.purpose} />
          <HoverRows rows={why.map((w, i) => ({ n: `0${i + 1}`, t: w.t, r: w.d, img: ['/images/work/team-meeting.jpg', '/images/work/cbe-gift-box.jpg', '/images/work/team-review.jpg', '/images/work/publications.jpg', '/images/work/executive-tech-gift-set.jpg', '/images/work/irrigation-lowlands-flags.jpg', '/images/work/bamboo-eco-gift-set.jpg', '/images/work/ministry-of-agriculture-signage.jpg'][i] }))} />
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
      <section className="sec sec-gray" id="clients">
        <div className="container"><SecHead eyebrow="Clients" title="Organizations We Serve" lead="Trusted by selected organizations to turn brand strategy into tangible visual impact: high-impact collateral, corporate gifts and event environments that represent their values with precision." /><LogoWall /></div>
      </section>
      <section className="sec" id="testimonials">
        <div className="container">
          <SecHead eyebrow="Testimonials" title="What Clients Say" lead="In their own words: institutions and businesses on working with LARO." />
          <Testimonials />
        </div>
      </section>
      <section className="sec sec-gray" id="credentials">
        <div className="container">
          <SecHead eyebrow="Credentials" title="Certificates & Credentials" lead="Certificates and recognitions from the organizations we work with. Select any item to view it larger." />
          <Credentials />
        </div>
      </section>
      <section className="sec future-sec" id="future">
        <div className="container">
          <SecHead eyebrow="Growth & future direction" title="Building for the Next Stage" lead={future.lead} />
          <ol className="prio">
            {future.priorities.map((p, i) => (<li key={p} className="reveal" style={{ ['--d' as string]: `${(i % 3) * 60}ms` }}><span>{String(i + 1).padStart(2, '0')}</span>{p}</li>))}
          </ol>
          <p className="goal reveal"><b>Next 3–5 years</b>{future.goal}</p>
        </div>
      </section>
      <section className="sec" id="brochure">
        <div className="container"><Brochure /></div>
      </section>
    </>
  );
}
