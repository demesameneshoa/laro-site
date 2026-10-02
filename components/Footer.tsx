import Link from 'next/link';
import { company, services } from '@/lib/content';

export default function Footer() {
  return (
    <footer className="ftr">
      <div className="container">
        <div className="ftr-top">
          <div className="ftr-brand">
            <img src="/images/logo-full-light.png" alt={`${company.name}, ${company.tagline}`} width={556} height={376} />
            <p>Strategy, creativity, production and execution for organizations that value professional communication and dependable delivery.</p>
            <div className="socials">
              {company.socials.map((s) => (<a key={s.label} href={s.href} aria-label={s.label}>{s.label.slice(0, 2)}</a>))}
            </div>
          </div>
          <div className="ftr-col wide">
            <h4>Services</h4>
            {services.map((s) => (<Link key={s.slug} href={`/services/${s.slug}`}>{s.title}</Link>))}
          </div>
          <div className="ftr-col">
            <h4>Company</h4>
            <Link href="/about">About</Link>
            <Link href="/work">Work</Link>
            <Link href="/solutions">Solutions</Link>
            <Link href="/clients">Clients</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="ftr-col">
            <h4>Contact</h4>
            {company.phones.map((p, i) => (<a key={p} href={company.phoneHref[i]}>{p}</a>))}
            {company.email ? <a href={`mailto:${company.email}`}>{company.email}</a> : null}
            <span>{company.address[0]}<br />{company.address[1]}<br />{company.address[2]}</span>
          </div>
        </div>
        <p className="ftr-big" aria-hidden="true">Elevate.</p>
        <div className="ftr-bot">
          <span>© {new Date().getFullYear()} {company.name}. All rights reserved.</span>
          <span>{company.tagline} · Addis Ababa · Since {company.founded}</span>
        </div>
      </div>
    </footer>
  );
}
