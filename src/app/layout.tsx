import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { GoogleTagManager } from '@next/third-parties/google';
import './globals.css';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Металлопрокат Казань - Купить металлопрокат в Казани | Абсолют Сталь',
  description:
    'Металлопрокат Казань: купить металлопрокат в Казани оптом и в розницу. Металлобазa Казань с ценами на арматуру, трубы, профнастил, лист стальной, уголок, швеллер, балку. Доставка металлопроката по Казаньу и Татарстану. Прайс-лист 2024.',
  keywords:
    'металлопрокат Казань, купить металлопрокат в Казани, металлопрокат цена Казань, продажа металлопроката Казань, компания металлопрокат Казань, металлобазa Казань, арматура Казань, трубы Казань, профнастил Казань, лист стальной Казань, уголок Казань, швеллер Казань, балка Казань, круг стальной Казань, проволока Казань, сетка Казань, катанка Казань, полоса стальная Казань, квадрат Казань, шестигранник Казань, пруток Казань, доставка металлопроката Казань, металлопрокат оптом Казань, резка металла Казань',
  alternates: {
    canonical: 'https://absolut-stal.ru/',
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://absolut-stal.ru/',
    siteName: 'Абсолют Сталь, Казань',
    title:
      'Металлопрокат Казань - Купить металлопрокат в Казани | Абсолют Сталь',
    description:
      'Металлопрокат Казань: купить металлопрокат в Казани оптом и в розницу. Металлобазa Казань с ценами на арматуру, трубы, профнастил, лист стальной, уголок, швеллер, балку. Доставка металлопроката по Казаньу и Татарстану. Прайс-лист 2024.',
    images: [
      {
        url: 'https://absolut-stal.ru/images/logo.png',
        width: 800,
        height: 600,
        alt: 'Абсолют Сталь - Металлопрокат в Казани',
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
      <GoogleTagManager gtmId="GTM-W8CGQ84Z" />
      <body className={inter.className} suppressHydrationWarning>
        <div className="flex min-h-screen flex-col">
          <HeaderWrapper />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
