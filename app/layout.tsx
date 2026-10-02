import type { Metadata, Viewport } from 'next';
import { DM_Sans } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Fab from '@/components/Fab';
import ScrollFx from '@/components/ScrollFx';
import Cursor from '@/components/Cursor';
import Preloader from '@/components/Preloader';
import PageTransition from '@/components/PageTransition';
import './globals.css';

const dmSans = DM_Sans({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], variable: '--font-dm', display: 'swap' });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://laroadvertising.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'LARO Advertising PLC | Elevate your Business', template: '%s | LARO Advertising PLC' },
  description: 'Brand strategy, creative design, printing, signage, corporate gifts, eco-friendly promotional products, events and installation in Addis Ababa, Ethiopia. One partner from brief to delivery.',
  openGraph: { type: 'website', siteName: 'LARO Advertising PLC', images: ['/images/hero.jpg'] },
  icons: { icon: '/favicon.png' },
};

export const viewport: Viewport = { themeColor: '#fafafa', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={dmSans.variable}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "(function(d){d.classList.add('js');try{if(sessionStorage.getItem('laro-seen'))d.classList.add('no-preload');else sessionStorage.setItem('laro-seen','1')}catch(e){}})(document.documentElement)" }} />
      </head>
      <body>
        <Preloader />
        <div className="site" id="top">
          <a className="skip" href="#main">Skip to content</a>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <Fab />
        </div>
        <PageTransition />
        <Cursor />
        <ScrollFx />
      </body>
    </html>
  );
}
