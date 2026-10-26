/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { formats: ['image/avif', 'image/webp'] },
  poweredByHeader: false,
  async redirects() {
    return [
      { source: '/clients', destination: '/about#clients', permanent: true },
      { source: '/docs/LARO-Company-Overview.pdf', destination: '/docs/LARO-Company-Profile-2026.pdf', permanent: true },
      // old service addresses, kept working after the services were aligned with the company profile
      { source: '/services/promotional-products-corporate-gifts', destination: '/services/corporate-gifts-promotional-products', permanent: true },
      { source: '/services/promotional-products-premium-corporate-gifts', destination: '/services/corporate-gifts-promotional-products', permanent: true },
      { source: '/services/eco-friendly-promotional-advertising', destination: '/services/corporate-gifts-promotional-products', permanent: true },
      { source: '/services/brand-strategy-corporate-identity', destination: '/services/branding-corporate-identity', permanent: true },
      { source: '/services/signage-displays-outdoor-advertising', destination: '/services/branding-corporate-identity', permanent: true },
      { source: '/services/creative-design-marketing-communications', destination: '/services/advertising-marketing-communications', permanent: true },
      { source: '/services/printing-publishing', destination: '/services/creative-design-commercial-printing', permanent: true },
      { source: '/services/commercial-printing-packaging', destination: '/services/creative-design-commercial-printing', permanent: true },
      { source: '/services/events-brand-activation', destination: '/services/event-promotional-solutions', permanent: true },
      { source: '/services/sourcing-supply-installation', destination: '/services/ict-supply-technical-materials', permanent: true },
    ];
  },
};
export default nextConfig;
