import { site } from '../content/site';

export default function sitemap() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : site.url);
  return ['', '/services', '/eco-range', '/portfolio', '/about', '/contact'].map((p) => ({
    url: `${base}${p}`,
    changeFrequency: 'monthly',
    priority: p === '' ? 1 : 0.7,
  }));
}
