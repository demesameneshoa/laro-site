import type { Metadata } from 'next';
import Link from 'next/link';
import { approach, capabilities, integrated } from '@/lib/content';
import { ArrowUpRight } from '@/components/Icons';
import { PageHero, SecHead } from '@/components/Blocks';
import ApproachJourney from '@/components/ApproachJourney';
import HoverRows from '@/components/HoverRows';

export const metadata: Metadata = { title: 'Solutions', description: 'Integrated projects, process and delivery: one brief and one coordinated partner from strategy and design to production, installation and delivery.' };

export default function SolutionsPage() {
  return (
    <>
      <PageHero crumb="Solutions" title={'One Brief.\nOne Partner.'} lead={`${integrated.lead} ${integrated.body}`} image="/images/work/team-brief.jpg" imagePos="50% 45%" />
      <section className="sec">
        <div className="container">
          <SecHead eyebrow="Integrated projects" title="A Single Project Can Combine" lead="Each step below can be part of one brief, handled by one coordinated team." />
          <ol className="net">{integrated.chain.map((c, i) => (<li key={c} className="reveal" style={{ ['--d' as string]: `${i * 60}ms` }}><span>0{i + 1}</span>{c}</li>))}</ol>
        </div>
      </section>
      <section className="sec sec-gray">
        <div className="container">
          <SecHead eyebrow="Integrated projects" title="Typical Integrated Briefs" lead="Typical briefs we bring together from strategy to installation." />
          <HoverRows rows={integrated.examples.map((e, i) => ({ n: `0${i + 1}`, t: e.title, r: e.parts.join(' + '), img: e.image }))} />
        </div>
      </section>
      <section className="sec">
        <div className="container">
          <SecHead eyebrow="Process" title={approach.title} lead={approach.lead} />
          <ApproachJourney />
        </div>
      </section>
      <section className="sec sec-gray">
        <div className="container">
          <SecHead eyebrow="Delivery" title="How We Deliver" lead={capabilities.lead}
            action={<Link href="/contact" className="go-btn"><span>Request a quote</span><ArrowUpRight size={18} /></Link>} />
          <div className="why-cols">
            {capabilities.items.map((c, i) => (
              <div key={c.t} className="why-col reveal" style={{ ['--d' as string]: `${(i % 4) * 70}ms` }}>
                <span className="wc-n">0{i + 1}</span><h3>{c.t}</h3><p>{c.d}</p>
              </div>
            ))}
          </div>
          <ul className="chips-row reveal">{capabilities.quality.map((q) => <li key={q}>{q}</li>)}</ul>
        </div>
      </section>
    </>
  );
}
