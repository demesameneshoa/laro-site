import { Fragment } from 'react';

// Heading whose letters rise one after another (with a slight wave) when the parent gets .in
export function Letters({ text, as: Tag = 'h2', className = '' }: { text: string; as?: 'h1' | 'h2' | 'h3' | 'span' | 'p'; className?: string }) {
  let i = 0;
  const lines = text.split('\n');
  return (
    <Tag className={`letters reveal ${className}`} aria-label={text.replace(/\n/g, ' ')}>
      {lines.map((line, li) => (
        <span className="lt-line" key={li} aria-hidden="true">
          {line.split(' ').map((word, wi) => (
            <Fragment key={wi}>
              <span className="lt-word">
                {Array.from(word).map((ch, ci) => (<span className="lt" key={ci} style={{ ['--i' as string]: i++ }}>{ch}</span>))}
              </span>
              {wi < line.split(' ').length - 1 ? ' ' : null}
            </Fragment>
          ))}
        </span>
      ))}
    </Tag>
  );
}

// Paragraph whose words light up as it scrolls through the viewport
export function ScrollText({ text, accent = '' }: { text: string; accent?: string }) {
  const words = text.split(' ');
  const acc = accent ? accent.split(' ') : [];
  return (
    <p className="scroll-text" aria-label={`${text}${accent ? ' ' + accent : ''}`}>
      {words.map((w, i) => (<Fragment key={i}><span className="sw" aria-hidden="true">{w}</span>{' '}</Fragment>))}
      {acc.map((w, i) => (<Fragment key={'a' + i}><span className="sw acc" aria-hidden="true">{w}</span>{' '}</Fragment>))}
    </p>
  );
}

// "Label  ·  Label  ·  Label" tag line with dot separators
export function Dots({ items }: { items: string[] }) {
  return (
    <span className="dots">{items.map((t, i) => (<Fragment key={t}>{i > 0 ? <i aria-hidden="true" /> : null}<span>{t}</span></Fragment>))}</span>
  );
}
