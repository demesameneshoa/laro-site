import type { Metadata } from 'next';
import { approach, integrated } from '@/lib/content';
import { PageHero, Title } from '@/components/Blocks';
import HoverRows from '@/components/HoverRows';
import { Letters } from '@/components/Text';

export const metadata: Metadata = { title: 'Integrated Solutions', description: 'One brief, one partner, one brand experience: strategy, design, production, printing, promotional products, signage, installation and delivery.' };

export default function SolutionsPage() {
  return (
    <>
      <PageHero crumb="Integrated solutions" title={'One Brief.\nOne Partner.'} lead={`${integrated.lead} ${integrated.body}`} image="/images/events.jpg" imagePos="70% 45%" />
      <section className="sec">
        <div className="container">
          <Title text="A Single Project Can Combine" />
          <ol className="net">{integrated.chain.map((c, i) => (<li key={c} className="reveal" style={{ ['--d' as string]: `${i * 60}ms` }}><span>0{i + 1}</span>{c}</li>))}</ol>
        </div>
      </section>
      <section className="sec sec-gray">
        <div className="container">
          <div className="aw-head"><Letters text="Integrated Projects" /><p className="aw-quote reveal">Examples of briefs we bring together from strategy to installation.</p></div>
          <HoverRows rows={integrated.examples.map((e, i) => ({ n: `0${i + 1}`, t: e.title, r: e.parts.join(' + '), img: e.image }))} />
        </div>
      </section>
      <section className="sec">
        <div className="container">
          <div className="aw-head"><Letters text={approach.title} /><p className="aw-quote reveal">“{approach.lead}”</p></div>
          <HoverRows rows={approach.steps.map((s, i) => ({ n: s.n, t: s.t, mid: 'Step', r: s.d, img: integrated.examples[i % 4].image }))} />
        </div>
      </section>
    </>
  );
}
