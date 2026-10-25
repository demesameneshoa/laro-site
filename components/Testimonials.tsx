import { testimonials } from '@/lib/content';

const initials = (org: string) => org.replace(/\(.*?\)/g, '').split(/\s+/).filter((w) => /^[A-Z]/.test(w) && !/^(and|of|the|Formerly|at)$/i.test(w)).slice(0, 2).map((w) => w[0]).join('');

// Approved client testimonials as quote cards (two columns on wide screens).
export default function Testimonials() {
  return (
    <div className="tst-grid">
      {testimonials.map((t, i) => (
        <figure key={t.name} className="tst reveal" style={{ ['--d' as string]: `${(i % 2) * 90}ms` }}>
          <span className="tst-mark" aria-hidden="true">“</span>
          <blockquote>{t.quote.map((p, k) => <p key={k}>{p}</p>)}</blockquote>
          <figcaption>
            <span className="tst-badge" aria-hidden="true">{t.logo ? <img src={t.logo} alt="" /> : <b>{initials(t.org)}</b>}</span>
            <span className="tst-who"><b>{t.name}</b><span>{t.role}</span><span className="tst-org">{t.org}</span></span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
