import Link from 'next/link';
import Icon from './Icon';

export const lines = (t) => String(t || '').split('\n').map((s) => s.trim()).filter(Boolean);
const isInternal = (href) => typeof href === 'string' && href.startsWith('/') && !href.startsWith('//');

/** Link that uses client-side navigation for internal pages. */
export function SmartLink({ href = '#', children, ...rest }) {
  if (isInternal(href)) return <Link href={href} {...rest}>{children}</Link>;
  const ext = /^https?:/.test(href);
  return <a href={href} {...(ext ? { target: '_blank', rel: 'noopener' } : {})} {...rest}>{children}</a>;
}

export function Kicker({ k, className = '', ...rest }) {
  if (!k) return null;
  const [num, text] = Array.isArray(k) ? k : ['', k];
  return (
    <div className={`laro-kick laro-mono ${className}`.trim()} {...rest}>
      {num ? <><b>{num}</b><i /></> : null}
      {text ? <span>{text}</span> : null}
    </div>
  );
}

export function Title({ text, accent, as: Tag = 'h2', className = 'laro-disp', animate = true, ...rest }) {
  const ls = lines(text);
  if (!ls.length) return null;
  const last = ls.length - 1;
  return (
    <Tag className={className} {...(animate ? { 'data-laro-lines': '' } : {})} {...rest}>
      {ls.map((l, i) => (
        <span className="laro-ln" key={i}><span className={accent && i === last && last > 0 ? 'laro-accent' : undefined}>{l}</span></span>
      ))}
    </Tag>
  );
}

export function Chips({ items, className = '', ...rest }) {
  if (!items || !items.length) return null;
  return <ul className={`laro-chips ${className}`.trim()} {...rest}>{items.map((c) => <li key={c}>{c}</li>)}</ul>;
}

export function Button({ text, href, variant = 'green', ...rest }) {
  if (!text) return null;
  const phone = String(href || '').startsWith('tel:');
  const cls = variant === 'link' ? 'laro-link' : `laro-btn laro-btn--${variant}${variant === 'green' || variant === 'ink' ? ' laro-cut' : ''}`;
  return (
    <SmartLink href={href} className={cls} {...rest}>
      {phone ? <><Icon name="phone" size={16} /> {text}</> : <>{text} <Icon name="arrow" size={16} /></>}
    </SmartLink>
  );
}

export function Buttons({ items, className = '', ...rest }) {
  if (!items || !items.length) return null;
  return (
    <div className={`laro-ctas ${className}`.trim()} {...rest}>
      {items.map((b, i) => <Button key={b.text} {...b} variant={i === 0 ? 'green' : 'ghost'} />)}
    </div>
  );
}

/**
 * A full-width band of the page (replaces an Elementor section).
 * tone: 'ink' | 'paper'; cut: 'paper' | 'dark' adds the angled LARO cut along the top edge.
 * cols: CSS grid template for side-by-side columns, e.g. '42fr 58fr'.
 */
export function Band({ tone = 'ink', cut, flush, cols, gap = 72, top = 110, bottom = 110, className = '', children, id }) {
  const cls = ['laro-band', tone === 'paper' ? 'laro-on-light is-paper' : 'laro-on-dark is-ink', cut ? `laro-cut-${cut}` : '', flush ? 'is-flush' : '', className].filter(Boolean).join(' ');
  return (
    <section className={cls} id={id} style={flush ? undefined : { '--band-top': `${top}px`, '--band-bottom': `${bottom}px` }}>
      {flush ? children : (
        <div className="laro-band-in" style={cols ? { '--cols': cols, '--colgap': `${gap}px` } : undefined}>
          {cols ? children : <div className="laro-col">{children}</div>}
        </div>
      )}
    </section>
  );
}

export function Col({ children }) { return <div className="laro-col">{children}</div>; }
export function Spacer({ h = 30 }) { return <div aria-hidden="true" style={{ height: h }} />; }
