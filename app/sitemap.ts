import type { MetadataRoute } from 'next';
import { services } from '@/lib/content';
const base = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://laroadvertising.com';
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/work', '/services', '/solutions', '/about', '/clients', '/contact'];
  return [...pages.map((p) => ({ url: `${base}${p}` })), ...services.map((s) => ({ url: `${base}/services/${s.slug}` }))];
}
