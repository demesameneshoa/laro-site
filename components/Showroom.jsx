import Icon from './Icon';
import { Kicker, Title, Chips, Button, Buttons, lines } from './ui';

const FX = { none: [0, 0.5, 0], sweep: [0.55, 0.5, 0.35], beams: [1, 0.5, 0], warm: [0.25, 0.55, 1] };
const pct = (v) => Math.round(v * 10000) / 1000000;
const pad2 = (n) => String(n).padStart(2, '0');

/**
 * The scroll-pinned 3D showroom. Content comes from content/site.js → showroom.
 * The browser engine (lib/engine.js) reads data-laro-showroom and draws the scenes in WebGL.
 */
export default function Showroom({ data, sceneHeight = 230, mobScale = 1.55 }) {
  const { scenes, proof = [], buttons = [], scrollHint } = data;
  const total = scenes.length;
  const cfg = {
    mobScale,
    scenes: scenes.map((s) => ({
      img: s.img,
      focus: [s.focus[0] / 100, s.focus[1] / 100],
      mfocus: [(s.mfocus || s.focus)[0] / 100, (s.mfocus || s.focus)[1] / 100],
      zoom: [1, Math.max(1, s.zoom || 1.1)],
      fx: FX[s.lighting || 'none'] || FX.none,
      top: s.layout === 'top',
      flags: (s.flags || []).slice(0, 3).map((r) => r.map(pct)),
      bobs: (s.float || []).slice(0, 8).map((r, k) => [pct(r[0]), pct(r[1]), pct(r[2]), Math.round(k * 9) / 10]),
      hot: (s.hotspots || []).map((h) => ({ p: [pct(h[0]), pct(h[1])], a: h[2], len: h[3], t: h[4], l: h[5] === 'left' ? 1 : 0 })),
    })),
  };

  return (
    <div className="laro-showroom" data-laro-showroom={JSON.stringify(cfg)}>
      <canvas className="ls-canvas" aria-hidden="true" />
      <div className="ls-shade" aria-hidden="true" />
      <div className="ls-hot" aria-hidden="true" />
      {total > 1 ? (
        <nav className="ls-rail" aria-label="Showroom scenes">
          {scenes.map((s, i) => (
            <a href={`#scene-${i + 1}`} key={i}><span className="ls-bar"><i /></span><span><b>{pad2(i + 1)}</b><span className="ls-lbl">{s.nav}</span></span></a>
          ))}
        </nav>
      ) : null}

      {scenes.map((s, i) => {
        const hero = i === 0;
        const top = s.layout === 'top';
        const f = cfg.scenes[i];
        const pos = `${Math.round(f.focus[0] * 100)}% ${Math.round(f.focus[1] * 100)}%`;
        const mpos = `${Math.round(f.mfocus[0] * 100)}% ${Math.round(f.mfocus[1] * 100)}%`;
        const alt = lines(s.title).join(' ');
        const textAndMore = (
          <>
            {s.text ? <p className="ls-fx" style={{ '--laro-d': 0.25 }}>{s.text}</p> : null}
            {hero ? <Buttons items={buttons} className="ls-fx" style={{ '--laro-d': 0.5 }} /> : null}
            <Chips items={s.chips} className="ls-fx" style={{ '--laro-d': 0.38 }} />
            {s.link ? <div className="ls-fx" style={{ '--laro-d': 0.5 }}><Button {...s.link} variant="link" /></div> : null}
          </>
        );
        return (
          <section className={`ls-scene${hero ? ' is-hero' : ''}${top ? ' is-top' : ''}`} id={`scene-${i + 1}`} style={{ '--ls-h': `${sceneHeight}vh` }} key={i}>
            <div className="ls-stick">
              <img className="ls-still" src={s.img} alt={alt} loading={i === 0 ? 'eager' : 'lazy'} style={{ '--ls-pos': pos, '--ls-mpos': mpos }} />
              <div className="ls-copy">
                {hero
                  ? <div className="laro-kick laro-mono ls-fx" style={{ '--laro-d': 0.1 }}><Icon name="shard" size={14} /><span>{s.kicker}</span></div>
                  : <Kicker k={[`${pad2(i + 1)} / ${pad2(total)}`, s.kicker]} className="ls-fx" />}
                <Title text={s.title} accent={s.accent} as={hero ? 'h1' : 'h2'} animate={false} />
                {top ? <><Chips items={s.chips && s.chips.slice(0, 5)} className="ls-fx ls-mchips" style={{ '--laro-d': 0.3 }} /></> : textAndMore}
              </div>
              {top ? <div className="ls-copy2">{textAndMore}</div> : null}
              {hero ? (
                <div className="ls-probar ls-fx" style={{ '--laro-d': 0.8 }}>
                  <Icon name="shard" size={12} />
                  {proof.map((p, k) => (
                    <span key={p} style={{ display: 'contents' }}>
                      {k > 0 ? <span className={`ls-sep${k > 1 ? ' ls-hide-m' : ''}`} /> : null}
                      <span className={`laro-mono${k > 1 ? ' ls-dim ls-hide-m' : ''}`}>{p}</span>
                    </span>
                  ))}
                  <div className="ls-right">
                    <span className="laro-mono" data-ls-count="">{`01 / ${pad2(total)}`}</span>
                    <span className="ls-track"><span data-ls-track="" /></span>
                    {scrollHint ? <span className="laro-mono ls-dim ls-hide-m">{scrollHint}</span> : null}
                  </div>
                </div>
              ) : null}
            </div>
          </section>
        );
      })}
    </div>
  );
}
