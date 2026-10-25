import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { services, work } from '@/lib/content';
import { ArrowBtn, PageHero, SecFoot, SecHead } from '@/components/Blocks';
import { ScrollText, Dots } from '@/components/Text';
import { ArrowUpRight } from '@/components/Icons';
import WorkMedia from '@/components/WorkMedia';

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return services.map((s) => ({ slug: s.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  return s ? { title: s.title, description: `${s.tagline} ${s.intro[0]}`, openGraph: { images: [s.image] } } : {};
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const idx = services.findIndex((x) => x.slug === slug);
  if (idx < 0) notFound();
  const s = services[idx];
  const next = services[(idx + 1) % services.length];
  const related = work.filter((w) => (w.tags ?? [w.cat]).includes(s.tag)).slice(0, 3);
  return (
    <>
      <PageHero crumb={`Services / ${s.n}`} title={s.title} lead={s.tagline} image={s.image} imagePos={s.imagePos}>
        <ArrowBtn href="/contact">Request a quote</ArrowBtn>
      </PageHero>
      <section className="sec">
        <div className="container two-col">
          <span className="eyebrow reveal">{s.short}</span>
          <ScrollText text={s.intro.join(' ')} />
        </div>
      </section>
      <section className="sec sec-gray">
        <div className="container">
          <SecHead eyebrow={`Service ${s.n}`} title="What We Do" lead={s.outro} />
          <ol className="do-list">
            {s.items.map((it, i) => (<li key={it} className="reveal" style={{ ['--d' as string]: `${(i % 3) * 50}ms` }}><span>{String(i + 1).padStart(2, '0')}</span>{it}</li>))}
          </ol>
        </div>
      </section>
      {s.details?.map((g, gi) => (
        <section key={g.title} className={`sec${gi % 2 ? ' sec-gray' : ''}`}>
          <div className="container">
            <SecHead eyebrow={g.eyebrow} title={g.title} />
            <div className="why-cols">
              {g.rows.map((r, i) => (
                <div key={r.t} className="why-col reveal" style={{ ['--d' as string]: `${(i % 4) * 70}ms` }}>
                  <span className="wc-n">0{i + 1}</span><h3>{r.t}</h3><p>{r.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
      <section className="sec closer-sec"><div className="container"><p className="closer reveal">{s.closer}</p></div></section>
      {related.length ? (
        <section className="sec">
          <div className="container">
            <SecHead eyebrow="Portfolio" title="Related Work" />
            <div className="wgrid">
              {related.map((w) => (
                <Link key={w.image} href="/work" className="mw-card reveal" data-cursor="View">
                  <span className="mw-img"><WorkMedia w={w} /></span>
                  <span className="mw-t">{w.title}</span>{w.client ? <span className="mw-client">{w.client}</span> : null}<Dots items={w.tags ?? [w.cat]} />
                </Link>
              ))}
            </div>
            <SecFoot left="Every item is produced and branded to your guidelines." href="/work" label="View all works" />
          </div>
        </section>
      ) : null}
      <Link href={`/services/${next.slug}`} className="next-svc" data-cursor="Next">
        <span className="container ns-in"><span className="label">Next service · {next.n}</span><span className="ns-t">{next.title}</span><ArrowUpRight size={48} /></span>
        <span className="ns-img" aria-hidden="true"><img src={next.image} alt="" style={{ objectPosition: next.imagePos }} /></span>
      </Link>
    </>
  );
}
