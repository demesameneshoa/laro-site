import { site } from '../content/site';

export default function robots() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : site.url);
  return { rules: [{ userAgent: '*', allow: '/' }], sitemap: `${base}/sitemap.xml` };
}
