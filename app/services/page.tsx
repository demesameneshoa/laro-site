import type { Metadata } from 'next';
import Link from 'next/link';
import { intro, services } from '@/lib/content';
import { CtaBand, PageHero } from '@/components/Blocks';

export const metadata: Metadata = { title: 'Services', description: 'Brand strategy, creative design, printing, signage, promotional products, eco-friendly solutions, events and sourcing from LARO Advertising PLC.' };

export default function ServicesPage() {
  return (
    <>
      <PageHero crumb="Services" title="Our services" lead={`${intro.lead} ${intro.oneLiner}`} />
      <section className="sec" style={{ paddingTop: 24 }}>
        <div className="container svc-rows">
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="svc-row reveal">
              <span className="num">{s.n}</span>
              <span className="txt"><h2>{s.title}</h2><p>{s.tagline}</p><span className="mono green">View service →</span></span>
              <ul>{s.items.slice(0, 5).map((i) => <li key={i}>{i}</li>)}</ul>
              <span className="img"><img src={s.image} alt={`${s.title}: placeholder visual`} style={{ objectPosition: s.imagePos }} /></span>
            </Link>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
