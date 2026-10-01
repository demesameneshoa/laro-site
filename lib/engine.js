/*
 * LARO scroll engine.
 * Plain browser code with no dependencies. React renders the markup; this file brings it to life:
 * reveals, count-ups, parallax, stacking cards, process line, portfolio filters + lightbox,
 * the quote form and the WebGL showroom. `mount(root)` runs on every page and returns a cleanup
 * function, so moving between pages never leaves animations running in the background.
 */

const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
const smooth = (a, b, x) => { const t = clamp((x - a) / (b - a)); return t * t * (3 - 2 * t); };
const qsa = (s, el = document) => Array.from(el.querySelectorAll(s));
const reduced = () => typeof window !== 'undefined' && window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ------------------------------------------------------------------ */
/* shared animation loop                                               */
/* ------------------------------------------------------------------ */
const tickers = new Set();
let looping = false;
let lastT = 0;
function loop(now) {
  requestAnimationFrame(loop);
  const dt = Math.min(0.05, (now - (lastT || now)) / 1000); lastT = now;
  tickers.forEach((fn) => { try { fn(dt, now); } catch (e) { console.error(e); tickers.delete(fn); } });
}
function startLoop() { if (!looping) { looping = true; requestAnimationFrame(loop); } }

function makeCtx() {
  const ctx = { ticks: [], offs: [], observers: [] };
  ctx.tick = (fn) => { tickers.add(fn); ctx.ticks.push(fn); };
  ctx.on = (target, type, fn, opts) => { target.addEventListener(type, fn, opts); ctx.offs.push(() => target.removeEventListener(type, fn, opts)); };
  ctx.later = (fn) => ctx.offs.push(fn);
  ctx.destroy = () => { ctx.ticks.forEach((f) => tickers.delete(f)); ctx.offs.forEach((f) => { try { f(); } catch (e) { /* ignore */ } }); ctx.observers.forEach((o) => o.disconnect()); };
  return ctx;
}

/* ------------------------------------------------------------------ */
/* reveals + count-ups                                                 */
/* ------------------------------------------------------------------ */
const REVEAL = '[data-laro-reveal],.laro-reveal,.laro-reveal-left,[data-laro-lines],[data-laro-stagger],.laro-stack-card';

function countUp(el, instant) {
  if (el.__laroCount) return; el.__laroCount = 1;
  const raw = el.getAttribute('data-laro-count');
  const target = parseFloat(raw) || 0;
  const dec = (String(raw).split('.')[1] || '').length;
  const fmt = (v) => v.toFixed(dec).replace(/\B(?=(\d{3})+(?!\d))/g, target >= 10000 ? ',' : '');
  if (instant || reduced()) { el.textContent = fmt(target); return; }
  const start = performance.now(), dur = 1600, from = target > 1900 && target < 2100 ? target - 40 : 0;
  const step = (now) => { const t = clamp((now - start) / dur), e = 1 - Math.pow(1 - t, 3); el.textContent = fmt(from + (target - from) * e); if (t < 1) requestAnimationFrame(step); };
  requestAnimationFrame(step);
}

function initReveals(root, ctx) {
  const reduce = reduced();
  const io = 'IntersectionObserver' in window ? new IntersectionObserver((es) => {
    es.forEach((e) => {
      if (!e.isIntersecting) return;
      if (e.target.__laroTargets) e.target.__laroTargets.forEach((t) => t.classList.add('laro-in'));
      if (!e.target.__laroTargets || e.target.matches(REVEAL)) e.target.classList.add('laro-in');
      io.unobserve(e.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 }) : null;
  if (io) ctx.observers.push(io);
  qsa(REVEAL, root).forEach((el) => {
    if (el.closest('.laro-hero')) return; // heroes reveal on load
    if (!io || reduce) { el.classList.add('laro-in'); return; }
    // clip-path reveals start fully clipped, which an observer cannot see: watch the parent
    const watch = el.getAttribute('data-laro-reveal') === 'cut' && el.parentElement ? el.parentElement : el;
    if (watch !== el) (watch.__laroTargets = watch.__laroTargets || []).push(el);
    io.observe(watch);
  });
  const io2 = 'IntersectionObserver' in window ? new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { countUp(e.target); io2.unobserve(e.target); } }), { threshold: 0.4 }) : null;
  if (io2) ctx.observers.push(io2);
  qsa('[data-laro-count]', root).forEach((el) => { if (io2 && !reduce) io2.observe(el); else countUp(el, true); });
}

/* ------------------------------------------------------------------ */
/* page hero: parallax + title lines                                   */
/* ------------------------------------------------------------------ */
function initHero(el, ctx) {
  const media = el.querySelector('.laro-hero-media');
  const copy = el.querySelector('.laro-hero-copy');
  const go = () => qsa('[data-laro-lines],[data-laro-reveal]', el).forEach((x) => x.classList.add('laro-in'));
  if (document.documentElement.classList.contains('laro-loading')) ctx.on(document, 'laro:ready', go, { once: true });
  else { const t = setTimeout(go, 160); ctx.later(() => clearTimeout(t)); }
  if (reduced()) return;
  ctx.tick(() => {
    const r = el.getBoundingClientRect(), vh = innerHeight;
    if (r.bottom < 0 || r.top > vh) return;
    const p = clamp(-r.top / Math.max(1, r.height));
    if (media) media.style.transform = `translate3d(0,${p * 18}%,0) scale(${1 + p * 0.08})`;
    if (copy) { copy.style.transform = `translate3d(0,${p * -60}px,0)`; copy.style.opacity = String(1 - p * 1.2); }
  });
}

function initSplit(el, ctx) {
  const img = el.querySelector('.laro-split-media img');
  if (!img || reduced()) return;
  ctx.tick(() => {
    const r = el.getBoundingClientRect(), vh = innerHeight; if (r.bottom < -200 || r.top > vh + 200) return;
    const p = clamp((vh - r.top) / (vh + r.height)) - 0.5;
    img.style.transform = `translate3d(0,${p * -14}%,0)`;
  });
}

function initStack(el, ctx) {
  const cards = qsa('.laro-stack-card', el);
  cards.forEach((c, i) => c.style.setProperty('--i', i));
  if (reduced()) return;
  ctx.tick(() => {
    const r = el.getBoundingClientRect(); if (r.bottom < 0 || r.top > innerHeight) return;
    cards.forEach((c, i) => {
      const next = cards[i + 1], dim = c.querySelector('.laro-stack-dim');
      if (!next) { c.style.transform = ''; if (dim) dim.style.opacity = 0; return; }
      const cr = c.getBoundingClientRect(), nr = next.getBoundingClientRect();
      const p = clamp((cr.bottom - nr.top) / Math.max(1, cr.height));
      c.style.transform = `scale(${1 - p * 0.06})`;
      if (dim) dim.style.opacity = String(p * 0.5);
    });
  });
}

function initProcess(el, ctx) {
  const line = el.querySelector('.laro-process-line'), steps = qsa('.laro-process-step', el);
  ctx.tick(() => {
    const r = el.getBoundingClientRect(), vh = innerHeight; if (r.bottom < -100 || r.top > vh + 100) return;
    const mobile = innerWidth <= 860;
    const p = reduced() ? 1 : clamp((vh * 0.75 - r.top) / Math.max(1, r.height * (mobile ? 1 : 0.6)));
    if (line) line.style.setProperty('--p', p);
    steps.forEach((s, i) => s.classList.toggle('is-lit', p >= (mobile ? i / steps.length : i / Math.max(1, steps.length - 1)) - 0.001));
  });
}

function initCta(el, ctx) {
  if (reduced()) return;
  ctx.tick(() => { const r = el.getBoundingClientRect(); if (r.bottom < 0 || r.top > innerHeight) return; el.style.setProperty('--sx', ((r.top / innerHeight) * 60).toFixed(1) + 'px'); });
}

/* ------------------------------------------------------------------ */
/* portfolio: filters, tilt, lightbox                                  */
/* ------------------------------------------------------------------ */
let lightbox;
function getLightbox() {
  if (lightbox && document.body.contains(lightbox.el)) return lightbox;
  const d = document.createElement('div');
  d.className = 'laro-lightbox'; d.setAttribute('role', 'dialog'); d.setAttribute('aria-modal', 'true'); d.setAttribute('aria-label', 'Project image');
  d.innerHTML = '<button class="laro-x" type="button" aria-label="Close"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M3 3l12 12M15 3L3 15"/></svg></button><button class="laro-nav-btn laro-prev" type="button" aria-label="Previous image">&#8592;</button><button class="laro-nav-btn laro-next" type="button" aria-label="Next image">&#8594;</button><figure><img alt=""><figcaption><span class="laro-lb-cap"></span><span class="laro-mono laro-lb-note"></span></figcaption></figure>';
  document.body.appendChild(d);
  let list = [], idx = 0, opener = null;
  const show = (i) => { idx = (i + list.length) % list.length; const it = list[idx]; const im = d.querySelector('img'); im.src = it.src; im.alt = it.title; d.querySelector('.laro-lb-cap').textContent = it.title + (it.cat ? ' · ' + it.cat : ''); d.querySelector('.laro-lb-note').textContent = it.note || ''; };
  const close = () => { d.classList.remove('is-open'); if (window.__lenis) window.__lenis.start(); if (opener) opener.focus(); };
  d.querySelector('.laro-x').addEventListener('click', close);
  d.querySelector('.laro-prev').addEventListener('click', () => show(idx - 1));
  d.querySelector('.laro-next').addEventListener('click', () => show(idx + 1));
  d.addEventListener('click', (e) => { if (e.target === d) close(); });
  d.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); if (e.key === 'ArrowLeft') show(idx - 1); if (e.key === 'ArrowRight') show(idx + 1); });
  lightbox = { el: d, open(items, i, from) { list = items; opener = from; show(i); d.classList.add('is-open'); if (window.__lenis) window.__lenis.stop(); d.querySelector('.laro-x').focus(); } };
  return lightbox;
}
function initPortfolio(el, ctx) {
  const tiles = qsa('.laro-tile', el);
  const filters = el.querySelector('.laro-filters');
  if (filters) ctx.on(filters, 'click', (e) => {
    const b = e.target.closest('button'); if (!b) return;
    qsa('button', filters).forEach((x) => x.setAttribute('aria-pressed', x === b ? 'true' : 'false'));
    const c = b.getAttribute('data-cat');
    tiles.forEach((t) => t.classList.toggle('is-hidden', c !== '*' && t.getAttribute('data-cat') !== c));
  });
  tiles.forEach((t) => {
    ctx.on(t, 'click', (e) => {
      e.preventDefault();
      const vis = tiles.filter((x) => !x.classList.contains('is-hidden'));
      const items = vis.map((x) => ({ src: x.getAttribute('data-full'), title: x.getAttribute('data-title'), cat: x.getAttribute('data-catlabel'), note: x.getAttribute('data-note') }));
      getLightbox().open(items, vis.indexOf(t), t);
    });
    if (!reduced() && matchMedia('(hover:hover)').matches) {
      ctx.on(t, 'pointermove', (e) => { const r = t.getBoundingClientRect(); const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5; t.style.transform = `perspective(900px) rotateX(${-y * 5}deg) rotateY(${x * 6}deg) translateY(-4px)`; });
      ctx.on(t, 'pointerleave', () => { t.style.transform = ''; });
    }
  });
}

/* ------------------------------------------------------------------ */
/* quote form → /api/quote                                             */
/* ------------------------------------------------------------------ */
function initForm(form, ctx) {
  ctx.on(form, 'submit', async (e) => {
    e.preventDefault();
    const note = form.querySelector('.laro-note'), btn = form.querySelector('button[type=submit]');
    const say = (msg, err) => { note.hidden = false; note.textContent = msg; note.classList.toggle('is-error', !!err); };
    const data = Object.fromEntries(new FormData(form).entries());
    if (!String(data.name || '').trim() || !String(data.phone || '').trim()) {
      say(form.getAttribute('data-msg-missing'), true);
      (String(data.name || '').trim() ? form.querySelector('[name=phone]') : form.querySelector('[name=name]')).focus();
      return;
    }
    btn.disabled = true;
    try {
      const res = await fetch('/api/quote', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...data, page: location.pathname }) });
      const out = await res.json().catch(() => ({}));
      if (res.ok && out.ok) { say(form.getAttribute('data-msg-ok')); form.reset(); }
      else say(out.message || form.getAttribute('data-msg-fail'), true);
    } catch (err) { say(form.getAttribute('data-msg-fail'), true); }
    btn.disabled = false;
  });
}

/* ------------------------------------------------------------------ */
/* showroom: pinned WebGL scenes                                       */
/* ------------------------------------------------------------------ */
const VS = 'attribute vec2 p; void main(){ gl_Position = vec4(p,0.,1.); }';
const FS = [
    'precision highp float;',
    'uniform vec2 uRes; uniform float uTime; uniform vec2 uMouse; uniform float uMix; uniform float uMobile; uniform float uMobScale;',
    'uniform sampler2D uTA; uniform sampler2D uTB; uniform vec2 uSA; uniform vec2 uSB; uniform vec4 uCA; uniform vec4 uCB;',
    'uniform vec4 uFA[3]; uniform vec4 uFB[3]; uniform vec4 uBA[8]; uniform vec4 uBB[8]; uniform vec4 uXA; uniform vec4 uXB; uniform vec2 uAnchor; uniform vec3 uBg;',
    'float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }',
    'vec3 scene(sampler2D t, vec2 sz, vec4 cam, vec4 fl[3], vec4 bb[8], vec4 fx, vec2 P){',
    '  float S = uMobile > .5 ? (uRes.x / sz.x) * uMobScale : max(uRes.x / sz.x, uRes.y / sz.y);',
    '  S *= cam.z;',
    '  vec2 px = (P - uAnchor * uRes) / S + cam.xy * sz;',
    '  vec2 uv = px / sz;',
    '  float depth = .35 + .65 * smoothstep(.25, 1., uv.y);',
    '  uv -= uMouse * depth * vec2(16., 10.) / (S * sz);',
    '  float shade = 0.;',
    '  for (int i = 0; i < 3; i++){ vec4 f = fl[i]; if (f.z > f.x){',
    '    vec2 q = (uv - f.xy) / (f.zw - f.xy);',
    '    float m = smoothstep(-.06, .04, q.x) * smoothstep(1.16, .96, q.x) * smoothstep(-.14, .04, q.y) * smoothstep(1.14, .94, q.y);',
    '    float k = clamp(q.x, 0., 1.); k = k * (.35 + .65 * k);',
    '    float w = sin(q.x * 7.5 - uTime * 3.1 + q.y * 1.7) + .45 * sin(q.x * 13. - uTime * 4.6 + q.y * 3.);',
    '    uv.y += w * .022 * (f.w - f.y) * k * m; uv.x += cos(q.x * 6. - uTime * 2.7) * .008 * (f.z - f.x) * k * m; shade += w * .075 * k * m; } }',
    '  float ar = sz.x / sz.y;',
    '  for (int i = 0; i < 8; i++){ vec4 b = bb[i]; if (b.z > 0.){',
    '    float d = length((uv - b.xy) * vec2(ar, 1.)); float m = smoothstep(b.z, b.z * .35, d);',
    '    uv.y += sin(uTime * 1.25 + b.w) * .0075 * m; uv.x += cos(uTime * .9 + b.w) * .003 * m; } }',
    '  vec3 c = texture2D(t, clamp(uv, .001, .999)).rgb; c *= 1. + shade;',
    '  float sweep = sin(uTime * .45) * .22;',
    '  float beam = exp(-pow((uv.x - fx.y - sweep + (uv.y - .2) * .35) * 7., 2.)) * smoothstep(1.05, .1, uv.y);',
    '  float beam2 = exp(-pow((uv.x - (1. - fx.y) + sweep - (uv.y - .2) * .35) * 7., 2.)) * smoothstep(1.05, .1, uv.y);',
    '  c += vec3(.35, .95, .6) * (beam + beam2 * .7) * fx.x * .16;',
    '  c = mix(c, c * vec3(1.08, .98, .86), fx.z * .5);',
    '  float e = smoothstep(0., .03, uv.x) * smoothstep(1., .97, uv.x) * smoothstep(0., uMobile > .5 ? .14 : .03, uv.y) * smoothstep(1., uMobile > .5 ? .86 : .97, uv.y);',
    '  return mix(uBg, c, e);',
    '}',
    'void main(){',
    '  vec2 P = vec2(gl_FragCoord.x, uRes.y - gl_FragCoord.y); vec2 p = P / uRes;',
    '  vec3 col = scene(uTA, uSA, uCA, uFA, uBA, uXA, P);',
    '  if (uMix > .001){',
    '    vec3 cb = scene(uTB, uSB, uCB, uFB, uBB, uXB, P);',
    '    float s = p.x * .55 + (1. - p.y) * .9 + .06 * abs(fract(p.x * 1.4) - .5);',
    '    float th = mix(1.65, -.15, uMix); float m = 1. - smoothstep(th - .004, th + .004, s);',
    '    col = mix(col, cb, m);',
    '    col += vec3(0., .63, .29) * exp(-abs(s - th) * 90.) * .9 * step(.002, uMix) * step(uMix, .998);',
    '  }',
    '  for (int L = 0; L < 2; L++){',
    '    float cs = L == 0 ? 110. : 64.;',
    '    vec2 g = P / cs + vec2(0., uTime * (L == 0 ? .05 : .03)) + uMouse * (L == 0 ? .6 : .3);',
    '    vec2 id = floor(g); vec2 f = fract(g) - .5; float h = hash(id + float(L) * 17.);',
    '    vec2 o = (vec2(hash(id + 3.1), hash(id + 7.7)) - .5) * .7; float d = length(f - o);',
    '    float tw = .5 + .5 * sin(uTime * (1.4 + h * 2.) + h * 40.);',
    '    col += vec3(.55, 1., .72) * smoothstep(.035, 0., d) * step(.86, h) * tw * (L == 0 ? .5 : .28);',
    '  }',
    '  vec2 v = p - .5; col *= 1. - dot(v, v) * .55;',
    '  col += (hash(P + fract(uTime) * 100.) - .5) * .035;',
    '  gl_FragColor = vec4(col, 1.);',
    '}'
  ].join('\n');

function initShowroom(el, ctx) {
  let cfg; try { cfg = JSON.parse(el.getAttribute('data-laro-showroom') || '{}'); } catch (e) { cfg = {}; }
  const SC = cfg.scenes || [];
  const sceneEls = qsa('.ls-scene', el);
  if (!SC.length || !sceneEls.length) return;
  const root = document.documentElement;
  const reduce = reduced();
  let vw = innerWidth, vh = innerHeight;

  const canvas = el.querySelector('.ls-canvas'), shade = el.querySelector('.ls-shade'), hot = el.querySelector('.ls-hot');
  const rail = el.querySelector('.ls-rail'), railLinks = rail ? qsa('a', rail) : [];
  const countEl = el.querySelector('[data-ls-count]'), trackEl = el.querySelector('[data-ls-track]');
  let mobile = vw <= 820;
  const mobScale = cfg.mobScale || 1.55;
  const state = { a: 0, b: 1, mix: 0, p: SC.map(() => 0), active: 0, visible: true, inside: false };

  // rail links scroll smoothly to their scene
  railLinks.forEach((a, i) => ctx.on(a, 'click', (e) => {
    e.preventDefault();
    const top = sceneEls[i].getBoundingClientRect().top + scrollY + (i === 0 ? 0 : innerHeight * 0.02);
    if (window.__lenis) window.__lenis.scrollTo(top, { duration: 1.4 }); else scrollTo({ top, behavior: 'smooth' });
  }));

  /* hotspot labels */
  const hs = [];
  hot.innerHTML = '';
  SC.forEach((s, si) => (s.hot || []).forEach((h, hi) => {
    const d = document.createElement('div'); d.className = 'ls-hs';
    d.innerHTML = `<span class="ls-dot"></span><span class="ls-lead" style="--a:${h.a}deg;width:${h.len}px"></span><span class="ls-tag"></span>`;
    d.querySelector('.ls-tag').textContent = h.t;
    hot.appendChild(d); hs.push({ el: d, s: si, h, i: hi, tag: d.querySelector('.ls-tag'), lead: d.querySelector('.ls-lead') });
  }));

  function read() {
    const y = scrollY; let a = 0;
    for (let i = 0; i < sceneEls.length; i++) {
      const r = sceneEls[i].getBoundingClientRect(), top = r.top + y, h = r.height;
      state.p[i] = clamp((y - top) / Math.max(1, h - vh));
      if (y >= top - 1) a = i;
    }
    const ar = sceneEls[a].getBoundingClientRect(), end = ar.top + y + ar.height;
    state.mix = a < sceneEls.length - 1 ? smooth(end - vh, end, y) : 0;
    state.a = a; state.b = Math.min(a + 1, sceneEls.length - 1);
    state.active = state.mix > 0.5 ? state.b : a;
    const er = el.getBoundingClientRect();
    state.visible = er.bottom > 2 && er.top < vh;
    state.inside = er.top <= 1 && er.bottom > vh * 0.5;
  }
  function ui() {
    const loading = root.classList.contains('laro-loading');
    sceneEls.forEach((s, i) => s.classList.toggle('is-on', !loading && i === state.active));
    railLinks.forEach((l, i) => { l.classList.toggle('is-on', i === state.active); const bar = l.querySelector('i'); if (bar) bar.style.transform = `scaleX(${i < state.active ? 1 : i === state.active ? state.p[i] : 0})`; });
    if (rail) rail.classList.toggle('is-gone', !state.inside || (SC[state.active].hot || []).length > 3);
    if (shade) { shade.classList.toggle('is-top', !!SC[state.active].top && !mobile); shade.classList.toggle('is-off', !state.visible); }
    if (hot) hot.classList.toggle('is-off', !state.visible);
    if (countEl) countEl.textContent = `${String(state.active + 1).padStart(2, '0')} / ${String(SC.length).padStart(2, '0')}`;
    if (trackEl) trackEl.style.transform = `scaleX(${clamp((state.a + Math.max(state.mix, state.p[state.a] * 0.3)) / Math.max(1, SC.length - 1), 0.08, 1)})`;
  }

  /* WebGL */
  let gl = null, prog, tex = [], sizes = [];
  const U = {};
  try { gl = canvas.getContext('webgl', { antialias: false, alpha: false, powerPreference: 'high-performance' }); } catch (e) { gl = null; }
  const fail = () => { gl = null; el.classList.remove('is-gl'); };
  const compile = (type, src) => { const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s)); return s; };
  if (gl) {
    try {
      prog = gl.createProgram(); gl.attachShader(prog, compile(gl.VERTEX_SHADER, VS)); gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FS)); gl.linkProgram(prog);
      if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(prog));
      gl.useProgram(prog);
      const buf = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buf); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
      const loc = gl.getAttribLocation(prog, 'p'); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
      'uRes uTime uMouse uMix uMobile uMobScale uTA uTB uSA uSB uCA uCB uFA uFB uBA uBB uXA uXB uAnchor uBg'.split(' ').forEach((n) => { U[n] = gl.getUniformLocation(prog, n); });
      gl.uniform1i(U.uTA, 0); gl.uniform1i(U.uTB, 1);
      el.classList.add('is-gl');
    } catch (err) { console.warn('LARO showroom: WebGL disabled', err); fail(); }
  } else fail();
  ctx.later(() => { try { const ext = gl && gl.getExtension('WEBGL_lose_context'); if (ext) ext.loseContext(); } catch (e) { /* ignore */ } });

  function resize() {
    vw = innerWidth; vh = innerHeight; mobile = vw <= 820;
    if (!gl) return;
    const dpr = Math.min(window.devicePixelRatio || 1, mobile ? 1.25 : 1.5);
    canvas.width = Math.round(vw * dpr); canvas.height = Math.round(vh * dpr); gl.viewport(0, 0, canvas.width, canvas.height);
  }
  ctx.on(window, 'resize', resize); resize();

  const images = SC.map((s) => { const im = new Image(); im.decoding = 'async'; im.src = s.img; return im; });
  let n = 0;
  Promise.all(images.map((im) => new Promise((res) => {
    const ok = () => { n++; document.dispatchEvent(new CustomEvent('laro:progress', { detail: 0.15 + 0.7 * n / images.length })); res(); };
    if (im.complete && im.naturalWidth) ok(); else { im.onload = ok; im.onerror = ok; }
  }))).then(() => {
    sizes = images.map((im) => [im.naturalWidth || 1600, im.naturalHeight || 1000]);
    if (gl) {
      try {
        tex = images.map((im) => {
          if (!im.naturalWidth) throw new Error('image failed: ' + im.src);
          const t = gl.createTexture(); gl.bindTexture(gl.TEXTURE_2D, t);
          gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, im);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
          return t;
        });
      } catch (err) { console.warn('LARO showroom: still images instead', err); fail(); }
    }
    window.__laroShowroomReady = true;
    document.dispatchEvent(new CustomEvent('laro:showroom-ready'));
  });

  const ANCHOR_D = [0.5, 0.5], ANCHOR_M = [0.5, cfg.mobAnchor || 0.3];
  function cam(i, p, push) {
    const s = SC[i], sz = sizes[i] || [1600, 1000];
    const z0 = s.zoom ? s.zoom[0] : 1, z1 = reduce ? z0 : (s.zoom ? s.zoom[1] : 1.1);
    const zoom = (z0 + (z1 - z0) * smooth(0, 1, p)) * (1 + push);
    const f = (mobile ? (s.mfocus || s.focus) : s.focus || [0.5, 0.5]).slice();
    if (!mobile) {
      const S0 = Math.max(vw / sz[0], vh / sz[1]) * zoom, hw = (vw * 0.5) / S0 / sz[0], hh = (vh * 0.5) / S0 / sz[1];
      f[0] = clamp(f[0], hw, 1 - hw); f[1] = clamp(f[1], hh, 1 - hh);
    }
    return { f, zoom, S: (mobile ? (vw / sz[0]) * mobScale : Math.max(vw / sz[0], vh / sz[1])) * zoom, sz };
  }
  const toScreen = (c, u, v) => { const a = mobile ? ANCHOR_M : ANCHOR_D; return [(u - c.f[0]) * c.sz[0] * c.S + a[0] * vw, (v - c.f[1]) * c.sz[1] * c.S + a[1] * vh]; };
  function setScene(slot, i, c) {
    const s = SC[i];
    gl.activeTexture(slot ? gl.TEXTURE1 : gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, tex[i]);
    gl.uniform2f(slot ? U.uSB : U.uSA, c.sz[0], c.sz[1]);
    gl.uniform4f(slot ? U.uCB : U.uCA, c.f[0], c.f[1], c.zoom, 0);
    const fl = new Float32Array(12); (s.flags || []).slice(0, 3).forEach((r, k) => fl.set(r, k * 4));
    gl.uniform4fv(slot ? U.uFB : U.uFA, fl);
    const bb = new Float32Array(32); (s.bobs || []).slice(0, 8).forEach((r, k) => bb.set([r[0], r[1], r[2], r[3] || k * 0.9], k * 4));
    gl.uniform4fv(slot ? U.uBB : U.uBA, bb);
    const fx = s.fx || [0, 0.5, 0]; gl.uniform4f(slot ? U.uXB : U.uXA, fx[0], fx[1], fx[2], 0);
  }
  const copyRight = (i) => { const c = sceneEls[i].querySelector('.ls-copy'); if (!c) return 0; let r = 0; qsa('p, .laro-chips li, .laro-link', c).forEach((e) => { r = Math.max(r, e.getBoundingClientRect().right); }); return r; };
  function placeHot(c) {
    const showA = state.mix < 0.15 && state.visible && !root.classList.contains('laro-loading');
    const many = (SC[state.a].hot || []).length > 3;
    hs.forEach((o) => {
      const vis = showA && o.s === state.a && (state.p[state.a] > 0.04 || state.a === 0) && (!mobile || (many && o.i < 3)) && (!many || state.p[o.s] > 0.05 + o.i * 0.07);
      if (!vis) { o.el.classList.remove('is-v'); return; }
      const [x, y] = toScreen(c, o.h.p[0], o.h.p[1]);
      const rad = o.h.a * Math.PI / 180, len = mobile ? o.h.len * 0.7 : o.h.len;
      const tw = o.tag.offsetWidth || 120, ex = x + Math.cos(rad) * len, ey = Math.sin(rad) * len, tl = o.h.l ? ex - 6 - tw : ex + 6;
      const ok = Math.min(x, tl) > (mobile ? 0 : copyRight(o.s)) + 12 && tl + tw < vw - (many || mobile ? 8 : 80) && y > 90 && y < vh - 40;
      o.el.classList.toggle('is-v', ok); if (!ok) return;
      o.el.style.transform = `translate(${x}px,${y}px)`;
      o.lead.style.width = len + 'px';
      o.tag.style.left = (ex - x + (o.h.l ? -6 : 6)) + 'px'; o.tag.style.top = ey + 'px';
      o.tag.style.setProperty('--tx', o.h.l ? '-100%' : '0');
    });
  }

  const mouse = { x: 0, y: 0, sx: 0, sy: 0 }; let time = 0;
  ctx.on(window, 'pointermove', (e) => { if (e.pointerType === 'mouse') { mouse.x = e.clientX / vw * 2 - 1; mouse.y = e.clientY / vh * 2 - 1; } }, { passive: true });
  ctx.tick((dt) => {
    read(); ui();
    if (!state.visible) { canvas.classList.add('is-off'); return; }
    if (!reduce) time += dt;
    mouse.sx += (mouse.x - mouse.sx) * 0.06; mouse.sy += (mouse.y - mouse.sy) * 0.06;
    const pushA = reduce ? 0 : state.mix * 0.22, pushB = reduce ? 0 : (1 - state.mix) * 0.14;
    const cA = cam(state.a, state.p[state.a], pushA);
    placeHot(cA);
    if (!gl || !tex.length || document.hidden) return;
    canvas.classList.remove('is-off');
    gl.uniform2f(U.uRes, canvas.width, canvas.height); gl.uniform1f(U.uTime, time);
    gl.uniform2f(U.uMouse, reduce ? 0 : mouse.sx, reduce ? 0 : mouse.sy);
    gl.uniform1f(U.uMobile, mobile ? 1 : 0); gl.uniform1f(U.uMobScale, mobScale);
    const an = mobile ? ANCHOR_M : ANCHOR_D; gl.uniform2f(U.uAnchor, an[0], an[1]);
    gl.uniform3f(U.uBg, 0.051, 0.059, 0.051);
    setScene(0, state.a, cA);
    if (state.mix > 0.001) setScene(1, state.b, cam(state.b, 0, pushB));
    gl.uniform1f(U.uMix, state.mix);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  });
  read(); ui();
}

/* ------------------------------------------------------------------ */
/* public API                                                          */
/* ------------------------------------------------------------------ */
const REGISTRY = [
  ['[data-laro-showroom]', initShowroom], ['.laro-hero', initHero], ['.laro-split', initSplit], ['.laro-stack', initStack],
  ['.laro-process', initProcess], ['.laro-cta', initCta], ['.laro-portfolio', initPortfolio], ['form.laro-form', initForm],
];

export function mount(root = document) {
  document.documentElement.classList.add('laro-js');
  startLoop();
  const ctx = makeCtx();
  REGISTRY.forEach(([sel, fn]) => qsa(sel, root).forEach((el) => { try { fn(el, ctx); } catch (e) { console.error('LARO', e); } }));
  initReveals(root, ctx);
  return () => ctx.destroy();
}

export function onTick(fn) { startLoop(); tickers.add(fn); return () => tickers.delete(fn); }
