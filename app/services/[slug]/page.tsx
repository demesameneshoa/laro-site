import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { services } from '@/lib/content';
import { CtaBand, PageHero, ServiceCard } from '@/components/Blocks';
import { Arrow } from '@/components/Icons';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return {};
  return { title: s.title, description: `${s.tagline} ${s.intro[0]}`, openGraph: { images: [s.image] } };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const idx = services.findIndex((x) => x.slug === slug);
  if (idx < 0) notFound();
  const s = services[idx];
  const prev = services[(idx + services.length - 1) % services.length];
  const next = services[(idx + 1) % services.length];
  const related = services.filter((x) => x.slug !== s.slug).slice(idx % 5, (idx % 5) + 3);

  return (
    <>
      <PageHero crumb={`Services / ${s.n}`} title={s.title} lead={s.tagline} image={s.image} imagePos={s.imagePos}>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Link className="btn btn-primary" href="/contact">Request a quote <Arrow size={16} /></Link>
          <a className="btn btn-ghost" href="#what-we-do">What we do</a>
        </div>
      </PageHero>

      <section className="sec">
        <div className="container svc-intro">
          <div className="a reveal"><span className="eyebrow">{s.n} · {s.short}</span></div>
          <div className="b reveal">{s.intro.map((p) => <p key={p}>{p}</p>)}</div>
        </div>
      </section>

      <section className="sec border-top" id="what-we-do">
        <div className="container">
          <div className="sec-head reveal"><div><span className="eyebrow">What we do</span><h2 className="display h2">{s.items.length} ways we deliver.</h2></div></div>
          <ul className="items reveal">{s.items.map((it, i) => (<li key={it}><i>{String(i + 1).padStart(2, '0')}</i>{it}</li>))}</ul>
          <div className="svc-intro" style={{ marginTop: 72 }}>
            <div className="a" />
            <div className="b reveal"><p>{s.outro}</p><p className="closer green">{s.closer}</p></div>
          </div>
        </div>
      </section>

      <section className="sec sec-alt">
        <div className="container">
          <div className="sec-head reveal"><div><span className="eyebrow">Related services</span><h2 className="display h2">Combine for one brand experience.</h2></div><Link className="btn btn-ghost" href="/solutions">Integrated solutions <Arrow size={16} /></Link></div>
          <div className="svc-grid" style={{ gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' }}>{related.map((r) => <ServiceCard key={r.slug} s={r} />)}</div>
          <nav className="svc-nav" aria-label="Service navigation" style={{ marginTop: 48 }}>
            <Link className="link-arrow" href={`/services/${prev.slug}`}>← {prev.n} {prev.short}</Link>
            <Link className="link-arrow" href={`/services/${next.slug}`}>{next.n} {next.short} <Arrow /></Link>
          </nav>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
