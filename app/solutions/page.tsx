import type { Metadata } from 'next';
import { approach, integrated } from '@/lib/content';
import { PageHero, SecHead } from '@/components/Blocks';
import ApproachJourney from '@/components/ApproachJourney';
import HoverRows from '@/components/HoverRows';

export const metadata: Metadata = { title: 'Integrated Solutions', description: 'One brief, one partner, one brand experience: strategy, design, production, printing, promotional products, signage, installation and delivery.' };

export default function SolutionsPage() {
  return (
    <>
      <PageHero crumb="Integrated solutions" title={'One Brief.\nOne Partner.'} lead={`${integrated.lead} ${integrated.body}`} image="/images/events.jpg" imagePos="70% 45%" />
      <section className="sec">
        <div className="container">
          <SecHead eyebrow="The chain" title="A Single Project Can Combine" lead="Each step below can be part of one brief, handled by one coordinated team." />
          <ol className="net">{integrated.chain.map((c, i) => (<li key={c} className="reveal" style={{ ['--d' as string]: `${i * 60}ms` }}><span>0{i + 1}</span>{c}</li>))}</ol>
        </div>
      </section>
      <section className="sec sec-gray">
        <div className="container">
          <SecHead eyebrow="Examples" title="Integrated Projects" lead="Typical briefs we bring together from strategy to installation." />
          <HoverRows rows={integrated.examples.map((e, i) => ({ n: `0${i + 1}`, t: e.title, r: e.parts.join(' + '), img: e.image }))} />
        </div>
      </section>
      <section className="sec">
        <div className="container">
          <SecHead eyebrow="Our approach" title={approach.title} lead={approach.lead} />
          <ApproachJourney />
        </div>
      </section>
    </>
  );
}
