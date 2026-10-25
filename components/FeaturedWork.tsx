import Link from 'next/link';
import { featuredProjects, projects, services } from '@/lib/content';
import { SecHead } from './Blocks';
import { ArrowUpRight } from './Icons';

const svc = (t: string) => services.find((s) => s.tag === t)?.short ?? t;

// Home "Selected Work": a bento grid of seven projects, each opening its project page.
export default function FeaturedWork() {
  const list = featuredProjects.map((slug) => projects.find((p) => p.slug === slug)!).filter(Boolean);
  return (
    <section className="sec fw-sec">
      <div className="container">
        <SecHead eyebrow="Selected work" title="Projects We Are Proud Of" lead="Recent flags, signage, gift boxes, printing and carpets, produced for institutions and businesses across Ethiopia."
          action={<Link href="/work" className="go-btn"><span>View all work</span><ArrowUpRight size={18} /></Link>} />
        <div className="fw-grid">
          {list.map((p, k) => {
            const m = p.media[0];
            return (
              <Link key={p.slug} href={`/work/${p.slug}`} className={`fw-card fw-${k} reveal`} style={{ ['--d' as string]: `${(k % 4) * 70}ms` }} data-cursor="View">
                <img src={m.src} alt={p.client ? `${p.title} for ${p.client}` : p.title} loading="lazy" style={{ objectPosition: m.pos }} />
                <span className="fw-info">
                  <span className="fw-svc">{svc(p.services[0])}</span>
                  <span className="fw-t">{p.title}</span>
                  {p.client ? <span className="fw-c">{p.client}</span> : null}
                </span>
                <span className="fw-go" aria-hidden="true"><ArrowUpRight size={20} /></span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
