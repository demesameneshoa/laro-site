import { company } from '@/lib/content';
import { Chat, Phone } from './Icons';

export default function Fab() {
  return (
    <div className="fab">
      <a className="wa" href={company.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Chat with LARO on WhatsApp"><Chat /></a>
      <a className="call" href={company.phoneHref[0]} aria-label={`Call LARO on ${company.phones[0]}`}><Phone size={20} /></a>
    </div>
  );
}
