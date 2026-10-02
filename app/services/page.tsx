import type { Metadata } from 'next';
import Link from 'next/link';
import { intro, services } from '@/lib/content';
import { PageHero } from '@/components/Blocks';
import PinnedServices from '@/components/PinnedServices';
import { ArrowUpRight } from '@/components/Icons';

export const metadata: Metadata = { title: 'Services', description: 'Brand strategy, creative design, printing, signage, promotional products, eco-friendly solutions, events and sourcing from LARO Advertising PLC.' };

export default function ServicesPage() {
  return (
    <>
      <PageHero crumb="Services" title="Services" lead={`${intro.lead} ${intro.oneLiner}`} />
      <PinnedServices />
      <section className="sec">
        <div className="container svc-rows">
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="svc-row reveal" data-cursor="Explore">
              <span className="sr-n">Service {s.n}</span>
              <span className="sr-t">{s.title}</span>
              <span className="sr-img"><img src={s.image} alt="" style={{ objectPosition: s.imagePos }} /></span>
              <span className="sr-d">{s.tagline}<br /><small>{s.items.slice(0, 5).join(' · ')}</small></span>
              <span className="sr-go"><ArrowUpRight size={24} /></span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
