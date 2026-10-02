import type { Metadata } from 'next';
import { sectors } from '@/lib/content';
import { LogoGrid, PageHero, Title } from '@/components/Blocks';
import LensWord from '@/components/LensWord';

export const metadata: Metadata = { title: 'Clients', description: 'LARO Advertising PLC serves government institutions, banks, insurers, NGOs, international organizations and corporate businesses.' };

export default function ClientsPage() {
  return (
    <>
      <PageHero crumb="Clients" title="Who We Serve" lead={sectors.lead} />
      <section className="sec lens-sec" style={{ paddingTop: 0 }}>
        <LensWord word="SECTORS" left="Across every sector" right="Built for institutions" image="/images/events.jpg" />
        <div className="container">
          <ol className="sector-list">{sectors.list.map((s, i) => (<li key={s} className="reveal" style={{ ['--d' as string]: `${(i % 4) * 50}ms` }}><span>{String(i + 1).padStart(2, '0')}</span>{s}</li>))}</ol>
        </div>
      </section>
      <section className="sec sec-gray">
        <div className="container"><Title text="Our Clients" sub="Placeholder logos. Add client logos you have permission to show." /><LogoGrid count={32} /></div>
      </section>
      <section className="sec">
        <div className="container">
          <Title text="What Clients Say" />
          <div className="feat">
            {['/images/events.jpg', '/images/gifts.jpg', '/images/signage.jpg'].map((img, i) => (
              <figure key={img} className="feat-card reveal" style={{ ['--d' as string]: `${i * 90}ms` }} data-cursor="Read">
                <span className="fc-img"><img src={img} alt="" /></span>
                <blockquote><i>“</i>[Client testimonial {i + 1}: a short, approved quote about quality and delivery.]<i>”</i></blockquote>
                <figcaption><b>[Name]</b> · [Organization]</figcaption>
                <span className="ph-tag">Testimonial placeholder</span>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
