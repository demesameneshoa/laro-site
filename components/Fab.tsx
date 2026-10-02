import { company } from '@/lib/content';
import { Chat } from './Icons';

export default function Fab() {
  return (
    <a className="fab" href={company.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Chat with LARO on WhatsApp" data-cursor="Chat"><Chat /></a>
  );
}
