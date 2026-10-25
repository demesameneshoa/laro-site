import { approach, integrated, sectors, why } from '@/lib/content';
import HeroWordmark from '@/components/HeroWordmark';
import MasonryWork from '@/components/MasonryWork';
import PinnedServices from '@/components/PinnedServices';
import WeAre from '@/components/WeAre';
import ApproachJourney from '@/components/ApproachJourney';
import LensWord from '@/components/LensWord';
import { LogoGrid, SecFoot, SecHead } from '@/components/Blocks';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <>
      <HeroWordmark />
      <MasonryWork />
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
          <SecHead eyebrow="Trusted by" title="Our Clients" lead="A trusted partner to organizations that expect professional communication, quality execution and dependable delivery." />
          <LogoGrid />
        </div>
      </section>

      <section className="sec sec-gray">
        <div className="container">
          <SecHead eyebrow="Testimonials" title="What Clients Say" lead="In their own words: institutions and businesses on working with LARO." />
          <Testimonials />
        </div>
      </section>

      <section className="sec">
        <div className="container">
          <SecHead eyebrow="Integrated solutions" title="One Brief. One Partner." lead={integrated.lead} />
          <ol className="net">
            {integrated.chain.map((c, i) => (<li key={c} className="reveal" style={{ ['--d' as string]: `${i * 60}ms` }}><span>0{i + 1}</span>{c}</li>))}
          </ol>
          <SecFoot left={integrated.body} href="/solutions" label="Integrated solutions" />
        </div>
      </section>
    </>
  );
}
