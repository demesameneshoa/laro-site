// All site copy lives here. Source: "Website content LAP.docx" and "LAP Overview.pdf".

export const company = {
  name: 'LARO Advertising PLC',
  short: 'LARO',
  tagline: 'Elevate your Business',
  founded: 2012,
  phones: ['+251 954 676 767', '+251 905 065 060'],
  phoneHref: ['tel:+251954676767', 'tel:+251905065060'],
  whatsapp: 'https://wa.me/251954676767', // main WhatsApp (floating button)
  whatsapps: [
    { label: '+251 954 676 767', href: 'https://wa.me/251954676767' },
    { label: '+971 585 114 522', href: 'https://wa.me/971585114522' },
  ],
  email: '', // TODO: add the public email address
  address: [
    'Cameroon St, Bole Sub-City, Woreda 03',
    'Bole Medhanialem Church Area',
    'Morning Star Mall, 4th Floor, Office #426',
    'Addis Ababa, Ethiopia',
  ],
  mapQuery: 'Morning Star Mall, Cameroon St, Bole Medhanialem, Addis Ababa, Ethiopia',
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
  body: 'From brand identity and creative campaigns to premium printing, outdoor advertising, 3D corporate flags, premium corporate gifts, sustainable promotional products, and event branding, we provide integrated solutions tailored to the needs of businesses, government institutions, NGOs, development organizations, and corporate clients.',
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
  // optional extra blocks shown on the service page (title + numbered columns)
  details?: { eyebrow: string; title: string; rows: { t: string; d: string }[] }[];
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
    image: '/images/work/publications.jpg', imagePos: '50% 55%',
  },
  {
    slug: 'signage-displays-outdoor-advertising', n: '04', title: 'Signage, Displays & Outdoor Advertising', short: 'Signage & Outdoor', tag: 'Signage',
    tagline: 'Make your brand impossible to miss.',
    intro: ['We create physical brand experiences that give organizations a strong and visible presence across offices, commercial spaces, public environments, and outdoor locations.'],
    items: ['Outdoor advertising', 'Billboard solutions', 'LED display screens', 'Digital signage', '3D letters & logos', 'Illuminated signage', 'Building signage', 'Reception & office branding', 'Wayfinding systems', 'Directional signage', 'Indoor displays', 'Outdoor displays', '3D corporate flags', 'Indoor & outdoor flag systems', 'Event backdrops', 'Exhibition displays', 'Display stands', 'Signage structures & installation'],
    outro: 'From a single sign to a complete branded environment, we deliver visibility with purpose.',
    closer: 'Elevate your business by making your brand visible.',
    image: '/images/work/ethio-djibouti-railway-signage.jpg', imagePos: '50% 50%',
  },
  {
    slug: 'promotional-products-premium-corporate-gifts', n: '05', title: 'Promotional Products & Premium Corporate Gifts', short: 'Premium Corporate Gifts', tag: 'Promotional',
    tagline: 'Put your brand in people’s hands.',
    intro: ['Promotional products turn everyday interactions into opportunities for brand recognition and engagement.', 'We source, customize, brand, package, and deliver promotional products for corporate campaigns, employee engagement, events, conferences, client appreciation, and institutional programs.'],
    items: ['Premium corporate gifts', 'Executive gifts', 'Promotional merchandise', 'Branded notebooks', 'Pens & writing instruments', 'Bags & backpacks', 'Bottles & drinkware', 'Umbrellas', 'Caps & apparel', 'Keyholders', 'Desk accessories', 'Technology accessories', 'Conference materials', 'Employee gifts', 'Client appreciation gifts', 'Custom promotional products', 'Premium gift sets', 'Institutional and campaign merchandise'],
    outro: 'Thoughtfully selected. Professionally branded. Memorable by design.',
    closer: 'Thoughtfully selected. Professionally branded.',
    image: '/images/work/cbe-executive-gift-set.jpg', imagePos: '50% 55%',
  },
  {
    slug: 'eco-friendly-promotional-advertising', n: '06', title: 'Eco-Friendly Promotional & Advertising Solutions', short: 'Eco-Friendly', tag: 'Eco',
    tagline: 'Sustainable ideas. Responsible impact.',
    intro: ['We help organizations communicate their brands through more environmentally conscious promotional and advertising solutions.', 'From sustainable premium corporate gifts to reusable promotional products and environmentally conscious event materials, we help clients make responsible choices while maintaining quality and brand impact.'],
    items: ['Bamboo promotional products', 'Wooden promotional products', 'Cork products', 'Recycled-material products', 'Recycled paper products', 'Sustainable notebooks', 'Eco-friendly pens', 'Reusable shopping bags', 'Cotton & canvas bags', 'Jute promotional bags', 'Reusable bottles & cups', 'Eco-friendly lanyards', 'Sustainable badges', 'Eco-friendly premium corporate gifts', 'Sustainable gift sets', 'Reusable event materials', 'Environmentally conscious event branding', 'Sustainable promotional campaigns'],
    outro: 'We work with clients to select materials and products that align with their sustainability objectives, campaign requirements, and budgets.',
    closer: 'Elevate your business. Make a positive impact.',
    image: '/images/work/bamboo-eco-gift-set.jpg', imagePos: '45% 55%',
  },
  {
    slug: 'events-brand-activation', n: '07', title: 'Events & Brand Activation', short: 'Events & Activation', tag: 'Events',
    tagline: 'Turn events into brand experiences.',
    intro: ['We create branded environments that help organizations engage audiences, communicate messages, and create memorable experiences.'],
    items: ['Event branding', 'Conference branding', 'Exhibition branding', 'Corporate events', 'Product launches', 'Promotional activations', 'Event backdrops', 'Stage branding', 'Directional signage', 'Registration areas', 'Exhibition booths', 'Promotional displays', '3D corporate flags', 'Banners & displays', 'Adey Abeba & red carpets', 'Corporate merchandise', 'Conference materials', 'Event printing', 'On-site branding & installation'],
    outro: 'From concept and design to production and installation, we help create cohesive brand experiences from entrance to exit.',
    closer: 'Your event is temporary. Your brand impression can last much longer.',
    image: '/images/work/ceremonial-flag-line-up.jpg', imagePos: '50% 50%',
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
  {
    slug: 'commercial-printing-packaging', n: '09', title: 'Commercial Printing & Packaging', short: 'Labels & Packaging', tag: 'Packaging',
    tagline: 'High-volume roll-type label and sticker printing for automated packaging lines.',
    intro: ['LARO Advertising PLC provides premium roll-fed custom label printing designed for automated application equipment, high-speed bottling lines, and manual high-volume packaging.', 'Engineered for durability, precise die-cutting, and sharp visual appeal, our roll-type labels ensure your brand stands out on retail shelves and holds up under demanding operational conditions.'],
    items: ['Roll-type label printing', 'High-volume sticker printing', 'Waterproof polypropylene (BOPP) labels', 'Paper labels', 'Clear & transparent film labels', 'Metallic foil labels', 'Direct thermal labels', 'Permanent & removable adhesives', 'High-tack adhesives', 'Cold-temperature & freezer-grade adhesives', 'Gloss laminate & matte finishes', 'UV spot varnish', 'Hot foil stamping', 'Custom core sizes (1", 1.5", 3")', 'Custom unwind directions', 'Food & beverage labels', 'Cosmetics & personal care labels', 'Pharmaceutical & chemical labels', 'Shipping & barcode labels', 'Promotional price stickers'],
    outro: 'Precision industrial and commercial labeling solutions, from material and adhesive selection to finishing and rewinding for your labeling machinery.',
    closer: 'Labels that stand out on the shelf and hold up on the line.',
    image: '/images/work/roll-labels.jpg', imagePos: '50% 50%',
    details: [
      { eyebrow: 'Specifications', title: 'Key Features & Material Options', rows: [
        { t: 'Material Versatility', d: 'Waterproof polypropylene (BOPP), paper, clear/transparent film, metallic foil, and direct thermal options.' },
        { t: 'Adhesive Strengths', d: 'Permanent, removable, high-tack, and cold-temperature/freezer-grade adhesives.' },
        { t: 'Finishing Options', d: 'Gloss laminate, matte finish, UV varnish spotting, and hot foil stamping.' },
        { t: 'Core & Rewind Compatibility', d: 'Custom core sizes (1", 1.5", 3") and custom unwind directions, engineered to fit your automatic labeling machinery.' },
      ] },
      { eyebrow: 'Industries', title: 'Target Applications', rows: [
        { t: 'Food & Beverage', d: 'Bottled drinks, sauces, jars, frozen foods, and bakery packaging.' },
        { t: 'Cosmetics & Personal Care', d: 'Lotion bottles, creams, oils, and luxury cosmetics.' },
        { t: 'Pharmaceuticals & Chemicals', d: 'Medicine bottles, sanitizers, household detergents, and industrial containers.' },
        { t: 'Logistics & Retail', d: 'Shipping labels, barcode tracking rolls, and promotional price stickers.' },
      ] },
    ],
  },
];

// Client testimonials (approved quotes). `logo` points at public/images/clients when we have one.
export type Testimonial = { quote: string[]; name: string; role: string; org: string; logo?: string };
export const testimonials: Testimonial[] = [
  { quote: ['LARO Advertising PLC has been a valuable partner in supporting our brand strategy and communication initiatives. Their professionalism, creative approach, and commitment to brand consistency have contributed to the development of communication materials aligned with our institutional identity. We appreciate their collaborative approach and dedication to delivering quality work.'],
    name: 'Mr. Demissew Benti', role: 'Communication Director', org: 'Ethiopian Shipping and Logistics (ESL)', logo: '/images/clients/esl.png' },
  { quote: ['LARO Advertising PLC has provided the Ethiopian Statistical Service with printing services and various signage solutions, demonstrating professionalism, responsiveness, and a commitment to quality. We appreciate their understanding of our institutional communication needs and their dedication to delivering materials aligned with our organizational identity and standards.'],
    name: 'Mr. Safi Gemedi', role: 'Head of Public Relations and Communications Director', org: 'Ethiopian Statistical Service (ESS)', logo: '/images/clients/ethiopian-statistical-service.png' },
  { quote: ['My experience working with LARO Advertising PLC during my time at Immigration and Citizenship Services gave me an appreciation for the importance of strategic branding and effective institutional communication. Their team demonstrated a thoughtful approach to understanding organizational needs and translating brand direction into meaningful communication strategies and materials.', 'I appreciated their collaborative working style, commitment to the assignment, and understanding of how a strong institutional identity can support public communication and stakeholder engagement. It was a valuable professional experience, and I recognize the role that strategic branding and consistent communication play in strengthening an institution’s image and public presence.'],
    name: 'Ato Fraol Tafa', role: 'State Minister of Logistics', org: 'Formerly at Immigration and Citizenship Services' },
  { quote: ['We have known LARO Advertising PLC for more than a decade and have consistently appreciated their professionalism, integrity, and dedication to delivering quality work. Throughout our longstanding relationship, LARO has provided printing and signage services for the properties we manage and other projects, demonstrating a strong commitment to quality, reliability, and client satisfaction.', 'Their good faith, attention to detail, and dedication to meeting our requirements have made them a trusted partner over the years. We value our relationship with LARO Advertising PLC and confidently recommend their services to organizations seeking a dependable and professional advertising and printing partner.'],
    name: 'Mr. Nega Asfeha', role: 'Chief Executive Officer', org: 'Baladera Property Management and Investment Consultant' },
];

export const integrated = {
  title: 'One Brief. One Partner. One Brand Experience.',
  lead: 'Many projects require several capabilities working together. That’s where LARO makes the difference.',
  chain: ['Strategy', 'Design', 'Production', 'Printing', 'Promotional Products', 'Signage', 'Installation', 'Delivery'],
  body: 'Instead of managing multiple suppliers, clients can work with one coordinated partner responsible for bringing the entire solution together.',
  examples: [
    { title: 'Corporate Rebranding', parts: ['Brand Strategy', 'Identity', 'Guidelines', 'Stationery', 'Signage', 'Promotional Products'], image: '/images/stationery.jpg' },
    { title: 'Government & Institutional Communication', parts: ['Publications', 'Reports', 'Printing', 'Signage', 'Corporate Materials', 'Events'], image: '/images/work/publications.jpg' },
    { title: 'Corporate Event', parts: ['Event Concept', 'Branding', 'Backdrops', '3D Corporate Flags', 'Displays', 'Promotional Products', 'Installation'], image: '/images/work/ceremonial-flag-line-up.jpg' },
    { title: 'Sustainable Campaign', parts: ['Campaign Design', 'Eco-Friendly Promotional Products', 'Sustainable Printing', 'Event Branding'], image: '/images/work/bamboo-eco-gift-set.jpg' },
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

// Leadership: source "LARO_Leadership.docx". Add `photo: '/images/team/<file>.jpg'` when portraits are ready.
// `short` shows under the portrait; the full `bio` pops up over the portrait on hover / tap.
export type Leader = { name: string; role: string; short: string; bio: string; initials: string; photo?: string };
export const leadership: { group: string; people: Leader[] }[] = [
  {
    group: 'Executive Leadership',
    people: [
      { name: 'Lealem Abera', role: 'CEO', initials: 'LA', short: 'Founder and CEO setting LARO’s strategic vision and growth, with 15+ years in advertising and branding.', bio: 'Founder and CEO with 15+ years of experience in advertising, marketing communications, branding, and business development. He holds a BA in Marketing Management and leads LARO’s strategic vision, business growth, and long-term direction.', photo: '/images/team/lealem-abera.jpg' },
      { name: 'Edlawit Sintayehu', role: 'COO', initials: 'ES', short: 'Leads operations and organizational execution, with 7+ years in client relations and business development.', bio: 'Leads business operations and organizational execution, with 7+ years of experience driving client relationships, business development, and operational excellence. She holds a BA in Management and an MA in Business Leadership, supporting her role in organizational leadership and operational strategy.', photo: '/images/team/edlawit-sintayehu.jpg' },
      { name: 'Abenezer Wendemagegn', role: 'CFO', initials: 'AW', short: 'Certified Accountant overseeing financial strategy, planning, controls and reporting.', bio: 'Oversees financial strategy, planning, financial controls, and reporting, ensuring strong financial discipline and sustainable business growth. He holds a BA in Accounting and is a Certified Accountant, bringing professional expertise in financial management and accounting.', photo: '/images/team/abenezer-wendemagegn.jpg' },
      { name: 'Biniam Ayalew', role: 'Chief Creative Director', initials: 'BA', short: 'Leads LARO’s creative vision, with 15+ years in creative and graphic design.', bio: 'Leads LARO’s creative vision, transforming strategic ideas into impactful brand identities, campaigns, visual experiences, and creative solutions. He holds a BSc in Management Information Systems and brings 15+ years of professional experience in creative design and graphic design.', photo: '/images/team/biniam-ayalew.jpg' },
    ],
  },
  {
    group: 'Business & Growth',
    people: [
      { name: 'Biruk Wondimu', role: 'Business Development Manager', initials: 'BW', short: 'Builds strategic partnerships and drives revenue growth, with 15+ years in business development.', bio: 'Business development professional with 15+ years of experience building strategic partnerships, developing new opportunities, and driving sustainable revenue growth. He holds an MA in Business Administration and a BA in Economics, combining business strategy and economic insight to support LARO’s growth.', photo: '/images/team/biruk-wondimu.jpg' },
      { name: 'Yeabsira Abera', role: 'Marketing Manager', initials: 'YA', short: 'Leads marketing strategy, brand communication and market engagement.', bio: 'Leads marketing strategy, brand communication, and market engagement, helping connect LARO’s capabilities with the right audiences and opportunities. He holds a BSc in Christian Leadership and a BSc in Information Systems, combining leadership capabilities with technology and information systems knowledge.', photo: '/images/team/yeabsira-abera.jpg' },
      { name: 'Edlawit Aklilu', role: 'Marketing Officer', initials: 'EA', short: 'Supports digital marketing, content and social media across LARO’s platforms.', bio: 'Supports digital marketing, content development, social media engagement, and day-to-day brand communication across LARO’s platforms.', photo: '/images/team/edlawit-aklilu.jpg' },
    ],
  },
  {
    group: 'Operations & Execution',
    people: [
      { name: 'Amanuel Fekadu', role: 'Executive Supervisor', initials: 'AF', short: 'Coordinates operations and project execution for efficient, on-time delivery.', bio: 'Coordinates operational activities and project execution, ensuring teams, resources, timelines, and client requirements are aligned for efficient delivery.', photo: '/images/team/amanuel-fekadu.jpg' },
      { name: 'Nahom Bekele', role: 'Architectural Design & Projects Manager', initials: 'NB', short: 'Leads architectural design, 3D visualization and fabrication for branded environments, with 10+ years of experience.', bio: 'Nahom holds a BSc from Addis Ababa University in Architecture and Urban Development, with 10+ years of industry experience. He leads architectural design, 3D visualization, technical development, fabrication coordination, and project execution, delivering innovative branded environments and commercial spaces.', photo: '/images/team/nahom-bekele.jpg' },
      { name: 'Kenean Anteneh', role: 'Executive Team', initials: 'KA', short: 'Supports project execution, logistics, installations and day-to-day operations.', bio: 'Supports project execution, logistics, installations, production coordination, and day-to-day operations to ensure every assignment is delivered efficiently and professionally.', photo: '/images/team/kenean-anteneh.jpg' },
      { name: 'Fasika Fikadu', role: 'Executive Team', initials: 'FF', short: 'Supports project execution, logistics, installations and day-to-day operations.', bio: 'Supports project execution, logistics, installations, production coordination, and day-to-day operations to ensure every assignment is delivered efficiently and professionally.', photo: '/images/team/fasika-fikadu.jpg' },
      { name: 'Samuel Fekadu', role: 'Executive Team', initials: 'SF', short: 'Supports project execution, logistics, installations and day-to-day operations.', bio: 'Supports project execution, logistics, installations, production coordination, and day-to-day operations to ensure every assignment is delivered efficiently and professionally.', photo: '/images/team/samuel-fekadu.jpg' },
    ],
  },
];

// Client logos: white artwork on transparent background in /public/images/clients
export const clients: { name: string; logo: string }[] = [
  { name: 'Ethiopian Airlines', logo: '/images/clients/ethiopian-airlines.png' },
  { name: 'Ministry of Justice', logo: '/images/clients/ministry-of-justice.png' },
  { name: 'Ministry of Agriculture', logo: '/images/clients/ministry-of-agriculture.png' },
  { name: 'Ministry of Planning and Development', logo: '/images/clients/ministry-of-planning-and-development.png' },
  { name: 'Ministry of Irrigation and Lowlands', logo: '/images/clients/ministry-of-irrigation-and-lowlands.png' },
  { name: 'Ethiopian Shipping & Logistics (ESL)', logo: '/images/clients/esl.png' },
  { name: 'Ethiopian Statistical Service', logo: '/images/clients/ethiopian-statistical-service.png' },
  { name: 'Federal Supreme Court', logo: '/images/clients/federal-supreme-court.png' },
  { name: 'Information Network Security Administration', logo: '/images/clients/insa.png' },
  { name: 'MESOB', logo: '/images/clients/mesob.png' },
  { name: 'Financial Intelligence Service', logo: '/images/clients/financial-intelligence-service.png' },
  { name: 'Addis Ababa Tourism Commission', logo: '/images/clients/addis-ababa-tourism-commission.png' },
  { name: 'Ethiopian Red Cross Society', logo: '/images/clients/ethiopian-red-cross-society.png' },
  { name: 'Save the Children', logo: '/images/clients/save-the-children.png' },
  { name: 'World Resources Institute', logo: '/images/clients/world-resources-institute.png' },
  { name: 'African Development Bank Group', logo: '/images/clients/african-development-bank-group.png' },
];

// Credentials gallery: certificates and recognitions from the organizations we work with.
// Add a scan to public/images/credentials/ and a line here to show more.
export type Credential = { t: string; org: string; year: string; kind: 'Certificate' | 'Recognition'; image?: string; landscape?: boolean };
export const credentials: Credential[] = [
  { t: 'Certificate of Appreciation', org: 'Ethiopian Shipping & Logistics (ESL)', year: 'February 2023', kind: 'Recognition', image: '/images/credentials/esl-certificate-of-appreciation.jpg', landscape: true },
  { t: 'Certificate of Good Performance', org: 'Ethiopian Statistical Service (ESS)', year: 'October 2026', kind: 'Certificate', image: '/images/credentials/ess-certificate-of-good-performance.jpg' },
];

export const brochure = {
  file: '/docs/LARO-Company-Overview.pdf',
  title: 'Company Profile',
  pages: 20,
  size: '11.5 MB',
  preview: ['/images/brochure/page-1.jpg', '/images/brochure/page-3.jpg', '/images/brochure/page-5.jpg'],
  points: ['Company overview, mission, vision and core values', 'Our services and capabilities', 'Our approach, quality and compliance', 'Legal information and contact details'],
}

export type WorkItem = { title: string; client?: string; cat: string; image: string; video?: string; pos?: string; size?: 'tall' | 'wide' | 'std'; tags?: string[] };
// Portfolio: real LARO projects (photos and short clips from the digital contents folder).
export const work: WorkItem[] = [
  { title: 'Executive gift set', client: 'Commercial Bank of Ethiopia', cat: 'Promotional', image: '/images/work/cbe-executive-gift-set.jpg', pos: '50% 55%', size: 'tall', tags: ['Promotional', 'Branding'] },
  { title: 'Reception signage & 3D corporate flags', client: 'Ethio-Djibouti Railway', cat: 'Signage', image: '/images/work/ethio-djibouti-railway-signage.jpg', pos: '50% 50%', tags: ['Signage', 'Flags'] },
  { title: 'Bamboo eco gift set', cat: 'Eco', image: '/images/work/bamboo-eco-gift-set.jpg', pos: '45% 55%', tags: ['Eco', 'Promotional'] },
  { title: '3D corporate flags', client: 'MESOB', cat: 'Flags', image: '/images/work/mesob-flags.jpg', pos: '50% 40%', size: 'tall', tags: ['Flags', 'Signage'] },
  { title: 'Adey Abeba carpet', cat: 'Events', image: '/videos/adey-abeba-carpet.jpg', video: '/videos/adey-abeba-carpet.mp4', pos: '50% 50%', tags: ['Events', 'Sourcing'] },
  { title: 'Illuminated 3D logo wall', client: 'Ministry of Agriculture', cat: 'Signage', image: '/images/work/ministry-of-agriculture-signage.jpg', pos: '50% 35%', tags: ['Signage', 'Flags'] },
  { title: 'Roll-type product labels', cat: 'Packaging', image: '/images/work/roll-labels.jpg', pos: '50% 50%', tags: ['Packaging', 'Printing'] },
  { title: 'Ceremonial flag line-up', cat: 'Events', image: '/images/work/ceremonial-flag-line-up.jpg', pos: '50% 50%', tags: ['Events', 'Flags'] },
  { title: 'Country reports & publications', cat: 'Printing', image: '/images/work/publications.jpg', pos: '50% 55%', tags: ['Printing', 'Creative'] },
  { title: 'Signage & 3D corporate flags', client: 'Ministry of Planning & Development', cat: 'Signage', image: '/images/work/planning-development-signage.jpg', pos: '50% 45%', tags: ['Signage', 'Flags'] },
  { title: 'Gala dinner invitation suite', cat: 'Printing', image: '/images/work/gala-dinner-invitation.jpg', pos: '50% 50%', tags: ['Printing', 'Creative'] },
  { title: 'Executive tech gift set', cat: 'Promotional', image: '/images/work/executive-tech-gift-set.jpg', pos: '50% 50%', tags: ['Promotional'] },
  { title: 'Office 3D corporate flags', client: 'Commercial Bank of Ethiopia', cat: 'Flags', image: '/images/work/cbe-office-flags.jpg', pos: '50% 40%', size: 'tall', tags: ['Flags'] },
  { title: 'Branded event polo shirts', cat: 'Promotional', image: '/images/work/event-polo-shirts.jpg', pos: '50% 50%', tags: ['Promotional', 'Events'] },
  { title: 'Flag installation', cat: 'Flags', image: '/videos/flag-installation.jpg', video: '/videos/flag-installation.mp4', pos: '50% 50%', size: 'tall', tags: ['Flags', 'Events'] },
  { title: '3D corporate flags', client: 'Ministry of Irrigation & Lowlands', cat: 'Flags', image: '/images/work/irrigation-lowlands-flags.jpg', pos: '50% 40%', tags: ['Flags'] },
  { title: 'Corporate notebook gift set', cat: 'Promotional', image: '/images/work/corporate-notebook-gift-set.jpg', pos: '50% 45%', tags: ['Promotional'] },
  { title: 'Adey Abeba carpet production', cat: 'Events', image: '/images/work/adey-abeba-carpet-production.jpg', pos: '50% 50%', tags: ['Events', 'Sourcing'] },
  { title: 'Crystal awards', cat: 'Promotional', image: '/images/work/crystal-award.jpg', pos: '50% 50%', tags: ['Promotional', 'Events'] },
  { title: 'Invitation printing & finishing', cat: 'Printing', image: '/videos/invitation-printing.jpg', video: '/videos/invitation-printing.mp4', pos: '50% 40%', tags: ['Printing', 'Creative'] },
  { title: 'Cork-base mug & bottle set', cat: 'Eco', image: '/images/work/cork-mug-bottle-set.jpg', pos: '50% 55%', tags: ['Eco', 'Promotional'] },
  { title: 'Institutional flag set', cat: 'Flags', image: '/images/work/institutional-flag-set.jpg', pos: '50% 50%', tags: ['Flags'] },
  { title: 'Executive gift box', client: 'Commercial Bank of Ethiopia', cat: 'Promotional', image: '/images/work/cbe-gift-box.jpg', pos: '50% 50%', tags: ['Promotional', 'Branding'] },
  { title: 'Label printing for FMCG brands', cat: 'Packaging', image: '/images/work/roll-labels-range.jpg', pos: '50% 50%', tags: ['Packaging', 'Printing'] },
];
export const workCats = ['All', 'Flags', 'Signage', 'Promotional', 'Eco', 'Printing', 'Packaging', 'Events'];

export const closing = {
  title: 'Elevate Your Business With LARO',
  lines: ['Your brand has a story.', 'Your audience has expectations.', 'Your business has ambitions.'],
  body: 'We bring the strategy, creativity, materials, production, and execution together to help you communicate with confidence and create a stronger presence.',
};

export const commitment = 'LARO Advertising PLC is dedicated to transforming ideas into strong brands by delivering exceptional products and services that create lasting impressions and long-term value for our clients.';

export const heroSlides = [
  { image: '/images/hero.jpg', caption: '3D corporate flags', pos: '72% 50%' },
  { image: '/images/work/ethio-djibouti-railway-signage.jpg', caption: 'Signage & 3D corporate flags', pos: '50% 50%' },
  { image: '/images/work/cbe-executive-gift-set.jpg', caption: 'Premium corporate gifts', pos: '50% 55%' },
  { image: '/images/work/ceremonial-flag-line-up.jpg', caption: 'Event flags & installation', pos: '50% 50%' },
]

export const navImages: Record<string, string> = {
  '/': '/images/hero.jpg',
  '/work': '/images/gifts.jpg',
  '/services': '/images/signage.jpg',
  '/solutions': '/images/events.jpg',
  '/about': '/images/stationery.jpg',
  '/clients': '/images/flags.jpg',
  '/contact': '/images/print.jpg',
};

export const tickerWords = ['Brand Strategy', 'Corporate Identity', 'Creative Campaigns', 'Printing & Publishing', 'Signage & Outdoor', '3D Corporate Flags', 'Premium Corporate Gifts', 'Eco-Friendly Products', 'Events & Activation', 'Sourcing & Installation', 'Labels & Packaging'];

export const logoLetters = [
  { c: 'g', d: 'M61,1 L9,19 L0,210 L106,210 L160,161 L142,110 L54,184 L52,183 Z' },
  { c: 'g', d: 'M190,0 L223,100 L224,11 L282,61 L228,118 L246,163 L291,210 L359,210 L286,136 L292,127 L355,60 L292,0 Z' },
  { c: 'w', d: 'M319,0 L319,11 L369,59 L404,68 L411,151 L410,154 L365,155 L363,153 L363,68 L320,114 L320,159 L372,210 L463,210 L441,20 Z' },
  { c: 'w', d: 'M74,0 L66,157 L123,108 L126,14 L190,209 L245,209 L177,1 Z' },
];
