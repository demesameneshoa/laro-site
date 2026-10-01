import { Band, Spacer } from '../../components/ui';
import { PageHero, ContactInfo, QuoteForm, SectionHead, Process } from '../../components/blocks';
import { contact } from '../../content/site';

export const metadata = { title: 'Contact', description: 'Request a quote from LARO Advertising PLC: call, WhatsApp or send your brief. Bole Medhaniyalem, Addis Ababa.' };

export default function Contact() {
  const p = contact;
  return (
    <>
      <PageHero {...p.hero} crumb="Contact" />
      <Band cols="45fr 55fr" gap={64} className="laro-quote-band" id="quote">
        <div className="laro-col"><ContactInfo {...p.info} /></div>
        <div className="laro-col"><QuoteForm {...p.form} /></div>
      </Band>
      <Band tone="paper" cut="paper">
        <SectionHead tone="light" size="small" {...p.next} />
        <Spacer h={50} />
        <Process steps={p.next.steps} />
      </Band>
    </>
  );
}
