import type { Metadata } from 'next';
import { sectors } from '@/lib/content';
import { CtaBand, PageHero, SectionHead } from '@/components/Blocks';

export const metadata: Metadata = { title: 'Clients', description: 'LARO Advertising PLC serves government institutions, banks, insurers, NGOs, international organizations and corporate businesses.' };

export default function ClientsPage() {
  return (
    <>
      <PageHero crumb="Clients" title={sectors.title} lead={sectors.lead} />
      <section className="sec" style={{ paddingTop: 24 }}>
        <div className="container">
          <div className="sectors reveal">{sectors.list.map((s, i) => (<div className="sector" key={s}><i>{String(i + 1).padStart(2, '0')}</i>{s}</div>))}</div>
        </div>
      </section>
      <section className="sec sec-alt">
        <div className="container">
          <SectionHead eyebrow="Trusted by" title="Partner brands" action={<span className="mono" style={{ color: 'var(--placeholder)' }}>Placeholder logos · add with client permission</span>} />
          <div className="logo-grid reveal">{Array.from({ length: 18 }).map((_, i) => (<div className="logo-cell" key={i}>[CLIENT LOGO {String(i + 1).padStart(2, '0')}]</div>))}</div>
        </div>
      </section>
      <section className="sec">
        <div className="container">
          <SectionHead eyebrow="Testimonials" title="What our clients say." />
          <div className="quotes">
            {[1, 2, 3].map((n) => (
              <figure className="quote reveal" key={n} style={{ margin: 0 }}>
                <span className="ph-tag">Testimonial placeholder</span>
                <blockquote>[Client testimonial {n}: a short quote about quality, delivery or installation, approved by the client.]</blockquote>
                <figcaption className="who"><i aria-hidden="true" /><span><b>[Name]</b><span>[Title, Organization]</span></span></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
