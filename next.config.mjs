/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { formats: ['image/avif', 'image/webp'] },
  poweredByHeader: false,
  async redirects() {
    return [
      { source: '/services/promotional-products-corporate-gifts', destination: '/services/promotional-products-premium-corporate-gifts', permanent: true },
    ];
  },
};
export default nextConfig;
