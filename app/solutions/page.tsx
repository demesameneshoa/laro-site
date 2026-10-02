import type { Metadata } from 'next';
import { approach, integrated } from '@/lib/content';
import { CtaBand, PageHero, SectionHead } from '@/components/Blocks';

export const metadata: Metadata = { title: 'Integrated Solutions', description: 'One brief, one partner, one brand experience: strategy, design, production, printing, promotional products, signage, installation and delivery.' };

export default function SolutionsPage() {
  return (
    <>
      <PageHero crumb="Integrated solutions" title={integrated.title} lead={integrated.lead} image="/images/events.jpg" imagePos="70% 45%" />
      <section className="sec">
        <div className="container">
          <SectionHead eyebrow="A single project can combine" title="From strategy to installation, without the hand-offs." lead={integrated.body} />
          <div className="chain reveal">{integrated.chain.map((c, i) => (<span key={c} style={{ display: 'contents' }}>{i > 0 ? <i aria-hidden="true">→</i> : null}<span>{c}</span></span>))}</div>
        </div>
      </section>
      <section className="sec border-top">
        <div className="container">
          <SectionHead eyebrow="Examples of integrated projects" title="Typical briefs we bring together." />
          <div className="examples">
            {integrated.examples.map((e) => (
              <article className="example reveal" key={e.title}>
                <div className="img"><img src={e.image} alt="" /></div>
                <div className="body"><h3>{e.title}</h3><p>{e.parts.join(' + ')}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="sec sec-paper">
        <div className="container">
          <SectionHead eyebrow="Our approach" title={approach.title} lead={approach.lead} />
          <div className="steps">{approach.steps.map((s) => (<div className="step reveal" key={s.n}><b>{s.n}</b><h3>{s.t}</h3><p>{s.d}</p></div>))}</div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
