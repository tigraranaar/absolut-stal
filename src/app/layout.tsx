import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  title: 'Абсолют Сталь - Металлопрокат в Ижевске',
  description:
    'Компания по металлопрокату в городе Ижевске. Широкий ассортимент, качественные материалы, резка и доставка по всей Удмуртской Республике и близлежащим регионам.',
  keywords:
    'металлопрокат, сталь, металл, Ижевск, Удмуртия, резка металла, доставка',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <HeaderWrapper />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
