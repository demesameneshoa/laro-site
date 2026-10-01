import Icon from './Icon';
import { Kicker, Title, Chips, Button, Buttons, SmartLink, lines } from './ui';
import { site, tel, quoteServices } from '../content/site';

const pad2 = (n) => String(n).padStart(2, '0');
const toneCls = (tone) => (tone === 'light' ? 'laro-on-light' : 'laro-on-dark');
const catSlug = (c) => String(c).toLowerCase().replace(/[^a-z0-9]+/g, '-');

/* Page hero: full-bleed image with parallax and line-by-line title */
export function PageHero({ img, pos = '60% 50%', height = 80, kicker, title, accent, text, buttons, crumb, scrollHint = 'Scroll' }) {
  return (
    <section className="laro-hero" style={{ '--laro-hero-h': `${height}vh` }}>
      <div className="laro-hero-media"><img src={img} alt="" style={{ '--laro-pos': pos }} fetchPriority="high" /></div>
      <div className="laro-hero-inner">
        <div className="laro-hero-copy">
          {crumb ? (
            <nav className="laro-crumbs laro-mono" aria-label="Breadcrumb" data-laro-reveal="fade">
              <SmartLink href="/">Home</SmartLink><span>/</span><span>{crumb}</span>
            </nav>
          ) : null}
          <Kicker k={kicker} data-laro-reveal="fade" />
          <Title text={title} accent={accent} as="h1" />
          {text ? <p className="laro-hero-text" data-laro-reveal="" style={{ '--laro-d': 0.35 }}>{text}</p> : null}
          <Buttons items={buttons} data-laro-reveal="" style={{ '--laro-d': 0.5 }} />
        </div>
      </div>
      {scrollHint ? <div className="laro-hero-scroll laro-mono" aria-hidden="true"><i />{scrollHint}</div> : null}
    </section>
  );
}

/* Section heading */
export function SectionHead({ kicker, title, accent, text, link, layout = 'split', size = 'large', tone = 'dark', as = 'h2' }) {
  const cls = ['laro-head', layout === 'stacked' && 'is-stacked', layout === 'center' && 'is-center', size === 'small' && 'is-small'].filter(Boolean).join(' ');
  return (
    <div className={`laro-w ${toneCls(tone)}`}>
      <div className={cls}>
        <div className="laro-head-main">
          <Kicker k={kicker} data-laro-reveal="left" />
          <Title text={title} accent={accent} as={as} />
        </div>
        {text || link ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18, alignItems: layout === 'center' ? 'center' : 'flex-start' }}>
            {text ? <p className="laro-head-text" data-laro-reveal="" style={{ '--laro-d': 0.2 }}>{text}</p> : null}
            {link ? <Button {...link} variant="link" data-laro-reveal="" style={{ '--laro-d': 0.3 }} /> : null}
          </div>
        ) : null}
      </div>
    </div>
  );
}

/* Split feature: parallax image beside text and a checklist */
export function Split({ img, side = 'left', ratio = '4/5', kicker, title, accent, text = [], list = [], button, tone = 'light', placeholder }) {
  return (
    <div className={`laro-w laro-split ${side === 'right' ? 'is-right' : ''} ${toneCls(tone)}`}>
      <div className="laro-split-media" style={{ '--ar': ratio }} data-laro-reveal="cut">
        <img src={img} alt="" loading="lazy" />
        {placeholder ? <span className="laro-ph-tag">Placeholder</span> : null}
      </div>
      <div className="laro-split-copy">
        <Kicker k={kicker} data-laro-reveal="left" />
        <Title text={title} accent={accent} />
        {text.length ? <div className="laro-split-text" data-laro-reveal="" style={{ '--laro-d': 0.2 }}>{text.map((p) => <p key={p}>{p}</p>)}</div> : null}
        {list.length ? <ul className="laro-split-list" data-laro-stagger="">{list.map((l) => <li key={l}><Icon name="check" /><span>{l}</span></li>)}</ul> : null}
        {button ? <div className="laro-ctas" data-laro-reveal="" style={{ '--laro-d': 0.3 }}><Button {...button} /></div> : null}
      </div>
    </div>
  );
}

/* Service stack: cards that pin and stack as you scroll */
export function Stack({ cards, linkText = 'Request a quote', linkHref = '/contact' }) {
  return (
    <div className="laro-w laro-stack laro-on-dark">
      {cards.map((c, i) => (
        <article className="laro-stack-card" id={c.id} key={c.id || i}>
          <div className="laro-stack-media"><img src={c.img} alt="" loading="lazy" /></div>
          <div className="laro-stack-copy">
            <Kicker k={[pad2(i + 1), c.kicker]} />
            <Title text={c.title} as="h3" animate={false} />
            {c.text ? <p>{c.text}</p> : null}
            <Chips items={c.chips} />
            <Button text={linkText} href={linkHref} variant="link" />
          </div>
          <span className="laro-stack-num" aria-hidden="true">{pad2(i + 1)}</span>
          <span className="laro-stack-dim" aria-hidden="true" />
        </article>
      ))}
    </div>
  );
}

/* Process steps with a line that fills on scroll */
export function Process({ steps, tone = 'light' }) {
  return (
    <div className={`laro-w laro-process ${toneCls(tone)}`} style={{ '--laro-cols': Math.max(1, Math.min(6, steps.length)) }}>
      <div className="laro-process-line" aria-hidden="true"><i /></div>
      {steps.map((s, i) => (
        <div className="laro-process-step" data-laro-reveal="" style={{ '--laro-d': i * 0.1 }} key={s.title}>
          <span className="laro-mono laro-n">{pad2(i + 1)}</span>
          <h3>{s.title}</h3>
          {s.text ? <p>{s.text}</p> : null}
        </div>
      ))}
    </div>
  );
}

/* Stats that count up */
export function Stats({ items, tone = 'dark' }) {
  return (
    <div className={`laro-w laro-stats ${toneCls(tone)}`} style={{ '--laro-cols': items.length }} data-laro-stagger="">
      {items.map((it) => (
        <div key={it.label}><b>{it.prefix}<span data-laro-count={it.value}>{it.value}</span>{it.suffix}</b><span>{it.label}</span></div>
      ))}
    </div>
  );
}

/* Numbered icon list (eco range) */
export function EcoList({ items, notes = false, tone = 'light', topLeft = 'The full eco range', topRight = '12 lines · all customisable' }) {
  return (
    <div className={`laro-w laro-ecolist ${toneCls(tone)}`} style={{ '--laro-cols': 2 }}>
      <div className="laro-ecolist-top laro-mono" data-laro-reveal="fade"><span>{topLeft}</span><span>{topRight}</span></div>
      <ul data-laro-stagger="">
        {items.map((it, i) => (
          <li key={it.label}>
            <span className="laro-ic"><Icon name={it.icon} /></span>
            <span>{it.label}{notes && it.note ? <small>{it.note}</small> : null}</span>
            <span className="laro-n">{pad2(i + 1)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Callout({ label, text }) {
  return (
    <div className="laro-w laro-callout" data-laro-reveal="cut">
      {label ? <span className="laro-mono">{label}</span> : null}
      <p>{text}</p>
    </div>
  );
}

/* Portfolio grid with filters and lightbox */
export function Portfolio({ items, filters = true, limit = 0, more, phNote = 'Placeholder · replace with project photo' }) {
  const list = limit ? items.slice(0, limit) : items;
  const cats = [...new Set(list.map((i) => i.cat))];
  return (
    <div className="laro-w laro-portfolio laro-on-dark">
      {filters && cats.length > 1 ? (
        <div className="laro-filters" role="group" aria-label="Filter projects" data-laro-reveal="fade">
          <button type="button" aria-pressed="true" data-cat="*">All</button>
          {cats.map((c) => <button type="button" aria-pressed="false" data-cat={catSlug(c)} key={c}>{c}</button>)}
        </div>
      ) : null}
      <div className="laro-grid" style={{ '--laro-cols': 3 }} data-laro-stagger="">
        {list.map((it, i) => (
          <button type="button" className="laro-tile" key={i} data-cat={catSlug(it.cat)} data-catlabel={it.cat} data-title={it.title} data-full={it.img} data-note={it.placeholder ? phNote : ''} style={{ '--ar': it.ratio }} aria-label={`Open ${it.title}`}>
            <img src={it.img} alt={it.placeholder ? `Placeholder image for ${it.cat.toLowerCase()} project: ${it.title}` : it.title} loading="lazy" />
            {it.placeholder ? <span className="laro-ph-tag">Placeholder</span> : null}
            <span className="laro-cap"><b>{it.title}</b><span className="laro-mono">{it.cat}</span></span>
          </button>
        ))}
      </div>
      {more ? <div className="laro-grid-more" data-laro-reveal=""><Button {...more} variant="ghost" /></div> : null}
    </div>
  );
}

export function Audience({ items, tone = 'light' }) {
  return (
    <div className={`laro-w laro-serve ${toneCls(tone)}`} data-laro-stagger="">
      {items.map((it, i) => (
        <article key={it.title}>
          <span className="laro-mono laro-n">{pad2(i + 1)}</span>
          <h3>{it.title}</h3>
          {it.text ? <p>{it.text}</p> : null}
          <ul>{it.list.map((l) => <li key={l}><Icon name="check" size={16} />{l}</li>)}</ul>
        </article>
      ))}
    </div>
  );
}

export function Logos({ items, left = '18+ partner brands · government, diplomatic, financial and private sector', right = 'Placeholder logos · add with client permission', tone = 'light' }) {
  const tile = (it, i, hidden) => (
    <div className="laro-logo-tile" key={(hidden ? 'b' : 'a') + i} aria-hidden={hidden || undefined}>
      {it.logo ? <img src={it.logo} alt={hidden ? '' : it.name} loading="lazy" /> : it.name}
    </div>
  );
  return (
    <div className={`laro-w laro-logos ${toneCls(tone)}`}>
      <div className="laro-logos-row laro-mono"><span>{left}</span><span>{right}</span></div>
      <div className="laro-mq"><div className="laro-mq-t" style={{ '--laro-speed': '40s' }}>{items.map((it, i) => tile(it, i))}{items.map((it, i) => tile(it, i, true))}</div></div>
    </div>
  );
}

export function Why({ items }) {
  return (
    <div className="laro-w laro-why" style={{ '--laro-cols': 3 }} data-laro-stagger="">
      {items.map((it, i) => (
        <div key={it.title}>
          <div className="laro-why-t"><Icon name={it.icon} size={30} /><span className="laro-mono">{pad2(i + 1)}</span></div>
          <h3>{it.title}</h3><p>{it.text}</p>
        </div>
      ))}
    </div>
  );
}

export function Team({ items, phLabel = 'Portrait placeholder' }) {
  return (
    <div className="laro-w laro-team laro-on-dark" style={{ '--laro-cols': 5 }} data-laro-stagger="">
      {items.map((it) => (
        <article key={it.name}>
          <div className="laro-portrait" {...(it.photo ? {} : { role: 'img', 'aria-label': `${phLabel}: ${it.name}` })}>
            {it.photo ? <img src={it.photo} alt={it.name} loading="lazy" /> : (<><span className="laro-big" aria-hidden="true">{it.initials}</span><span className="laro-ph-tag">{phLabel}</span></>)}
          </div>
          <div>
            <h3>{it.name}</h3>
            <div className="laro-role">{it.role}</div>
            <div className="laro-meta"><b>{it.years}</b>{it.note ? <><i /><span>{it.note}</span></> : null}</div>
          </div>
        </article>
      ))}
    </div>
  );
}

export function Cta({ kicker, title, text, buttons, dark }) {
  const btns = buttons || [{ text: 'Request a quote', href: '/contact' }, { text: `Call ${site.phone1}`, href: tel(site.phone1) }];
  return (
    <div className={`laro-w laro-cta laro-on-dark ${dark ? 'is-dark' : ''}`} data-laro-reveal="cut">
      <div className="laro-cta-copy">
        <Kicker k={kicker} />
        <Title text={title} />
        {text ? <p>{text}</p> : null}
      </div>
      <Buttons items={btns} />
    </div>
  );
}

export function ContactInfo({ kicker, title, text, priceLabel, price }) {
  return (
    <div className="laro-w laro-contact laro-on-dark">
      <Kicker k={kicker} data-laro-reveal="left" />
      <Title text={title} />
      {text ? <p style={{ margin: 0, fontSize: 17, color: 'var(--laro-mute)' }} data-laro-reveal="">{text}</p> : null}
      {price ? <div className="laro-price" data-laro-reveal=""><span className="laro-mono">{priceLabel}</span><b>{price}</b></div> : null}
      <div className="laro-contacts" data-laro-stagger="">
        <a href={tel(site.phone1)}><span><Icon name="phone" size={20} /></span><span>{site.phone1}</span></a>
        {site.phone2 ? <a href={tel(site.phone2)}><span><Icon name="phone" size={20} /></span><span>{site.phone2}</span></a> : null}
        <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener"><span><Icon name="whatsapp" size={20} /></span><span>WhatsApp {site.phone1}</span></a>
        {site.email ? <a href={`mailto:${site.email}`}><span><Icon name="mail" size={20} /></span><span>{site.email}</span></a> : null}
        <a className="is-addr" href={site.mapUrl} target="_blank" rel="noopener"><span><Icon name="pin" size={20} /></span><span>{site.address}</span></a>
      </div>
    </div>
  );
}

/* Quote form: posts to /api/quote (see app/api/quote/route.js) */
export function QuoteForm({ topLeft, topRight, button, aside, ok }) {
  const F = ({ name, label, type = 'text', ph = '', full, req, ac }) => (
    <div className={`laro-f${full ? ' is-full' : ''}`}>
      <label htmlFor={`q-${name}`}>{label}{req ? ' *' : ''}</label>
      {type === 'textarea'
        ? <textarea id={`q-${name}`} name={name} rows={4} placeholder={ph} />
        : <input id={`q-${name}`} name={name} type={type} placeholder={ph} required={req} autoComplete={ac} />}
    </div>
  );
  return (
    <form className="laro-form" noValidate data-laro-reveal="" data-msg-ok={ok} data-msg-missing="Add your name and a phone number so we can call you back." data-msg-fail={`The message could not be sent. Please call us on ${site.phone1}.`}>
      <div className="laro-form-top laro-mono"><span>{topLeft}</span><span>{topRight}</span></div>
      <F name="name" label="Name" ph="Full name" req ac="name" />
      <F name="org" label="Organization" ph="Ministry, embassy, bank…" ac="organization" />
      <F name="phone" label="Phone" type="tel" ph="+251 …" req ac="tel" />
      <div className="laro-f">
        <label htmlFor="q-service">Service</label>
        <select id="q-service" name="service">{quoteServices.map((s) => <option key={s}>{s}</option>)}</select>
      </div>
      <F name="email" label="Email" type="email" ph="name@organization.org" ac="email" />
      <F name="qty" label="Quantity" ph="e.g. 40 table flags" />
      <F name="date" label="Event date" type="date" />
      <F name="msg" label="Message" type="textarea" ph="Venue, sizes, branding files, delivery or installation needs" full />
      <input className="laro-hp" type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div className="laro-form-foot">
        <span>{aside}</span>
        <button className="laro-btn laro-btn--green laro-cut" type="submit">{button} <Icon name="arrow" size={16} /></button>
      </div>
      <div className="laro-note" role="status" hidden />
    </form>
  );
}

export { lines };
