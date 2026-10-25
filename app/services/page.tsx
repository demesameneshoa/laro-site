import type { Metadata } from 'next';
import Link from 'next/link';
import { intro, serviceGroups, services } from '@/lib/content';
import { PageHero, SecHead } from '@/components/Blocks';
import PinnedServices from '@/components/PinnedServices';
import { ArrowUpRight } from '@/components/Icons';

export const metadata: Metadata = { title: 'Services', description: 'Ten service areas from LARO Advertising PLC: advertising, branding, design and printing, 3D corporate flags, corporate gifts, gift boxes, events, ICT supply, support services and Adey Abeba carpets.' };

export default function ServicesPage() {
  return (
    <>
      <PageHero crumb="Services" title="Services" lead={`${intro.lead} ${intro.oneLiner}`} />
      <PinnedServices />
      {serviceGroups.map((g, gi) => (
        <section key={g.name} className={`sec svc-group${gi % 2 ? ' sec-gray' : ''}`} id={g.name.toLowerCase().replace(/[^a-z]+/g, '-')}>
          <div className="container">
            <SecHead eyebrow={`Group ${gi + 1} of ${serviceGroups.length}`} title={g.name} lead={g.lead} />
            <div className="svc-rows">
              {services.filter((s) => s.group === g.name).map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="svc-row reveal" data-cursor="Explore">
                  <span className="sr-n">Service {s.n}</span>
                  <span className="sr-t">{s.title}</span>
                  <span className="sr-img"><img src={s.image} alt="" style={{ objectPosition: s.imagePos }} /></span>
                  <span className="sr-d">{s.tagline}<br /><small>{s.items.slice(0, 5).join(' · ')}</small></span>
                  <span className="sr-go"><ArrowUpRight size={24} /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
