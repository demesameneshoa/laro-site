/*
 * ─────────────────────────────────────────────────────────────────────────────
 *  LARO website content — edit this file to change the words on the site.
 *  You can do it in the browser: open this file on GitHub, click the pencil
 *  (Edit), change the text between the quotes, then "Commit changes".
 *  Vercel rebuilds and publishes the site automatically in about a minute.
 *
 *  Tips
 *  • Keep the quotes and commas. Text goes between '…' or "…".
 *  • In titles, "\n" starts a new line (each line animates in on its own).
 *  • Images live in /public/img. Upload a new file there and put its name here,
 *    e.g. img: '/img/my-new-photo.jpg'.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const site = {
  name: 'LARO Advertising PLC',
  url: 'https://laroadvertising.com',
  tagline: 'Elevate your Business',
  description: 'Corporate 3D flags, Adey Abeba carpets, executive and eco-friendly gifts, printing, branding and events. Produced, delivered and installed in Addis Ababa since 2012.',
  phone1: '+251 954 676 767',
  phone2: '+251 905 065 060',
  whatsapp: '251954676767',
  email: '', // optional public email, e.g. 'info@laroadvertising.com'
  address: 'Bole Medhaniyalem, Morning Star building, 4th floor, Addis Ababa, Ethiopia',
  mapUrl: 'https://maps.google.com/?q=Morning+Star+Building+Bole+Medhaniyalem+Addis+Ababa',
  cta: { text: 'Request a quote', href: '/contact' },
  showLoader: true, // logo loading screen on the first visit to the home page
  nav: [
    { label: 'Services', href: '/services' },
    { label: 'Eco Range', href: '/eco-range' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  footer: {
    text: 'Corporate flags, Adey Abeba carpets, gifts, print, branding and events. Produced, delivered and installed in Addis Ababa since 2012.',
    services: [
      { label: 'All services', href: '/services' },
      { label: 'Eco range', href: '/eco-range' },
      { label: 'Our work', href: '/portfolio' },
    ],
    company: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
  },
};

const tel = (n) => 'tel:' + n.replace(/[^0-9+]/g, '');
export { tel };

/* ── Reusable blocks ────────────────────────────────────────────────────── */

export const ecoItems = [
  { label: 'Bamboo pens', icon: 'pen', note: 'Renewable bamboo barrels, laser-engraved logo' },
  { label: 'Recycled paper bags', icon: 'bag', note: 'Kraft or white stock with rope handles' },
  { label: 'Recycled notebooks', icon: 'notebook', note: 'Recycled covers and pages, custom bands' },
  { label: 'Reusable water bottles', icon: 'bottle', note: 'Stainless or glass, printed or engraved' },
  { label: 'Eco-friendly packaging', icon: 'box', note: 'Plastic-free boxes and fillers' },
  { label: 'Cotton tote bags', icon: 'tote', note: 'Screen-printed in your colours' },
  { label: 'Kraft paper folders', icon: 'folder', note: 'Conference and tender folders' },
  { label: 'Wooden key holders', icon: 'key', note: 'Engraved hardwood tags' },
  { label: 'Cork notebooks', icon: 'cork', note: 'Soft cork covers, debossed logo' },
  { label: 'Reusable coffee cups', icon: 'cup', note: 'For offices phasing out single-use cups' },
  { label: 'Sustainable office supplies', icon: 'desk', note: 'Desk sets that match your policy' },
  { label: 'Eco gift sets', icon: 'gift', note: 'Ready-made bundles, boxed and branded' },
];

export const reasons = [
  { icon: 'star', title: 'Premium-quality products', text: 'Materials and finishes chosen to represent an institution, not just decorate an event.' },
  { icon: 'tag', title: 'Competitive pricing', text: 'In-house production keeps quotes sharp without cutting corners on finish.' },
  { icon: 'tool', title: 'Professional installation', text: 'Our own crew mounts flags, lays carpets and fits signage, on schedule.' },
  { icon: 'clock', title: 'Fast turnaround', text: 'Tight ceremony and conference dates are routine for us, not a risk.' },
  { icon: 'sliders', title: 'Customized solutions', text: 'Every item produced to your brand guidelines, colours and brief.' },
  { icon: 'people', title: 'Experienced professionals', text: 'A dedicated team led by founders with a decade each in production and marketing.' },
];

export const audiences = [
  { title: 'Government institutions', text: 'Protocol-grade flags, carpets and gifts for ministries, bureaus and state ceremonies.', list: ['Federal government institutions', 'Regional government institutions', 'City administration offices'] },
  { title: 'International organizations', text: 'Diplomatic flags, delegation gifts and eco lines that satisfy sustainability policies.', list: ['Embassies', 'International organizations', 'Non-governmental organizations (NGOs)'] },
  { title: 'Corporate', text: 'Branch branding, executive gifts and launch events delivered to brand guidelines.', list: ['Banks', 'Insurance companies', 'Large private companies'] },
];

// Client logos: add files to /public/img/clients and set logo: '/img/clients/name.png'
export const clients = Array.from({ length: 9 }, (_, i) => ({ name: `[CLIENT LOGO ${String(i + 1).padStart(2, '0')}]`, logo: '' }));

// Portfolio: placeholder: true shows a "Placeholder" tag until you add real project photos
export const projects = [
  { title: 'Outdoor flag row', cat: 'Flags', img: '/img/flags.jpg', ratio: '16/10', placeholder: true },
  { title: 'Red carpet arrival', cat: 'Carpets', img: '/img/carpets.jpg', ratio: '4/5', placeholder: true },
  { title: 'Executive gift box', cat: 'Gifts', img: '/img/gifts.jpg', ratio: '16/10', placeholder: true },
  { title: 'Conference stage', cat: 'Events', img: '/img/events.jpg', ratio: '16/10', placeholder: true },
  { title: 'Eco welcome kit', cat: 'Gifts', img: '/img/eco.jpg', ratio: '4/5', placeholder: true },
  { title: 'Roll-up banners', cat: 'Print', img: '/img/events.jpg', ratio: '4/5', placeholder: true },
  { title: 'Boardroom table flags', cat: 'Flags', img: '/img/flags.jpg', ratio: '4/5', placeholder: true },
  { title: 'LED backdrop branding', cat: 'Branding', img: '/img/events.jpg', ratio: '16/10', placeholder: true },
  { title: 'Satin lobby flag', cat: 'Flags', img: '/img/hero.jpg', ratio: '16/10', placeholder: true },
];

// Team: add a portrait with photo: '/img/team/lealem.jpg'
export const team = [
  { initials: 'LA', name: 'Lealem Abera', role: 'CEO & Founder', years: '10 yrs', note: 'BA, Marketing Management', photo: '' },
  { initials: 'DB', name: 'Dereje Bekele', role: 'COO & Co-founder', years: '10 yrs', note: 'Production management', photo: '' },
  { initials: 'EA', name: 'Esmael Abdele', role: 'Deputy General Manager', years: '8 yrs', note: 'Project & software management', photo: '' },
  { initials: 'RT', name: 'Rediet Tigistu', role: 'Accountant', years: '6 yrs', note: 'Finance', photo: '' },
  { initials: 'SK', name: 'Samrawit Kassahun', role: 'Graphic Designer', years: '2 yrs', note: 'Brand & print design', photo: '' },
];

export const quoteServices = ['Corporate 3D flags', 'Adey Abeba carpets', 'Corporate gift boxes', 'Eco-friendly products', 'Printing', 'Branding', 'Event management'];

export const defaultCta = {
  kicker: ['Next step', 'Request a quote'],
  title: 'Give us the date.\nWe handle the rest.',
  text: 'Send the brief, quantities and venue. We come back with a costed proposal, samples where needed and an installation plan.',
};

/* ── Home: the 3D showroom ──────────────────────────────────────────────────
 * Coordinates are % of the image.
 * flags: one "left, top, right, bottom" box per waving flag (pole on the left)
 * float: "x, y, radius" per floating item
 * hotspots: [x, y, line angle, line length px, label, 'left' to put the label left]
 * lighting: 'none' | 'sweep' | 'beams' | 'warm'
 */
export const showroom = {
  proof: ['Since 2012', '18+ partner brands', 'Government', 'Embassies', 'NGOs', 'Banks'],
  scrollHint: 'Scroll to enter the showroom',
  buttons: [{ text: 'Request a quote', href: '/contact' }, { text: 'Call +251 954 676 767', href: tel('+251 954 676 767') }],
  scenes: [
    {
      nav: 'Flag', img: '/img/hero.jpg', kicker: 'Corporate branding · Addis Ababa · Est. 2012',
      title: 'Your brand,\nflown with\nauthority.', accent: true,
      text: 'Corporate flags, Adey Abeba carpets, executive gifts, print and event branding. Produced, delivered and installed for Ethiopia’s leading institutions.',
      focus: [62, 50], mfocus: [80, 50], zoom: 1.1,
      flags: [[62.5, 22, 97.5, 76]],
      hotspots: [[63.3, 86, -8, 70, 'Satin 3D flag · steel pole']],
    },
    {
      nav: 'Flags', img: '/img/flags.jpg', kicker: 'Corporate 3D flags', title: 'Flown right.\nInstalled right.',
      text: 'Satin-finish corporate, national and diplomatic flags, printed true to your colours, mounted on brushed steel and installed by our own crew.',
      chips: ['Corporate 3D flags', 'Indoor & outdoor flags', 'Dual table flags', 'National flags', 'Corporate table flags', 'Embassy flags', 'Diplomatic flags', 'Stands & accessories', 'Custom production & installation'],
      link: { text: 'Quote a flag system', href: '/contact' },
      focus: [56, 45], mfocus: [60, 32], zoom: 1.1,
      flags: [[24.5, 17, 45, 41], [49, 9, 70, 32], [74.5, 12, 98, 38]],
      hotspots: [[43, 69, 155, 60, 'Dual table flag', 'left']],
    },
    {
      nav: 'Carpets', img: '/img/carpets.jpg', kicker: 'Adey Abeba carpets', title: 'Arrivals worth\nthe walk.',
      text: 'Red carpet and custom event carpets cut to your venue and laid by our team, from a single entrance to a national ceremony.',
      chips: ['Customized production', 'Carpet installation', 'Event carpets', 'Red carpet supply', 'Corporate carpet branding', 'Large-scale projects'],
      link: { text: 'Book a carpet install', href: '/contact' },
      focus: [55, 55], mfocus: [45, 60], zoom: 1.16, lighting: 'sweep',
      hotspots: [[20, 84, -30, 60, 'Gold stanchions']],
    },
    {
      nav: 'Gifts', img: '/img/gifts.jpg', kicker: 'Corporate gifts', title: 'Gifts that stay\non the desk.',
      text: 'Premium gift boxes built around your identity. Every item branded, boxed and delivered ready for the boardroom, the delegation or the gala.',
      chips: ['Premium gift boxes', 'Notebooks', 'Pens', 'Coffee mugs', 'Key holders', 'Umbrellas', 'T-shirts', 'Caps', 'Lanyards', 'Corporate souvenirs'],
      link: { text: 'Build a gift box', href: '/contact' },
      focus: [60, 47], mfocus: [68, 45], zoom: 1.1,
      float: [[47.7, 53.9, 7], [88.1, 50.8, 6], [63.7, 44.8, 5], [79.2, 55.6, 4.5], [91.5, 63.1, 4.5], [54, 35.6, 6], [81.9, 35.3, 5], [67.9, 29.6, 9]],
      hotspots: [
        [47.7, 53.9, 57.7, 106, 'Coffee mug'], [88.1, 50.8, -68.2, 156, 'Notebook'], [63.7, 44.8, 62.2, 101, 'Pen'],
        [79.2, 55.6, -96.3, 85, 'Key holder', 'left'], [91.5, 63.1, -174.3, 94, 'Umbrella', 'left'],
        [54, 35.6, 156, 92, 'Lanyard & badge', 'left'], [81.9, 35.3, -48.8, 100, 'Cap'], [67.9, 29.6, -165.1, 149, 'Gift box lid', 'left'],
      ],
    },
    {
      nav: 'Eco', img: '/img/eco.jpg', layout: 'top', kicker: 'Eco-friendly range', title: 'Same finish.\nLighter footprint.',
      text: 'Bamboo, cork, kraft and cotton alternatives, branded to the same standard and ready for sustainable procurement rules.',
      chips: ['Bamboo pens', 'Cork notebooks', 'Kraft paper bags', 'Cotton tote bags', 'Reusable bottles', 'Reusable coffee cups', 'Eco gift sets'],
      link: { text: 'See the eco range', href: '/eco-range' },
      focus: [50, 60], mfocus: [38, 70], zoom: 1.08, lighting: 'warm',
      hotspots: [[59, 84, -40, 60, 'Bamboo pen']],
    },
    {
      nav: 'Print & events', img: '/img/events.jpg', kicker: 'Print, branding & events', title: 'Printed.\nBranded.\nStaged.',
      text: 'Brochures to roll-ups, office walls to vehicle wraps, launch stages to trade stands: one accountable team from artwork to install.',
      chips: ['Brochures & catalogues', 'Roll-up banners', 'Labels & stickers', 'Books & magazines', 'Posters & banners', 'Packaging', 'Vehicle branding', 'Office branding', 'Signboards', 'Exhibition stands', 'Display systems', 'Product launches', 'Conferences', 'Trade exhibitions', 'Event branding & decoration'],
      link: { text: 'See all services', href: '/services' },
      focus: [58, 50], mfocus: [55, 50], zoom: 1.12, lighting: 'beams',
      hotspots: [[94, 86, -150, 60, 'Roll-up banner', 'left']],
    },
  ],
};

/* ── Services page ──────────────────────────────────────────────────────── */
export const services = {
  hero: {
    img: '/img/events.jpg', pos: '56% 50%', kicker: ['Services', 'What we make'],
    title: 'Everything your brand\nneeds to be seen.', accent: true,
    text: 'Flags, carpets, gifts, print, branding and events: produced, delivered and installed by one accountable team in Addis Ababa.',
    buttons: [{ text: 'Request a quote', href: '/contact' }, { text: 'See our work', href: '/portfolio' }],
  },
  intro: { kicker: ['Six service lines', 'One team'], title: 'From the first proof\nto the last banner.', text: 'Scroll through what we produce. Every line is made to your brand guidelines and installed by our own crew.' },
  cards: [
    { id: 'flags', img: '/img/flags.jpg', kicker: 'Corporate 3D flags', title: 'Flown right.\nInstalled right.', text: 'One of Ethiopia’s leading suppliers of premium corporate flag systems: printed true to your colours, mounted on brushed steel and installed by our crew.', chips: ['Corporate 3D flags', 'Indoor & outdoor flags', 'Dual table flags', 'National flags', 'Corporate table flags', 'Embassy flags', 'Diplomatic flags', 'Flag stands & accessories', 'Custom production & installation'] },
    { id: 'carpets', img: '/img/carpets.jpg', kicker: 'Adey Abeba carpets', title: 'Arrivals worth\nthe walk.', text: 'Premium Adey Abeba carpets for government institutions, hotels, embassies, exhibition centres and event organisers, cut to the venue and laid on site.', chips: ['Customized carpet production', 'Carpet installation', 'Event carpets', 'Red carpet supply', 'Corporate carpet branding', 'Large-scale installation projects'] },
    { id: 'gifts', img: '/img/gifts.jpg', kicker: 'Corporate gift boxes', title: 'Gifts that stay\non the desk.', text: 'Executive gift boxes built around your identity for delegations, boards and galas. Every item carries your logo, colours and campaign message.', chips: ['Premium gift boxes', 'Customized notebooks', 'Pens', 'Coffee mugs', 'Key holders', 'Umbrellas', 'T-shirts', 'Caps', 'Lanyards', 'Corporate souvenirs'] },
    { id: 'eco', img: '/img/eco.jpg', kicker: 'Eco-friendly products', title: 'Same finish.\nLighter footprint.', text: 'Bamboo, cork, kraft and cotton alternatives that meet the sustainability requirements of embassies, NGOs, banks and international organisations.', chips: ['Bamboo pens', 'Recycled paper bags', 'Recycled notebooks', 'Reusable water bottles', 'Cotton tote bags', 'Cork notebooks', 'Eco gift sets'] },
    { id: 'print', img: '/img/events.jpg', kicker: 'Printing', title: 'Printed sharp,\ndelivered on time.', text: 'From labels to books: print runs proofed against your brand guidelines and finished in-house.', chips: ['Labels & stickers', 'Brochures & catalogues', 'Books & magazines', 'Posters & banners', 'Packaging materials', 'Roll-up banners'] },
    { id: 'events', img: '/img/hero.jpg', kicker: 'Branding & events', title: 'Branded spaces.\nStaged moments.', text: 'Office, vehicle and exhibition branding, plus corporate events, product launches, conferences and trade exhibitions planned and dressed end to end.', chips: ['Corporate branding', 'Office branding', 'Vehicle branding', 'Signboards', 'Exhibition stands', 'Display systems', 'Corporate events', 'Product launches', 'Conferences', 'Trade exhibitions', 'Event branding & decoration'] },
  ],
  process: {
    kicker: ['Process', 'How a project runs'], title: 'Four steps,\none accountable team.', text: 'Whether it is a single table flag or a national ceremony, every project follows the same route.',
    steps: [
      { title: 'Brief', text: 'Tell us the date, venue, quantities and brand files. We call back within one working day.' },
      { title: 'Proposal & proof', text: 'A costed proposal, artwork proofs and samples where needed.' },
      { title: 'Production', text: 'Printed, sewn and assembled in-house to your brand guidelines.' },
      { title: 'Delivery & installation', text: 'Our crew delivers and installs on schedule, ready for the day.' },
    ],
  },
};

/* ── Eco range page ─────────────────────────────────────────────────────── */
export const eco = {
  hero: {
    img: '/img/eco.jpg', pos: '45% 75%', kicker: ['Eco range', 'Sustainable procurement'],
    title: 'Same finish.\nLighter footprint.', accent: true,
    text: 'Bamboo, cork, kraft and cotton alternatives, branded to the same standard as our executive range and ready for sustainable procurement rules.',
    buttons: [{ text: 'Request the eco catalogue', href: '/contact' }, { text: 'Call +251 954 676 767', href: tel('+251 954 676 767') }],
  },
  intro: { kicker: ['Eco', 'Sustainable procurement'], title: 'Green procurement, met with a green catalogue.', text: 'Embassies, NGOs, banks and international organizations increasingly require sustainable suppliers. Our eco range meets that brief without lowering the finish, and every item carries your logo, colours and campaign message.' },
  callout: { label: 'Tender-ready', text: 'Ask for the eco catalogue with materials and specifications for each item, ready to attach to your procurement file.' },
  split: {
    img: '/img/gifts.jpg', kicker: ['Mix & match', 'Gift sets'], title: 'Eco and executive,\nin one box.',
    text: ['Combine eco items with premium executive pieces in a single branded gift box, so delegations and partners receive one coherent set that still meets your sustainability policy.'],
    list: ['Every item carries your logo, colours and message', 'Materials listed for procurement files', 'Plastic-free packaging on request', 'Delivered boxed and ready to hand over'],
    button: { text: 'Build a gift set', href: '/contact' },
  },
  cta: { kicker: ['Eco catalogue', 'Tender-ready'], title: 'Request the\neco catalogue.', text: 'Tell us the quantities and the procurement rules you need to meet. We send materials, specifications and a costed proposal.' },
};

/* ── Portfolio page ─────────────────────────────────────────────────────── */
export const portfolio = {
  hero: { img: '/img/gifts.jpg', pos: '66% 45%', height: 72, kicker: ['Work', 'Portfolio'], title: 'Proof,\ninstalled.', accent: true, text: 'Flags, carpets, gift boxes, print and event branding produced and installed for institutions across Ethiopia.' },
  intro: { kicker: ['Projects', 'Filter by service'], title: 'Selected work', text: 'Images marked “Placeholder” stand in until project photos are added. Click any project to open it larger.' },
  cta: { kicker: ['Your project', 'Next'], title: 'Let’s add yours\nto this page.' },
};

/* ── About page ─────────────────────────────────────────────────────────── */
export const about = {
  hero: { img: '/img/hero.jpg', pos: '72% 50%', height: 78, kicker: ['About', 'Since 2012'], title: 'Transforming ideas\ninto strong brands.', accent: true, text: 'LARO Advertising PLC delivers products and services that create lasting impressions and long-term value for the institutions we work with.' },
  story: {
    img: '/img/events.jpg', kicker: ['Our story', 'Addis Ababa'], title: 'Advertising is an art\nand a science.', accent: true,
    text: [
      'LARO Advertising PLC was founded in 2012 to help organisations reach their marketing goals through creative, well-made advertising.',
      'Today we specialise in corporate branding, printing, promotional products, event management and customised branding solutions for government institutions, embassies, NGOs, banks, insurance companies and large private enterprises.',
    ],
    list: ['Corporate 3D flags and flag systems', 'Adey Abeba carpets and installation', 'Executive and eco-friendly gift boxes', 'Printing, branding and event management'],
    button: { text: 'See our services', href: '/services' },
  },
  stats: [
    { value: 2012, label: 'Founded in Addis Ababa' },
    { value: 18, suffix: '+', label: 'Partner brands' },
    { value: 6, label: 'Service lines' },
    { value: 10, suffix: ' yrs', label: 'Founders’ experience' },
  ],
};

/* ── Contact page ───────────────────────────────────────────────────────── */
export const contact = {
  hero: { img: '/img/carpets.jpg', pos: '40% 60%', height: 64, kicker: ['Contact', 'Request a quote'], title: 'Tell us what\nyou are launching.', accent: true, text: 'Call, message us on WhatsApp or send the brief below. We reply within one working day.' },
  info: { kicker: ['Contact', 'Request a quote'], title: 'Give us the date.\nWe handle the rest.', text: 'Send the brief, quantities and venue. We come back with a costed proposal, samples where needed and an installation plan.', priceLabel: 'Branding packages from', price: 'ETB 30,000' },
  form: { topLeft: 'Quote request', topRight: 'Reply within one working day', button: 'Request a quote', aside: 'Prefer to talk? Call +251 905 065 060', ok: 'Thank you. Your request has reached the LARO team and we will call you back within one working day.' },
  next: {
    kicker: ['What happens next', 'Process'], title: 'From your message\nto installation.',
    steps: [
      { title: 'We call you back', text: 'Within one working day, to confirm dates, quantities and venue.' },
      { title: 'Proposal & proof', text: 'A costed proposal with artwork proofs and samples where needed.' },
      { title: 'Production & install', text: 'Produced in-house, delivered and installed by our crew.' },
    ],
  },
};
