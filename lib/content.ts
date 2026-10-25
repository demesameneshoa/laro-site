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
    slug: "advertising-marketing-communications", n: "01", title: "Advertising & Marketing Communications", short: "Advertising & Marketing", tag: "Advertising",
    tagline: "Communication that builds visibility, trust and engagement.",
    intro: ["Effective communication builds visibility, trust and engagement. We help organizations communicate their products, services, programs and identity with clarity and creativity."],
    items: ["Campaign development", "Digital & social media marketing", "Promotional & direct marketing", "Public awareness campaigns", "Print-media advertising", "Advertising design", "Social media content", "Outdoor & billboard advertising", "LED display screens & digital signage", "Photography & video content", "Infographics & presentations"],
    outro: "Creative thinking with a clear purpose: to make your message seen, understood, and remembered.",
    closer: "Make your message seen, understood, and remembered.",
    image: "/images/work/team-meeting.jpg", imagePos: "50% 40%",
  },
  {
    slug: "branding-corporate-identity", n: "02", title: "Branding & Corporate Identity", short: "Branding & Identity", tag: "Branding",
    tagline: "Build a brand people recognize, trust, and remember.",
    intro: ["A strong brand creates recognition, trust and consistency. We build visual identities that look professional and stay consistent across every communication and physical space."],
    items: ["Logo & identity design", "Brand guidelines", "Corporate stationery", "Office & reception branding", "Signage & wayfinding", "Vehicle & event branding", "Brand strategy & positioning", "Corporate identity systems", "Brand refresh & rebranding", "3D letters & logos", "Illuminated signage", "Building signage", "Presentation templates"],
    outro: "We create the foundation that helps your business stand out and move forward, on paper, on screen and on the walls of your offices.",
    closer: "Elevate your business through a stronger brand.",
    image: "/images/work/ethio-djibouti-railway-signage.jpg", imagePos: "50% 50%",
  },
  {
    slug: "creative-design-commercial-printing", n: "03", title: "Creative Design & Commercial Printing", short: "Design & Printing", tag: "Printing",
    tagline: "From ideas on screen to quality in hand.",
    intro: ["Our creative and production teams work together so every printed piece communicates your identity and meets professional finishing standards."],
    items: ["Company profiles", "Annual reports", "Books & magazines", "Brochures & catalogues", "Calendars", "Business cards", "Letterheads", "Certificates", "Labels & packaging", "Roll-type labels & stickers", "Invitations & event stationery", "Graphic design", "Large-format printing", "Finishing, binding & packaging"],
    outro: "We coordinate the complete production process, from artwork preparation and material selection to printing, finishing, quality control, and delivery.",
    closer: "Your message deserves to be produced at the right standard.",
    image: "/images/work/publications.jpg", imagePos: "50% 55%",
    details: [
      { eyebrow: 'Labels & packaging', title: 'Roll-Type Label Printing: Features & Materials', rows: [
        { t: 'Material Versatility', d: 'Waterproof polypropylene (BOPP), paper, clear/transparent film, metallic foil, and direct thermal options.' },
        { t: 'Adhesive Strengths', d: 'Permanent, removable, high-tack, and cold-temperature/freezer-grade adhesives.' },
        { t: 'Finishing Options', d: 'Gloss laminate, matte finish, UV varnish spotting, and hot foil stamping.' },
        { t: 'Core & Rewind Compatibility', d: 'Custom core sizes (1", 1.5", 3") and custom unwind directions, engineered to fit your automatic labeling machinery.' },
      ] },
      { eyebrow: 'Labels & packaging', title: 'Label Applications by Industry', rows: [
        { t: 'Food & Beverage', d: 'Bottled drinks, sauces, jars, frozen foods, and bakery packaging.' },
        { t: 'Cosmetics & Personal Care', d: 'Lotion bottles, creams, oils, and luxury cosmetics.' },
        { t: 'Pharmaceuticals & Chemicals', d: 'Medicine bottles, sanitizers, household detergents, and industrial containers.' },
        { t: 'Logistics & Retail', d: 'Shipping labels, barcode tracking rolls, and promotional price stickers.' },
      ] },
    ],
  },
  {
    slug: "corporate-flags-institutional-supplies", n: "04", title: "Corporate Flags & Institutional Supplies", short: "3D Corporate Flags", tag: "Flags",
    tagline: "An elegant, distinctive presence for every office.",
    intro: ["Premium 3D office flags bring an elegant, distinctive presence to executive offices, boardrooms, reception areas and government offices."],
    items: ["Premium 3D office flags", "Dual table flags", "Ethiopian national flags", "Corporate & institutional flags", "Indoor & outdoor flags", "Stands & accessories", "Boardroom & reception flag sets", "Event & summit flag line-ups", "Delivery & installation"],
    outro: "From a single executive office to a full ceremonial line-up, we produce, deliver and install flags that represent your institution with dignity.",
    closer: "Represent your institution with dignity.",
    image: "/images/work/lobby-flag-line-up.jpg", imagePos: "50% 50%",
  },
  {
    slug: "corporate-gifts-promotional-products", n: "05", title: "Corporate Gifts & Promotional Products", short: "Corporate Gifts", tag: "Gifts",
    tagline: "Put your brand in people’s hands.",
    intro: ["Customized products that strengthen relationships and keep your brand visible, for staff, clients, events and stakeholders, with eco-friendly options."],
    items: ["Notebooks", "Branded & bamboo pens", "Bottles & mugs", "USB drives", "Power banks", "Umbrellas", "Caps, T-shirts & jackets", "Tote & recycled paper bags", "Premium corporate gifts", "Polo shirts & uniforms", "Crystal awards", "Keyholders & desk accessories", "Eco-friendly promotional items", "Conference materials"],
    outro: "Thoughtfully selected. Professionally branded. Memorable by design.",
    closer: "Thoughtfully selected. Professionally branded.",
    image: "/images/work/rc76-polo-shirt.jpg", imagePos: "50% 50%",
  },
  {
    slug: "corporate-gift-boxes", n: "06", title: "Corporate Gift Boxes", short: "Gift Boxes", tag: "Gift Boxes",
    tagline: "Gift packages designed around your brand and the occasion.",
    intro: ["Gift packages designed around your brand identity, the occasion, the recipient, your budget and corporate requirements."],
    items: ["Premium executive products", "Practical everyday items", "Eco-friendly promotional items", "Branded packaging", "Executive notebook & pen sets", "Tech gift sets", "Bamboo eco gift sets", "Custom presentation boxes & inserts"],
    outro: "Every box is planned around the recipient, the occasion, your budget and your corporate requirements, then branded, packed and delivered.",
    closer: "A gift that carries your brand with distinction.",
    image: "/images/work/cbe-executive-gift-set.jpg", imagePos: "50% 55%",
  },
  {
    slug: "event-promotional-solutions", n: "07", title: "Event & Promotional Solutions", short: "Events & Promotion", tag: "Events",
    tagline: "Turn events into brand experiences.",
    intro: ["Integrated event branding and production for conferences, exhibitions, launches, ceremonies and institutional programs: professional, welcoming and on-brand."],
    items: ["Stage branding & backdrops", "Roll-up banners", "Exhibition displays & booths", "Directional signage", "VIP & protocol branding", "Installation & dismantling", "Conference branding", "Product launches", "Promotional activations", "Event printing", "Registration areas", "Event flags & carpets"],
    outro: "From concept and design to production and installation, we help create cohesive brand experiences from entrance to exit.",
    closer: "Your event is temporary. Your brand impression can last much longer.",
    image: "/images/work/ceremonial-flag-line-up.jpg", imagePos: "50% 50%",
  },
  {
    slug: "ict-supply-technical-materials", n: "08", title: "ICT Supply & Technical Materials", short: "ICT Supply", tag: "ICT",
    tagline: "Technology and technical materials for institutional needs.",
    intro: ["Computers, ICT equipment and technical materials that complement our core operations and meet broader institutional supply needs."],
    items: ["Computers & accessories", "ICT equipment & materials", "Office technology products", "Technical supplies", "Sourcing & procurement support", "Delivery & installation"],
    outro: "One coordinated supplier for technology alongside your branding, printing and promotional requirements.",
    closer: "One partner for more of what your institution needs.",
    image: "/images/services/ict-supply.jpg", imagePos: "50% 50%",
  },
  {
    slug: "additional-support-services", n: "09", title: "Additional Support Services", short: "Support Services", tag: "Support",
    tagline: "Clean, professional and functional working environments.",
    intro: ["Complementary support services that keep working environments clean, professional and functional."],
    items: ["Gardening", "Cleaning", "Facility support"],
    outro: "Practical services that keep your offices welcoming every day, coordinated by the same team that brands them.",
    closer: "Spaces that reflect the standard of your brand.",
    image: "/images/services/support-services.jpg", imagePos: "50% 50%",
  },
  {
    slug: "adey-abeba-carpet", n: "10", title: "Adey Abeba Carpet", short: "Adey Abeba Carpet", tag: "Carpets",
    tagline: "Custom carpets in your colours, logo and dimensions.",
    intro: ["Customized carpets made to your dimensions, identity, logo and branding, elevating offices, reception areas, events and institutional spaces."],
    items: ["Offices", "Reception areas", "Events", "Institutional spaces", "Custom dimensions", "Logo & brand integration", "Adey Abeba flower designs", "Ceremonial & red-carpet runners", "Production & installation"],
    outro: "Designed to your space and identity, produced to size and laid ready for your guests.",
    closer: "Welcome every guest on your brand.",
    image: "/images/work/adey-abeba-carpet-hallway.jpg", imagePos: "50% 70%",
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
};

export type WorkItem = { title: string; client?: string; cat: string; image: string; video?: string; pos?: string; size?: 'tall' | 'wide' | 'std'; tags?: string[] };
// Portfolio: real LARO projects (photos and short clips). Each item is filed under a service via `cat` / `tags` (the service `tag`).
// Similar items are kept on purpose: each was produced for a different client.
export const work: WorkItem[] = [
  { title: "Executive gift set", client: "Commercial Bank of Ethiopia", cat: "Gift Boxes", image: '/images/work/cbe-executive-gift-set.jpg', pos: "50% 55%", size: 'tall', tags: ["Gift Boxes", "Gifts"] },
  { title: "Reception signage & 3D corporate flags", client: "Ethio-Djibouti Railway", cat: "Branding", image: '/images/work/ethio-djibouti-railway-signage.jpg', pos: "50% 50%", tags: ["Branding", "Flags"] },
  { title: "Premium 3D office flags", client: "MESOB", cat: "Flags", image: '/images/work/mesob-flags.jpg', pos: "50% 40%", size: 'tall', tags: ["Flags"] },
  { title: "Adey Abeba carpet for a ceremonial hall", cat: "Carpets", image: '/images/work/adey-abeba-carpet-hallway.jpg', pos: "50% 65%", size: 'tall', tags: ["Carpets", "Events"] },
  { title: "Roll-type product labels", cat: "Printing", image: '/images/work/roll-labels.jpg', pos: "50% 50%", tags: ["Printing"] },
  { title: "Ceremonial flag line-up", cat: "Events", image: '/images/work/ceremonial-flag-line-up.jpg', pos: "50% 50%", tags: ["Events", "Flags"] },
  { title: "Branded event polo shirts", cat: "Gifts", image: '/images/work/rc76-polo-shirt.jpg', pos: "50% 50%", tags: ["Gifts", "Events"] },
  { title: "Illuminated 3D logo wall", client: "Ministry of Agriculture", cat: "Branding", image: '/images/work/ministry-of-agriculture-signage.jpg', pos: "50% 35%", tags: ["Branding", "Flags"] },
  { title: "Bamboo eco gift set", cat: "Gift Boxes", image: '/images/work/bamboo-eco-gift-set.jpg', pos: "45% 55%", tags: ["Gift Boxes", "Gifts"] },
  { title: "LARO and Ethiopian dual table flags", cat: "Flags", image: '/images/work/laro-ethiopia-desk-flags.jpg', pos: "50% 60%", size: 'tall', tags: ["Flags"] },
  { title: "Adey Abeba carpet production", cat: "Carpets", image: '/videos/adey-abeba-carpet.jpg', video: '/videos/adey-abeba-carpet.mp4', pos: "50% 50%", tags: ["Carpets"] },
  { title: "Premium 3D office flags", client: "Commercial Bank of Ethiopia", cat: "Flags", image: '/images/work/cbe-office-flags.jpg', pos: "50% 40%", size: 'tall', tags: ["Flags"] },
  { title: "Country reports & publications", cat: "Printing", image: '/images/work/publications.jpg', pos: "50% 55%", tags: ["Printing", "Advertising"] },
  { title: "Signage & 3D corporate flags", client: "Ministry of Planning & Development", cat: "Branding", image: '/images/work/planning-development-signage.jpg', pos: "50% 45%", tags: ["Branding", "Flags"] },
  { title: "Executive tech gift set", cat: "Gift Boxes", image: '/images/work/executive-tech-gift-set.jpg', pos: "50% 50%", tags: ["Gift Boxes"] },
  { title: "Lobby flag installation", cat: "Flags", image: '/videos/lobby-flag-installation.jpg', video: '/videos/lobby-flag-installation.mp4', pos: "50% 50%", tags: ["Flags", "Events"] },
  { title: "Premium 3D office flags", client: "Ministry of Irrigation & Lowlands", cat: "Flags", image: '/images/work/irrigation-lowlands-flags.jpg', pos: "50% 40%", tags: ["Flags"] },
  { title: "Adey Abeba carpet runner", cat: "Carpets", image: '/images/work/adey-abeba-carpet-runner.jpg', pos: "50% 50%", size: 'tall', tags: ["Carpets"] },
  { title: "Gala dinner invitation suite", cat: "Printing", image: '/images/work/gala-dinner-invitation.jpg', pos: "50% 50%", tags: ["Printing", "Events"] },
  { title: "Ethiopian national flags for the boardroom", cat: "Flags", image: '/images/work/national-flags-boardroom.jpg', pos: "50% 50%", tags: ["Flags"] },
  { title: "Executive gift box", client: "Commercial Bank of Ethiopia", cat: "Gift Boxes", image: '/images/work/cbe-gift-box.jpg', pos: "50% 50%", tags: ["Gift Boxes"] },
  { title: "Flag line-up", client: "MESOB", cat: "Flags", image: '/images/work/mesob-flags-row.jpg', pos: "50% 40%", size: 'tall', tags: ["Flags"] },
  { title: "Crystal awards", cat: "Gifts", image: '/images/work/crystal-award.jpg', pos: "50% 50%", tags: ["Gifts", "Events"] },
  { title: "Hall flag line-up", cat: "Flags", image: '/images/work/hall-flag-line-up.jpg', pos: "50% 40%", size: 'tall', tags: ["Flags", "Events"] },
  { title: "Flag installation", cat: "Flags", image: '/videos/flag-installation.jpg', video: '/videos/flag-installation.mp4', pos: "50% 50%", size: 'tall', tags: ["Flags", "Events"] },
  { title: "Reception 3D logo & flags", client: "Ethio-Djibouti Railway", cat: "Branding", image: '/images/work/ethio-djibouti-railway-wall.jpg', pos: "50% 50%", tags: ["Branding", "Flags"] },
  { title: "Corporate notebook gift set", cat: "Gift Boxes", image: '/images/work/corporate-notebook-gift-set.jpg', pos: "50% 45%", tags: ["Gift Boxes"] },
  { title: "Adey Abeba carpet detail", cat: "Carpets", image: '/images/work/adey-abeba-carpet-detail.jpg', pos: "50% 50%", tags: ["Carpets"] },
  { title: "3D corporate flag set", cat: "Flags", image: '/images/work/four-flag-set.jpg', pos: "50% 40%", size: 'tall', tags: ["Flags"] },
  { title: "Label printing for FMCG brands", cat: "Printing", image: '/images/work/roll-labels-range.jpg', pos: "50% 50%", tags: ["Printing"] },
  { title: "Cork-base mug & bottle set", cat: "Gifts", image: '/images/work/cork-mug-bottle-set.jpg', pos: "50% 55%", tags: ["Gifts"] },
  { title: "Office flags", client: "Commercial Bank of Ethiopia", cat: "Flags", image: '/images/work/cbe-flags-trio.jpg', pos: "50% 40%", tags: ["Flags"] },
  { title: "Lobby flag line-up", cat: "Flags", image: '/images/work/lobby-flag-line-up.jpg', pos: "50% 50%", tags: ["Flags", "Events"] },
  { title: "Blue executive gift box", cat: "Gift Boxes", image: '/images/work/blue-executive-gift-box.jpg', pos: "50% 45%", tags: ["Gift Boxes"] },
  { title: "Invitation printing & finishing", cat: "Printing", image: '/videos/invitation-printing.jpg', video: '/videos/invitation-printing.mp4', pos: "50% 40%", tags: ["Printing"] },
  { title: "Ethiopian national flags", cat: "Flags", image: '/images/work/national-flags-office.jpg', pos: "50% 50%", tags: ["Flags"] },
  { title: "Branded polo shirt", client: "Sunvado", cat: "Gifts", image: '/images/work/sunvado-polo-shirt.jpg', pos: "50% 50%", tags: ["Gifts"] },
  { title: "Adey Abeba carpet, ready to ship", cat: "Carpets", image: '/images/work/adey-abeba-carpet-roll.jpg', pos: "50% 50%", tags: ["Carpets"] },
  { title: "Flag line-up", client: "Ministry of Irrigation & Lowlands", cat: "Flags", image: '/images/work/irrigation-lowlands-flags-row.jpg', pos: "50% 40%", tags: ["Flags"] },
  { title: "Reception branding", client: "Ministry of Planning & Development", cat: "Branding", image: '/images/work/planning-development-reception.jpg', pos: "50% 45%", tags: ["Branding"] },
  { title: "Executive gift set, open", client: "Commercial Bank of Ethiopia", cat: "Gift Boxes", image: '/images/work/cbe-gift-set-open.jpg', pos: "50% 55%", tags: ["Gift Boxes"] },
  { title: "Flag line-up walkthrough", cat: "Flags", image: '/videos/flag-line-up-walkthrough.jpg', video: '/videos/flag-line-up-walkthrough.mp4', pos: "50% 50%", size: 'tall', tags: ["Flags", "Events"] },
  { title: "Institutional flag set", cat: "Flags", image: '/images/work/institutional-flag-set.jpg', pos: "50% 50%", tags: ["Flags"] },
  { title: "Why Ethiopia booklet", cat: "Printing", image: '/images/work/why-ethiopia-booklet.jpg', pos: "50% 70%", size: 'tall', tags: ["Printing", "Advertising"] },
  { title: "Bamboo gift box", cat: "Gift Boxes", image: '/images/work/bamboo-gift-box-open.jpg', pos: "50% 55%", tags: ["Gift Boxes"] },
  { title: "3D corporate flags", client: "MESOB", cat: "Flags", image: '/images/work/mesob-ess-flags.jpg', pos: "50% 40%", size: 'tall', tags: ["Flags"] },
  { title: "Crystal award", cat: "Gifts", image: '/images/work/crystal-award-wave.jpg', pos: "50% 50%", tags: ["Gifts"] },
  { title: "Office flag line-up", cat: "Flags", image: '/images/work/flags-line-up-office.jpg', pos: "50% 40%", tags: ["Flags"] },
  { title: "Adey Abeba carpet production floor", cat: "Carpets", image: '/images/work/adey-abeba-carpet-production.jpg', pos: "50% 50%", tags: ["Carpets"] },
  { title: "Navy executive gift box", cat: "Gift Boxes", image: '/images/work/navy-executive-gift-box.jpg', pos: "50% 45%", tags: ["Gift Boxes"] },
  { title: "Printed folder production", cat: "Printing", image: '/videos/folder-printing.jpg', video: '/videos/folder-printing.mp4', pos: "50% 50%", tags: ["Printing"] },
  { title: "Ethiopian national flags", cat: "Flags", image: '/images/work/national-flags-colour-row.jpg', pos: "50% 40%", size: 'tall', tags: ["Flags"] },
  { title: "Branded field vest", cat: "Gifts", image: '/images/work/branded-field-vest.jpg', pos: "50% 50%", tags: ["Gifts"] },
  { title: "Dual table flags", cat: "Flags", image: '/images/work/table-flags.jpg', pos: "50% 50%", tags: ["Flags"] },
  { title: "Event polo shirt", cat: "Gifts", image: '/images/work/event-polo-shirts.jpg', pos: "50% 50%", tags: ["Gifts", "Events"] },
  { title: "Institutional flags", cat: "Flags", image: '/images/work/institutional-flags-row.jpg', pos: "50% 50%", tags: ["Flags"] },
  { title: "Publication set", cat: "Printing", image: '/images/work/publications-set.jpg', pos: "50% 50%", tags: ["Printing"] },
  { title: "Executive gift set, top view", client: "Commercial Bank of Ethiopia", cat: "Gift Boxes", image: '/images/work/cbe-gift-set-top.jpg', pos: "50% 50%", tags: ["Gift Boxes"] },
  { title: "Flag close-up", client: "MESOB", cat: "Flags", image: '/images/work/mesob-flag-close.jpg', pos: "50% 40%", tags: ["Flags"] },
  { title: "Bottle & mug set", cat: "Gifts", image: '/images/work/bottle-mug-set.jpg', pos: "50% 55%", tags: ["Gifts"] },
  { title: "Institutional flag trio", cat: "Flags", image: '/images/work/institutional-flags-trio.jpg', pos: "50% 40%", tags: ["Flags"] },
  { title: "Invitation cover", cat: "Printing", image: '/images/work/invitation-cover.jpg', pos: "50% 50%", tags: ["Printing"] },
  { title: "Ethiopian national flags, detail", cat: "Flags", image: '/images/work/national-flags-close.jpg', pos: "50% 50%", tags: ["Flags"] },
  { title: "Cork-base mug", cat: "Gifts", image: '/images/work/cork-base-mug.jpg', pos: "50% 55%", tags: ["Gifts"] },
  { title: "Crystal award block", cat: "Gifts", image: '/images/work/crystal-award-block.jpg', pos: "50% 50%", tags: ["Gifts"] },
  { title: "Invitation envelope", cat: "Printing", image: '/images/work/invitation-envelope.jpg', pos: "50% 50%", tags: ["Printing"] },
];

export const closing = {
  title: 'Elevate Your Business With LARO',
  lines: ['Your brand has a story.', 'Your audience has expectations.', 'Your business has ambitions.'],
  body: 'We bring the strategy, creativity, materials, production, and execution together to help you communicate with confidence and create a stronger presence.',
};

export const commitment = 'LARO Advertising PLC is dedicated to transforming ideas into strong brands by delivering exceptional products and services that create lasting impressions and long-term value for our clients.';

export const heroSlides = [
  { image: '/images/work/laro-ethiopia-desk-flags.jpg', caption: 'LARO & Ethiopian table flags', pos: '50% 62%' },
  { image: '/images/work/adey-abeba-carpet-hallway.jpg', caption: 'Adey Abeba carpet', pos: '50% 70%' },
  { image: '/images/work/lobby-flag-line-up.jpg', caption: '3D corporate flags', pos: '50% 50%' },
  { image: '/images/work/cbe-executive-gift-set.jpg', caption: 'Corporate gift packaging', pos: '50% 55%' },
];

export const navImages: Record<string, string> = {
  '/': '/images/hero.jpg',
  '/work': '/images/gifts.jpg',
  '/services': '/images/signage.jpg',
  '/solutions': '/images/events.jpg',
  '/about': '/images/stationery.jpg',
  '/clients': '/images/flags.jpg',
  '/contact': '/images/print.jpg',
};

export const tickerWords = ['Advertising & Marketing', 'Branding & Corporate Identity', 'Design & Commercial Printing', '3D Corporate Flags', 'Premium Corporate Gifts', 'Corporate Gift Boxes', 'Events & Promotion', 'ICT Supply', 'Support Services', 'Adey Abeba Carpet'];

export const logoLetters = [
  { c: 'g', d: 'M61,1 L9,19 L0,210 L106,210 L160,161 L142,110 L54,184 L52,183 Z' },
  { c: 'g', d: 'M190,0 L223,100 L224,11 L282,61 L228,118 L246,163 L291,210 L359,210 L286,136 L292,127 L355,60 L292,0 Z' },
  { c: 'w', d: 'M319,0 L319,11 L369,59 L404,68 L411,151 L410,154 L365,155 L363,153 L363,68 L320,114 L320,159 L372,210 L463,210 L441,20 Z' },
  { c: 'w', d: 'M74,0 L66,157 L123,108 L126,14 L190,209 L245,209 L177,1 Z' },
];
