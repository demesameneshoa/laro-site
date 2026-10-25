import type { Metadata } from 'next';
import { sectors } from '@/lib/content';
import { LogoWall, PageHero, SecHead } from '@/components/Blocks';
import LensWord from '@/components/LensWord';
import Testimonials from '@/components/Testimonials';

export const metadata: Metadata = { title: 'Clients', description: 'LARO Advertising PLC serves government institutions, banks, insurers, NGOs, international organizations and corporate businesses.' };

export default function ClientsPage() {
  return (
    <>
      <PageHero crumb="Clients" title="Who We Serve" lead={sectors.lead} />
      <section className="sec lens-sec" style={{ paddingTop: 0 }}>
        <LensWord word="SECTORS" left="Across every sector" right="Built for institutions" image="/images/work/ceremonial-flag-line-up.jpg" />
        <div className="container">
          <ol className="sector-tiles">{sectors.list.map((s, i) => (<li key={s} className="reveal" style={{ ['--d' as string]: `${(i % 4) * 60}ms` }}><span>{String(i + 1).padStart(2, '0')}</span>{s}</li>))}</ol>
        </div>
      </section>
      <section className="sec sec-gray">
        <div className="container"><SecHead eyebrow="Trusted by" title="Our Clients" lead="A trusted partner to organizations that expect professional communication, quality execution and dependable delivery." /><LogoWall /></div>
      </section>
      <section className="sec">
        <div className="container">
          <SecHead eyebrow="Testimonials" title="What Clients Say" lead="In their own words: institutions and businesses on working with LARO." />
          <Testimonials />
        </div>
      </section>
    </>
  );
}
