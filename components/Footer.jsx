import Link from 'next/link';
import Icon from './Icon';
import { site, tel } from '../content/site';

export default function Footer() {
  return (
    <>
      <footer className="laro-footer">
        <div className="laro-footer-wrap">
          <div className="laro-footer-brand">
            <img src="/img/logo-tagline.png" alt={`${site.name}, ${site.tagline}`} width={220} height={149} loading="lazy" />
            <p>{site.footer.text}</p>
          </div>
          <div className="laro-footer-cols">
            <div>
              <span className="laro-mono">Services</span>
              <ul>{site.footer.services.map((l) => <li key={l.href}><Link href={l.href}>{l.label}</Link></li>)}</ul>
            </div>
            <div>
              <span className="laro-mono">Company</span>
              <ul>{site.footer.company.map((l) => <li key={l.href}><Link href={l.href}>{l.label}</Link></li>)}</ul>
            </div>
            <div>
              <span className="laro-mono">Visit</span>
              <address>{site.address.split(', ').map((p, i, a) => <span key={p}>{p}{i < a.length - 1 ? ',' : ''}<br /></span>)}</address>
              <a href={tel(site.phone1)}>{site.phone1}</a>
              {site.phone2 ? <a href={tel(site.phone2)}>{site.phone2}</a> : null}
            </div>
          </div>
          <div className="laro-footer-base laro-mono">
            <span>© {new Date().getFullYear()} {site.name}</span>
            <span>{site.tagline}</span>
            <span>Addis Ababa · Since 2012</span>
          </div>
        </div>
      </footer>
      <div className="laro-fab">
        <a className="is-wa" href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener" aria-label="Chat with LARO on WhatsApp"><Icon name="whatsapp" size={22} /></a>
        <a className="is-call" href={tel(site.phone1)} aria-label={`Call LARO on ${site.phone1}`}><Icon name="phone" size={18} /></a>
      </div>
    </>
  );
}
