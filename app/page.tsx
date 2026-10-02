import { approach, integrated, sectors, why } from '@/lib/content';
import HeroWordmark from '@/components/HeroWordmark';
import MasonryWork from '@/components/MasonryWork';
import PinnedServices from '@/components/PinnedServices';
import WeAre from '@/components/WeAre';
import HoverRows from '@/components/HoverRows';
import LensWord from '@/components/LensWord';
import Marquee from '@/components/Marquee';
import { LogoGrid, SecFoot, Title } from '@/components/Blocks';
import { Letters } from '@/components/Text';

const stepImages = ['/images/stationery.jpg', '/images/print.jpg', '/images/gifts.jpg', '/images/signage.jpg', '/images/flags.jpg', '/images/events.jpg'];

export default function Home() {
  return (
    <>
      <HeroWordmark />
      <MasonryWork />
      <PinnedServices />
      <WeAre />

      <section className="sec sec-gray">
        <div className="container">
          <div className="aw-head">
            <Letters text="Our Approach" />
            <p className="aw-quote reveal">“{approach.lead}”</p>
          </div>
          <HoverRows rows={approach.steps.map((s, i) => ({ n: s.n, t: s.t, mid: 'Step', r: s.d, img: stepImages[i] }))} />
        </div>
      </section>

      <section className="sec lens-sec">
        <LensWord word="SECTORS" left="Across every sector" right="Built for institutions" image="/images/flags.jpg" />
        <Marquee className="sector-band" speed={0.5}>
          <div className="sector-row">{sectors.list.map((s) => (<span key={s} className="sector-chip">{s}</span>))}</div>
        </Marquee>
      </section>

      <section className="sec">
        <div className="container">
          <Title text="Why LARO" />
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
          <Title text="Our Clients" sub="Placeholder logos. Add client logos you have permission to show." />
          <LogoGrid count={24} />
        </div>
      </section>

      <section className="sec sec-gray">
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

      <section className="sec">
        <div className="container">
          <Title text="One Brief. One Partner." sub={integrated.lead} />
          <ol className="net">
            {integrated.chain.map((c, i) => (<li key={c} className="reveal" style={{ ['--d' as string]: `${i * 60}ms` }}><span>0{i + 1}</span>{c}</li>))}
          </ol>
          <SecFoot left={<>{integrated.body.split('. ')[0]}.</>} href="/solutions" label="Integrated solutions" />
        </div>
      </section>
    </>
  );
}
