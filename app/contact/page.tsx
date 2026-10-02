import type { Metadata } from 'next';
import { company } from '@/lib/content';
import { PageHero } from '@/components/Blocks';
import QuoteForm from '@/components/QuoteForm';
import { Chat, Mail, Phone, Pin } from '@/components/Icons';

export const metadata: Metadata = { title: 'Contact', description: 'Request a quote from LARO Advertising PLC. Bole Medhaniyalem, Morning Star Building, 4th Floor, Addis Ababa. +251 954 676 767.' };

export default function ContactPage() {
  const map = `https://www.google.com/maps?q=${encodeURIComponent(company.mapQuery)}&output=embed`;
  return (
    <>
      <PageHero crumb="Contact" title="Let’s elevate your business." lead="Send us your brief, quantities and timeline. We come back with a costed proposal, samples where needed and a delivery plan." />
      <section className="sec" style={{ paddingTop: 16 }}>
        <div className="container contact-grid">
          <div className="info reveal">
            <div className="price"><span className="mono muted">Branding packages from</span><b>ETB 30,000</b></div>
            <div className="cinfo">
              {company.phones.map((p, i) => (<a key={p} href={company.phoneHref[i]}><Phone /><span><small>{i === 0 ? 'Call' : 'Call (alternative)'}</small><strong>{p}</strong></span></a>))}
              <a href={company.whatsapp} target="_blank" rel="noopener noreferrer"><Chat size={18} /><span><small>WhatsApp</small><strong>{company.phones[0]}</strong></span></a>
              {company.email ? <a href={`mailto:${company.email}`}><Mail /><span><small>Email</small><strong>{company.email}</strong></span></a> : null}
              <div><Pin /><span><small>Visit</small><strong>{company.address.join(', ')}</strong></span></div>
            </div>
          </div>
          <div className="formwrap reveal"><QuoteForm /></div>
        </div>
      </section>
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="container">
          <iframe className="map" title="Map to LARO Advertising PLC" src={map} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </section>
    </>
  );
}
