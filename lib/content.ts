// All site copy lives here. Source: "Website content LAP.docx" and "LAP Overview.pdf".

export const company = {
  name: 'LARO Advertising PLC',
  short: 'LARO',
  tagline: 'Elevate your Business',
  founded: 2012,
  phones: ['+251 954 676 767', '+251 905 065 060'],
  phoneHref: ['tel:+251954676767', 'tel:+251905065060'],
  whatsapp: 'https://wa.me/251954676767',
  email: '', // TODO: add the public email address
  address: ['Bole Medhaniyalem', 'Morning Star Building, 4th Floor', 'Addis Ababa, Ethiopia'],
  mapQuery: 'Morning Star Building, Bole Medhaniyalem, Addis Ababa',
  socials: [
    { label: 'Facebook', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'Instagram', href: '#' },
    { label: 'TikTok', href: '#' },
  ],
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'About', href: '/about' },
  { label: 'Clients', href: '/clients' },
  { label: 'Contact', href: '/contact' },
];

export const intro = {
  title: 'Elevate Your Brand. Elevate Your Business.',
  lead: 'At LARO Advertising PLC, we bring strategy, creativity, production, and execution together to help organizations build stronger brands and communicate with greater impact.',
  body: 'From brand identity and creative campaigns to premium printing, outdoor advertising, corporate gifts, sustainable promotional products, and event branding, we provide integrated solutions tailored to the needs of businesses, government institutions, NGOs, development organizations, and corporate clients.',
  oneLiner: 'One partner. Multiple capabilities. Seamless execution.',
  purpose: 'Our purpose is simple: to help you elevate your business through better branding, better communication, and better experiences.',
};

export type Service = {
  slug: string;
  n: string;
  title: string;
  short: string;
  tagline: string;
  intro: string[];
  items: string[];
  outro: string;
  closer: string;
  image: string;
  imagePos?: string;
  tag: string;
};

export const services: Service[] = [
  {
    slug: 'brand-strategy-corporate-identity', n: '01', title: 'Brand Strategy & Corporate Identity', short: 'Brand & Identity', tag: 'Branding',
    tagline: 'Build a brand people recognize, trust, and remember.',
    intro: ['Your brand is more than a logo. We develop strategic and visual identities that create consistency, recognition, and confidence across every customer and stakeholder touchpoint.'],
    items: ['Brand strategy & positioning', 'Brand identity development', 'Logo design & redesign', 'Corporate identity systems', 'Visual identity guidelines', 'Brand architecture', 'Corporate stationery', 'Business cards & letterheads', 'Presentation templates', 'Brand implementation', 'Brand refresh & rebranding', 'Institutional and organizational branding'],
    outro: 'We create the foundation that helps your business stand out and move forward.',
    closer: 'Elevate your business through a stronger brand.',
    image: '/images/stationery.jpg', imagePos: '50% 50%',
  },
  {
    slug: 'creative-design-marketing-communications', n: '02', title: 'Creative Design & Marketing Communications', short: 'Creative & Marcom', tag: 'Creative',
    tagline: 'Ideas that communicate. Designs that connect.',
    intro: ['We turn ideas, messages, and objectives into compelling visual communication designed around your audience and your brand.'],
    items: ['Creative concepts & campaigns', 'Graphic design', 'Advertising design', 'Digital campaign creatives', 'Social media content', 'Corporate profiles', 'Annual reports', 'Brochures & catalogues', 'Magazines & newsletters', 'Presentations', 'Infographics', 'Posters & promotional materials', 'Marketing communication materials', 'Photography & visual content', 'Video and motion graphics'],
    outro: 'Creative thinking with a clear purpose: to make your message seen, understood, and remembered.',
    closer: 'Make your message seen, understood, and remembered.',
    image: '/images/print.jpg', imagePos: '78% 40%',
  },
  {
    slug: 'printing-publishing', n: '03', title: 'Printing & Publishing', short: 'Printing & Publishing', tag: 'Printing',
    tagline: 'From ideas on screen to quality in hand.',
    intro: ['We provide professional printing and publishing solutions for corporate, institutional, commercial, and promotional requirements.'],
    items: ['Corporate printing', 'Books & publications', 'Annual reports', 'Research reports', 'Brochures', 'Flyers & leaflets', 'Magazines', 'Catalogues', 'Company profiles', 'Training materials', 'Certificates', 'Business forms', 'Corporate stationery', 'Presentation folders', 'Packaging & printed materials', 'Large-format printing', 'Finishing, binding & packaging'],
    outro: 'We coordinate the complete production process, from artwork preparation and material selection to printing, finishing, quality control, and delivery. Quality controlled. Professionally finished. Delivered ready for use.',
    closer: 'Your message deserves to be produced at the right standard.',
    image: '/images/print.jpg', imagePos: '30% 55%',
  },
  {
    slug: 'signage-displays-outdoor-advertising', n: '04', title: 'Signage, Displays & Outdoor Advertising', short: 'Signage & Outdoor', tag: 'Signage',
    tagline: 'Make your brand impossible to miss.',
    intro: ['We create physical brand experiences that give organizations a strong and visible presence across offices, commercial spaces, public environments, and outdoor locations.'],
    items: ['Outdoor advertising', 'Billboard solutions', 'LED display screens', 'Digital signage', '3D letters & logos', 'Illuminated signage', 'Building signage', 'Reception & office branding', 'Wayfinding systems', 'Directional signage', 'Indoor displays', 'Outdoor displays', 'Corporate flags', '3D corporate flags', 'Event backdrops', 'Exhibition displays', 'Display stands', 'Signage structures & installation'],
    outro: 'From a single sign to a complete branded environment, we deliver visibility with purpose.',
    closer: 'Elevate your business by making your brand visible.',
    image: '/images/signage.jpg', imagePos: '45% 40%',
  },
  {
    slug: 'promotional-products-corporate-gifts', n: '05', title: 'Promotional Products & Corporate Gifts', short: 'Promotional & Gifts', tag: 'Promotional',
    tagline: 'Put your brand in people’s hands.',
    intro: ['Promotional products turn everyday interactions into opportunities for brand recognition and engagement.', 'We source, customize, brand, package, and deliver promotional products for corporate campaigns, employee engagement, events, conferences, client appreciation, and institutional programs.'],
    items: ['Corporate gifts', 'Executive gifts', 'Promotional merchandise', 'Branded notebooks', 'Pens & writing instruments', 'Bags & backpacks', 'Bottles & drinkware', 'Umbrellas', 'Caps & apparel', 'Keyholders', 'Desk accessories', 'Technology accessories', 'Conference materials', 'Employee gifts', 'Client appreciation gifts', 'Custom promotional products', 'Premium gift sets', 'Institutional and campaign merchandise'],
    outro: 'Thoughtfully selected. Professionally branded. Memorable by design.',
    closer: 'Thoughtfully selected. Professionally branded.',
    image: '/images/gifts.jpg', imagePos: '68% 50%',
  },
  {
    slug: 'eco-friendly-promotional-advertising', n: '06', title: 'Eco-Friendly Promotional & Advertising Solutions', short: 'Eco-Friendly', tag: 'Eco',
    tagline: 'Sustainable ideas. Responsible impact.',
    intro: ['We help organizations communicate their brands through more environmentally conscious promotional and advertising solutions.', 'From sustainable corporate gifts to reusable promotional products and environmentally conscious event materials, we help clients make responsible choices while maintaining quality and brand impact.'],
    items: ['Bamboo promotional products', 'Wooden promotional products', 'Cork products', 'Recycled-material products', 'Recycled paper products', 'Sustainable notebooks', 'Eco-friendly pens', 'Reusable shopping bags', 'Cotton & canvas bags', 'Jute promotional bags', 'Reusable bottles & cups', 'Eco-friendly lanyards', 'Sustainable badges', 'Eco-friendly corporate gifts', 'Sustainable gift sets', 'Reusable event materials', 'Environmentally conscious event branding', 'Sustainable promotional campaigns'],
    outro: 'We work with clients to select materials and products that align with their sustainability objectives, campaign requirements, and budgets.',
    closer: 'Elevate your business. Make a positive impact.',
    image: '/images/eco.jpg', imagePos: '50% 62%',
  },
  {
    slug: 'events-brand-activation', n: '07', title: 'Events & Brand Activation', short: 'Events & Activation', tag: 'Events',
    tagline: 'Turn events into brand experiences.',
    intro: ['We create branded environments that help organizations engage audiences, communicate messages, and create memorable experiences.'],
    items: ['Event branding', 'Conference branding', 'Exhibition branding', 'Corporate events', 'Product launches', 'Promotional activations', 'Event backdrops', 'Stage branding', 'Directional signage', 'Registration areas', 'Exhibition booths', 'Promotional displays', 'Branded flags', 'Banners & displays', 'Adey Abeba & red carpets', 'Corporate merchandise', 'Conference materials', 'Event printing', 'On-site branding & installation'],
    outro: 'From concept and design to production and installation, we help create cohesive brand experiences from entrance to exit.',
    closer: 'Your event is temporary. Your brand impression can last much longer.',
    image: '/images/events.jpg', imagePos: '72% 45%',
  },
  {
    slug: 'sourcing-supply-installation', n: '08', title: 'Sourcing, Supply & Installation', short: 'Sourcing & Installation', tag: 'Sourcing',
    tagline: 'One reliable partner from procurement to delivery.',
    intro: ['Some projects require more than creative expertise. They require specialized sourcing, production coordination, logistics, and professional installation.', 'LARO provides end-to-end project coordination for customized and specialized requirements.'],
    items: ['Promotional product sourcing', 'Corporate merchandise sourcing', 'Specialized material sourcing', 'Imported promotional products', 'Customized product development', 'Printing material sourcing', 'Advertising material supply', 'Signage material supply', 'Equipment & display sourcing', 'Production coordination', 'Quality inspection', 'Packaging', 'Logistics & delivery', 'Installation & commissioning', 'Project coordination'],
    outro: 'We work with a network of specialized production partners and suppliers to deliver solutions according to the required specification, quantity, quality, timeline, and budget.',
    closer: 'Source. Produce. Coordinate. Deliver. Install.',
    image: '/images/flags.jpg', imagePos: '55% 40%',
  },
];

export const integrated = {
  title: 'One Brief. One Partner. One Brand Experience.',
  lead: 'Many projects require several capabilities working together. That’s where LARO makes the difference.',
  chain: ['Strategy', 'Design', 'Production', 'Printing', 'Promotional Products', 'Signage', 'Installation', 'Delivery'],
  body: 'Instead of managing multiple suppliers, clients can work with one coordinated partner responsible for bringing the entire solution together.',
  examples: [
    { title: 'Corporate Rebranding', parts: ['Brand Strategy', 'Identity', 'Guidelines', 'Stationery', 'Signage', 'Promotional Products'], image: '/images/stationery.jpg' },
    { title: 'Government & Institutional Communication', parts: ['Publications', 'Reports', 'Printing', 'Signage', 'Corporate Materials', 'Events'], image: '/images/print.jpg' },
    { title: 'Corporate Event', parts: ['Event Concept', 'Branding', 'Backdrops', 'Flags', 'Displays', 'Promotional Products', 'Installation'], image: '/images/events.jpg' },
    { title: 'Sustainable Campaign', parts: ['Campaign Design', 'Eco-Friendly Promotional Products', 'Sustainable Printing', 'Event Branding'], image: '/images/eco.jpg' },
  ],
};

export const approach = {
  title: 'From Brief to Delivery',
  lead: 'We believe successful projects require more than good design. They require disciplined execution.',
  steps: [
    { n: '01', t: 'Understand', d: 'We listen to your objectives, audience, requirements, specifications, and timeline.' },
    { n: '02', t: 'Develop', d: 'Our team develops the creative, technical, and production solution.' },
    { n: '03', t: 'Produce', d: 'We coordinate production using appropriate materials, technologies, and specialized production partners.' },
    { n: '04', t: 'Quality Control', d: 'We inspect and coordinate the work against approved specifications before delivery.' },
    { n: '05', t: 'Deliver', d: 'We coordinate packaging, logistics, delivery, installation, and final execution as required.' },
    { n: '06', t: 'Support', d: 'We remain available for implementation, additional production, and ongoing brand requirements.' },
  ],
};

export const sectors = {
  title: 'Who We Serve',
  lead: 'We work with organizations that value professional communication, quality execution, and dependable delivery.',
  list: ['Government institutions', 'Public enterprises', 'Banks & financial institutions', 'Insurance companies', 'NGOs & development organizations', 'International organizations', 'Corporate businesses', 'Educational institutions', 'Healthcare organizations', 'Events & conference organizers', 'Startups & growing businesses'],
};

export const why = [
  { t: 'Integrated Capability', d: 'Strategy, creative, production, promotion, and execution under one partner.' },
  { t: 'Professional Execution', d: 'We coordinate projects from initial brief through final delivery.' },
  { t: 'Flexible Production Network', d: 'Access to specialized local and international production capabilities.' },
  { t: 'Quality Focus', d: 'Specifications, material selection, production coordination, and quality control are integrated into our workflow.' },
  { t: 'Customized Solutions', d: 'We adapt products and services to your brand, audience, quantity, budget, and timeline.' },
  { t: 'Sustainable Options', d: 'Eco-friendly alternatives are available across promotional, advertising, gifting, printing, and event requirements.' },
  { t: 'Institutional Experience', d: 'We understand the documentation, specifications, coordination, and professionalism expected by institutional and corporate clients.' },
];

export const team = [
  { name: 'Lealem Abera', role: 'CEO & Founder', exp: '10 years', note: 'BA, Marketing Management', initials: 'LA' },
  { name: 'Dereje Bekele', role: 'COO & Co-founder', exp: '10 years', note: 'Production management', initials: 'DB' },
  { name: 'Esmael Abdele', role: 'Deputy General Manager', exp: '8 years', note: 'Project & software management', initials: 'EA' },
  { name: 'Rediet Tigistu', role: 'Accountant', exp: '6 years', note: 'Finance', initials: 'RT' },
  { name: 'Samrawit Kassahun', role: 'Graphic Designer', exp: '2 years', note: 'Brand & print design', initials: 'SK' },
];

// Placeholders until the real documents are supplied.
export const legalDocs = [
  { t: 'Commercial Registration Certificate', d: 'Ministry of Trade and Regional Integration' },
  { t: 'Business License', d: 'Advertising, printing and promotional services' },
  { t: 'TIN Certificate', d: 'Ethiopian Ministry of Revenues' },
  { t: 'VAT Registration Certificate', d: 'Ethiopian Ministry of Revenues' },
];

export type WorkItem = { title: string; cat: string; image: string; pos?: string; size?: 'tall' | 'wide' | 'std' };
// Placeholder portfolio built from LARO product renders. Replace with real project photos.
export const work: WorkItem[] = [
  { title: '3D corporate flag system', cat: 'Signage', image: '/images/hero.jpg', pos: '78% 45%', size: 'tall' },
  { title: 'Reception 3D illuminated logo', cat: 'Signage', image: '/images/signage.jpg', pos: '45% 40%', size: 'wide' },
  { title: 'Executive gift box', cat: 'Promotional', image: '/images/gifts.jpg', pos: '70% 50%', size: 'std' },
  { title: 'Conference stage branding', cat: 'Events', image: '/images/events.jpg', pos: '72% 45%', size: 'std' },
  { title: 'Corporate identity & stationery', cat: 'Branding', image: '/images/stationery.jpg', pos: '50% 50%', size: 'wide' },
  { title: 'Eco welcome kit', cat: 'Eco', image: '/images/eco.jpg', pos: '50% 62%', size: 'std' },
  { title: 'Annual report & publications', cat: 'Printing', image: '/images/print.jpg', pos: '50% 50%', size: 'std' },
  { title: 'Red carpet arrival', cat: 'Events', image: '/images/carpet.jpg', pos: '35% 60%', size: 'std' },
  { title: 'Boardroom & outdoor flags', cat: 'Signage', image: '/images/flags.jpg', pos: '55% 40%', size: 'std' },
];
export const workCats = ['All', 'Branding', 'Creative', 'Printing', 'Signage', 'Promotional', 'Eco', 'Events'];

export const closing = {
  title: 'Elevate Your Business With LARO',
  lines: ['Your brand has a story.', 'Your audience has expectations.', 'Your business has ambitions.'],
  body: 'We bring the strategy, creativity, materials, production, and execution together to help you communicate with confidence and create a stronger presence.',
};

export const commitment = 'LARO Advertising PLC is dedicated to transforming ideas into strong brands by delivering exceptional products and services that create lasting impressions and long-term value for our clients.';

export const heroSlides = [
  { image: '/images/hero.jpg', caption: '3D corporate flags', pos: '72% 50%' },
  { image: '/images/signage.jpg', caption: 'Illuminated 3D signage', pos: '50% 40%' },
  { image: '/images/events.jpg', caption: 'Event & stage branding', pos: '70% 45%' },
  { image: '/images/gifts.jpg', caption: 'Corporate gifts', pos: '70% 50%' },
];
