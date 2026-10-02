import Link from 'next/link';
import { approach, company, heroSlides, integrated, intro, sectors, services, why, work } from '@/lib/content';
import { CtaBand, SectionHead, ServiceCard, WorkCard } from '@/components/Blocks';
import { Arrow } from '@/components/Icons';

export default function Home() {
  return (
    <>
      <section className="hero" aria-label="Introduction">
        <div className="hero-slides" aria-hidden="true">
          {heroSlides.map((s) => (
            <div className="hero-slide" key={s.image}><img src={s.image} alt="" style={{ objectPosition: s.pos }} /></div>
          ))}
        </div>
        <div className="container hero-body">
          <span className="eyebrow">{company.name} · Addis Ababa · Since {company.founded}</span>
          <h1 className="display h1"><span>Elevate your brand.</span><span className="green">Elevate your business.</span></h1>
          <p className="lead">Strategy, creativity, production and execution, brought together under one partner for businesses, government institutions, NGOs and corporate clients.</p>
          <div className="hero-ctas">
            <Link className="btn btn-primary" href="/contact">Request a quote <Arrow size={16} /></Link>
            <Link className="btn btn-ghost" href="/work">View our work</Link>
          </div>
          <div className="hero-meta">
            <div className="hero-proof"><span>Since 2012</span><span>8 integrated capabilities</span><span>Government</span><span>NGOs</span><span>Banks</span><span>Corporate</span></div>
            <div className="hero-dots" aria-hidden="true">{heroSlides.map((s) => <i key={s.image} />)}</div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="container statement">
          <div className="st-label reveal"><span className="eyebrow">We are LARO</span></div>
          <div className="st-body reveal">
            <p className="big">{intro.lead.replace('At LARO Advertising PLC, we', 'We')} <em>{intro.oneLiner}</em></p>
            <p className="lead">{intro.body}</p>
            <div><Link className="link-arrow" href="/about">More about LARO <Arrow /></Link></div>
            <div className="stats">
              <div className="stat"><b>2012</b><span>Founded in Addis Ababa</span></div>
              <div className="stat"><b>08</b><span>Integrated capabilities</span></div>
              <div className="stat"><b>11</b><span>Sectors served</span></div>
              <div className="stat"><b>18+</b><span>Partner brands</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec border-top">
        <div className="container">
          <SectionHead eyebrow="Selected work" title="Work that puts brands in the room." action={<Link className="btn btn-ghost" href="/work">View all work <Arrow size={16} /></Link>} />
          <div className="work-grid">{work.slice(0, 6).map((w) => <WorkCard key={w.title} w={w} />)}</div>
        </div>
      </section>

      <section className="sec sec-alt">
        <div className="container">
          <SectionHead eyebrow="Our services" title="Eight capabilities. One accountable partner." lead={intro.purpose} action={<Link className="btn btn-ghost" href="/services">All services <Arrow size={16} /></Link>} />
          <div className="svc-grid">{services.map((s) => <ServiceCard key={s.slug} s={s} />)}</div>
        </div>
      </section>

      <section className="sec">
        <div className="container">
          <SectionHead eyebrow="Integrated solutions" title={integrated.title} lead={integrated.lead} action={<Link className="btn btn-ghost" href="/solutions">How it works <Arrow size={16} /></Link>} />
          <div className="chain reveal" aria-label="Integrated project flow">
            {integrated.chain.map((c, i) => (<span key={c} style={{ display: 'contents' }}>{i > 0 ? <i aria-hidden="true">→</i> : null}<span>{c}</span></span>))}
          </div>
          <p className="lead reveal" style={{ marginTop: 32 }}>{integrated.body}</p>
        </div>
      </section>

      <section className="sec sec-paper">
        <div className="container">
          <SectionHead eyebrow="Our approach" title={approach.title} lead={approach.lead} />
          <div className="steps">
            {approach.steps.map((s) => (<div className="step reveal" key={s.n}><b>{s.n}</b><h3>{s.t}</h3><p>{s.d}</p></div>))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="container">
          <SectionHead eyebrow="Who we serve" title="Trusted by institutions that expect it done right." lead={sectors.lead} action={<Link className="btn btn-ghost" href="/clients">Our clients <Arrow size={16} /></Link>} />
          <div className="sectors reveal">
            {sectors.list.map((s, i) => (<div className="sector" key={s}><i>{String(i + 1).padStart(2, '0')}</i>{s}</div>))}
          </div>
        </div>
      </section>

      <section className="sec sec-alt">
        <div className="container">
          <SectionHead eyebrow="Why LARO" title="Professional communication. Dependable delivery." />
          <div className="why-grid">
            {why.slice(0, 7).map((w, i) => (
              <div className="why reveal" key={w.t}><span className="mono green">{String(i + 1).padStart(2, '0')}</span><h3>{w.t}</h3><p>{w.d}</p></div>
            ))}
            <Link className="why cta reveal" href="/contact"><span className="mono">Start a project</span><h3 style={{ fontSize: 26 }}>Tell us your brief, timeline and budget.</h3><span style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 600 }}>Request a quote <Arrow size={16} /></span></Link>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="container">
          <SectionHead eyebrow="Trusted by" title="Partner brands" action={<span className="mono" style={{ color: 'var(--placeholder)' }}>Placeholder logos · add with client permission</span>} />
          <div className="logo-grid reveal">
            {Array.from({ length: 12 }).map((_, i) => (<div className="logo-cell" key={i}>[CLIENT LOGO {String(i + 1).padStart(2, '0')}]</div>))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
