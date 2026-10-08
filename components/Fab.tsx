'use client';
import { useEffect, useRef, useState } from 'react';
import { company } from '@/lib/content';
import { Chat } from './Icons';

// Floating WhatsApp button: opens a small menu so visitors pick which number to chat with.
export default function Fab() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('pointerdown', onDown);
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('pointerdown', onDown); document.removeEventListener('keydown', onKey); };
  }, [open]);
  return (
    <div className={`fab-wrap${open ? ' open' : ''}`} ref={ref}>
      <div className="fab-menu" id="fab-menu" role="menu" aria-label="Choose a WhatsApp number" hidden={!open}>
        <span className="fab-head">Chat with LARO on WhatsApp</span>
        {company.whatsapps.map((w, i) => (
          <a key={w.href} role="menuitem" href={w.href} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
            <span className="fab-ic"><Chat size={16} /></span>
            <span><b>{w.label}</b><small>{i === 0 ? 'Ethiopia' : 'UAE'}</small></span>
          </a>
        ))}
      </div>
      <button type="button" className="fab" aria-label="Chat with LARO on WhatsApp" aria-haspopup="menu" aria-expanded={open} aria-controls="fab-menu" data-cursor="Chat" onClick={() => setOpen((o) => !o)}>
        <span className="fab-i chat"><Chat /></span><span className="fab-i x" aria-hidden="true">×</span>
      </button>
    </div>
  );
}
