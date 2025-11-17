import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import { GoogleTagManager } from '@next/third-parties/google';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title:
    'Металлопрокат Ижевск - Купить металлопрокат в Ижевске | Абсолют Сталь',
  description:
    'Металлопрокат Ижевск: купить металлопрокат в Ижевске оптом и в розницу. Металлобазa Ижевск с ценами на арматуру, трубы, профнастил, лист стальной, уголок, швеллер, балку. Доставка металлопроката по Ижевску и Удмуртии. Прайс-лист 2024.',
  keywords:
    'металлопрокат Ижевск, купить металлопрокат в Ижевске, металлопрокат цена Ижевск, продажа металлопроката Ижевск, компания металлопрокат Ижевск, металлобазa Ижевск, арматура Ижевск, трубы Ижевск, профнастил Ижевск, лист стальной Ижевск, уголок Ижевск, швеллер Ижевск, балка Ижевск, круг стальной Ижевск, проволока Ижевск, сетка Ижевск, катанка Ижевск, полоса стальная Ижевск, квадрат Ижевск, шестигранник Ижевск, пруток Ижевск, доставка металлопроката Ижевск, металлопрокат оптом Ижевск, резка металла Ижевск',
  alternates: {
    canonical: 'https://absolut-stal.ru/',
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://absolut-stal.ru/',
    siteName: 'Абсолют Сталь, Ижевск',
    title:
      'Металлопрокат Ижевск - Купить металлопрокат в Ижевске | Абсолют Сталь',
    description:
      'Металлопрокат Ижевск: купить металлопрокат в Ижевске оптом и в розницу. Металлобазa Ижевск с ценами на арматуру, трубы, профнастил, лист стальной, уголок, швеллер, балку. Доставка металлопроката по Ижевску и Удмуртии. Прайс-лист 2024.',
    images: [
      {
        url: 'https://absolut-stal.ru/images/logo.png',
        width: 800,
        height: 600,
        alt: 'Абсолют Сталь - Металлопрокат в Ижевске',
      },
    ],
  },
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
      <GoogleTagManager gtmId="GTM-56M42HM" />
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
