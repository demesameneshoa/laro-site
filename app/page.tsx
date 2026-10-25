import Link from 'next/link';
import { ArrowUpRight } from '@/components/Icons';
import { approach, sectors, why } from '@/lib/content';
import HeroCarousel from '@/components/HeroCarousel';
import FeaturedWork from '@/components/FeaturedWork';
import PinnedServices from '@/components/PinnedServices';
import WeAre from '@/components/WeAre';
import ApproachJourney from '@/components/ApproachJourney';
import LensWord from '@/components/LensWord';
import { LogoGrid, SecHead } from '@/components/Blocks';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <FeaturedWork />
      <PinnedServices />
      <WeAre />

      <section className="sec sec-gray">
        <div className="container">
          <SecHead eyebrow="Our approach" title="From Brief to Delivery" lead={approach.lead} />
          <ApproachJourney />
        </div>
      </section>

      <section className="sec sectors-sec">
        <div className="container">
          <SecHead eyebrow="Who we serve" title="Built for Institutions" lead={sectors.lead} />
        </div>
        <LensWord word="SECTORS" left="Sectors we serve" right="One standard of delivery" image="/images/work/mesob-flags.jpg" />
        <div className="container">
          <ul className="sector-tiles">
            {sectors.list.map((s, i) => (<li key={s} className="reveal" style={{ ['--d' as string]: `${(i % 4) * 60}ms` }}><span>{String(i + 1).padStart(2, '0')}</span>{s}</li>))}
          </ul>
        </div>
      </section>

      <section className="sec">
        <div className="container">
          <SecHead eyebrow="Why LARO" title="Professional Communication. Dependable Delivery." lead="Seven reasons institutions and businesses trust us with their brand, from the first brief to the final installation." />
          <div className="why-cols">
            {why.map((w, i) => (
              <div key={w.t} className="why-col reveal" style={{ ['--d' as string]: `${(i % 4) * 70}ms` }}>
                <span className="wc-n">0{i + 1}</span><h3>{w.t}</h3><p>{w.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="container">
          <SecHead eyebrow="Trusted by" title="Our Clients" lead="A trusted partner to organizations that expect professional communication, quality execution and dependable delivery." action={<Link href="/about#clients" className="go-btn"><span>All clients</span><ArrowUpRight size={18} /></Link>} />
          <LogoGrid />
        </div>
      </section>

      <section className="sec sec-gray">
        <div className="container">
          <SecHead eyebrow="Testimonials" title="What Clients Say" lead="In their own words: institutions and businesses on working with LARO." />
          <Testimonials />
        </div>
      </section>

    </>
  );
}
