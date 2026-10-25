import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects, services } from '@/lib/content';
import { Letters } from '@/components/Text';
import { ArrowUpRight } from '@/components/Icons';
import { SecHead } from '@/components/Blocks';
import ProjectGallery from '@/components/ProjectGallery';

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return projects.map((p) => ({ slug: p.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return p ? { title: p.client ? `${p.title} for ${p.client}` : p.title, description: p.summary, openGraph: { images: [p.media[0].src] } } : {};
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const idx = projects.findIndex((x) => x.slug === slug);
  if (idx < 0) notFound();
  const p = projects[idx];
  const next = projects[(idx + 1) % projects.length];
  const svcs = p.services.map((t) => services.find((s) => s.tag === t)).filter((s): s is (typeof services)[number] => Boolean(s));
  const related = projects.filter((x) => x.slug !== p.slug && x.services.some((t) => p.services.includes(t))).slice(0, 3);
  return (
    <>
      <section className="phero">
        <div className="container">
          <nav className="crumbs reveal" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/work">Work</Link><span aria-hidden="true">/</span><span>{p.title}</span></nav>
          <div className="ph-grid">
            <Letters as="h1" text={p.title} className={`ph-title${p.title.length > 22 ? ' long' : ''}`} />
            <div className="ph-side">
              <p className="lead reveal">{p.summary}</p>
            </div>
          </div>
          <dl className="pj-meta reveal">
            {p.client ? <div><dt>Client</dt><dd>{p.client}</dd></div> : null}
            <div><dt>Services</dt><dd>{svcs.map((s, k) => (<span key={s.slug}>{k ? ', ' : ''}<Link href={`/services/${s.slug}`}>{s.title}</Link></span>))}</dd></div>
            <div><dt>Delivered</dt><dd><ul>{p.scope.map((x) => <li key={x}>{x}</li>)}</ul></dd></div>
          </dl>
        </div>
      </section>
      <section className="sec" style={{ paddingTop: 'clamp(40px, 4cqi, 64px)' }}>
        <div className="container"><ProjectGallery media={p.media} title={p.client ? `${p.title} for ${p.client}` : p.title} /></div>
      </section>
      <section className="sec sec-gray pj-cta">
        <div className="container">
          <SecHead eyebrow="Start a project" title="Need Something Similar?" lead="Tell us about your quantities, branding and timeline and we will come back with a costed proposal."
            action={<Link href="/contact" className="go-btn"><span>Request a quote</span><ArrowUpRight size={18} /></Link>} />
          {related.length ? (
            <div className="pg-grid">
              {related.map((r) => (
                <Link key={r.slug} href={`/work/${r.slug}`} className="pg-card reveal" data-cursor="View">
                  <span className="pg-img"><img src={r.media[0].src} alt={r.client ? `${r.title} for ${r.client}` : r.title} loading="lazy" style={{ objectPosition: r.media[0].pos }} /></span>
                  <span className="pg-t">{r.title}</span>
                  {r.client ? <span className="pg-c">{r.client}</span> : null}
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      </section>
      <Link href={`/work/${next.slug}`} className="next-svc" data-cursor="Next">
        <span className="container ns-in"><span className="label">Next project</span><span className="ns-t">{next.title}</span><ArrowUpRight size={48} /></span>
        <span className="ns-img" aria-hidden="true"><img src={next.media[0].src} alt="" style={{ objectPosition: next.media[0].pos }} /></span>
      </Link>
    </>
  );
}
