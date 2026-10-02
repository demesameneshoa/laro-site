import type { Metadata, Viewport } from 'next';
import { Archivo, Geist, Geist_Mono } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Fab from '@/components/Fab';
import Reveal from '@/components/Reveal';
import './globals.css';

const archivo = Archivo({ subsets: ['latin'], weight: ['600', '700', '800', '900'], variable: '--font-archivo', display: 'swap' });
const geist = Geist({ subsets: ['latin'], variable: '--font-geist', display: 'swap' });
const geistMono = Geist_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-geist-mono', display: 'swap' });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://laroadvertising.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'LARO Advertising PLC | Elevate your Business', template: '%s | LARO Advertising PLC' },
  description: 'Brand strategy, creative design, printing, signage, corporate gifts, eco-friendly promotional products, events and installation in Addis Ababa, Ethiopia. One partner from brief to delivery.',
  openGraph: { type: 'website', siteName: 'LARO Advertising PLC', images: ['/images/hero.jpg'] },
  icons: { icon: '/favicon.png' },
};

export const viewport: Viewport = { themeColor: '#0a0b0a', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${geist.variable} ${geistMono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <div className="site">
          <a className="skip" href="#main">Skip to content</a>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <Fab />
        </div>
        <Reveal />
      </body>
    </html>
  );
}
