import { Archivo, Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Engine from '../components/Engine';
import { site } from '../content/site';

const archivo = Archivo({ subsets: ['latin'], axes: ['wdth'], variable: '--font-archivo', display: 'swap' });
const geist = Geist({ subsets: ['latin'], variable: '--font-geist', display: 'swap' });
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono', display: 'swap' });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : site.url);

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${site.name} · ${site.tagline}`, template: `%s · ${site.name}` },
  description: site.description,
  openGraph: { type: 'website', siteName: site.name, title: site.name, description: site.description, images: [{ url: '/img/hero.jpg', width: 1600, height: 1000 }] },
  twitter: { card: 'summary_large_image' },
  icons: { icon: '/icon.png', apple: '/icon.png' },
};

export const viewport = { themeColor: '#0D0F0D', width: 'device-width', initialScale: 1, viewportFit: 'cover' };

// Decides before first paint whether the logo loader shows (home page, first visit per session).
const boot = `try{var h=document.documentElement;h.classList.add('laro-js');if(${site.showLoader ? 'true' : 'false'}&&location.pathname==='/'&&sessionStorage.getItem('laro-seen')!=='1'){h.classList.add('laro-loading')}else{h.classList.add('laro-no-loader')}}catch(e){document.documentElement.classList.add('laro-no-loader')}`;

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: site.name,
  description: site.description,
  telephone: site.phone1,
  address: { '@type': 'PostalAddress', streetAddress: 'Bole Medhaniyalem, Morning Star building, 4th floor', addressLocality: 'Addis Ababa', addressCountry: 'ET' },
  url: siteUrl,
  image: `${siteUrl}/img/hero.jpg`,
  foundingDate: '2012',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${archivo.variable} ${geist.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: boot }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="laro">
        <a className="laro-skip" href="#laro-main">Skip to content</a>
        <Header />
        <main id="laro-main" className="laro-main">{children}</main>
        <Footer />
        <Engine />
      </body>
    </html>
  );
}
