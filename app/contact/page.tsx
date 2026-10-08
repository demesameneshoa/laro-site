import type { Metadata } from 'next';
import { company } from '@/lib/content';
import { PageHero } from '@/components/Blocks';
import QuoteForm from '@/components/QuoteForm';
import { Chat, Mail, Phone, Pin } from '@/components/Icons';

export const metadata: Metadata = { title: 'Contact', description: 'Request a quote from LARO Advertising PLC. Morning Star Mall, 4th Floor, Office #426, Bole Medhanialem, Addis Ababa. +251 954 676 767.' };

export default function ContactPage() {
  const map = `https://www.google.com/maps?q=${encodeURIComponent(company.mapQuery)}&output=embed`;
  return (
    <>
      <PageHero crumb="Contact" title="Request a Quote" lead="Send us your brief, quantities and timeline. We come back with a costed proposal, samples where needed and a delivery plan." />
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="container contact">
          <aside className="ct-info reveal">
            <div className="price"><span className="eyebrow">Branding packages from</span><b>ETB <span data-count="30000">30,000</span></b></div>
            <ul className="cn-info dark">
              <li><span className="ic"><Phone size={15} /></span><a href={company.phoneHref[0]}>{company.phones[0]}</a></li>
              <li><span className="ic"><Phone size={15} /></span><a href={company.phoneHref[1]}>{company.phones[1]}</a></li>
              {company.whatsapps.map((w) => (
                <li key={w.href}><span className="ic"><Chat size={15} /></span><a href={w.href} target="_blank" rel="noopener noreferrer">WhatsApp {w.label}</a></li>
              ))}
              {company.email ? <li><span className="ic"><Mail size={15} /></span><a href={`mailto:${company.email}`}>{company.email}</a></li> : null}
              <li><span className="ic"><Pin size={15} /></span><address className="addr">{company.address.map((l) => <span key={l}>{l}</span>)}</address></li>
            </ul>
          </aside>
          <div className="reveal"><QuoteForm /></div>
        </div>
        <div className="container"><iframe className="map reveal" title="Map to LARO Advertising PLC" src={map} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
      </section>
    </>
  );
}
