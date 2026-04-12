import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Металлопрокат Казань - Купить металлопрокат в Казани | Абсолют Сталь',
  description:
    'Металлопрокат Казань: купить металлопрокат в Казани оптом и в розницу. Металлобазa Казань с ценами на арматуру, трубы, профнастил, лист стальной, уголок, швеллер, балку. Доставка металлопроката по Казаньу и Татарстану. Прайс-лист 2024.',
  keywords:
    'металлопрокат Казань, купить металлопрокат в Казани, металлопрокат цена Казань, продажа металлопроката Казань, компания металлопрокат Казань, металлобазa Казань, арматура Казань, трубы Казань, профнастил Казань, лист стальной Казань, уголок Казань, швеллер Казань, балка Казань, круг стальной Казань, проволока Казань, сетка Казань, катанка Казань, полоса стальная Казань, квадрат Казань, шестигранник Казань, пруток Казань, доставка металлопроката Казань, металлопрокат оптом Казань, резка металла Казань',
  alternates: {
    canonical: 'https://казаньметалл.рф/',
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://казаньметалл.рф/',
    siteName: 'Абсолют Сталь, Казань',
    title:
      'Металлопрокат Казань - Купить металлопрокат в Казани | Абсолют Сталь',
    description:
      'Металлопрокат Казань: купить металлопрокат в Казани оптом и в розницу. Металлобазa Казань с ценами на арматуру, трубы, профнастил, лист стальной, уголок, швеллер, балку. Доставка металлопроката по Казаньу и Татарстану. Прайс-лист 2024.',
    images: [
      {
        url: 'https://казаньметалл.рф/images/logo.png',
        width: 800,
        height: 600,
        alt: 'Абсолют Сталь - Металлопрокат в Казани',
      },
    ],
  },
  other: {
    'yandex-verification': '283023e22d83b2e0',
  },
};

export default function Home() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Абсолют Сталь',
    description:
      'Компания по металлопрокату в городе Казани. Широкий ассортимент, качественные материалы, резка и доставка.',
    url: 'https://казаньметалл.рф',
    telephone: '+7-3412-56-68-22',
    email: 'abst18@bk.ru',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'ул. Репина, дом 35, корпус 1',
      addressLocality: 'Ижевск',
      addressRegion: 'Удмуртская Республика',
      postalCode: '426035',
      addressCountry: 'RU',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 56.8519,
      longitude: 53.2108,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
    ],
    areaServed: [
      {
        '@type': 'City',
        name: 'Казань',
      },
      {
        '@type': 'State',
        name: 'Республика Татарстан',
      },
    ],
    logo: 'https://казаньметалл.рф/images/logo.png',
    image: 'https://казаньметалл.рф/images/logo.png',
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ООО "Абсолют Сталь"',
    url: 'https://казаньметалл.рф',
    logo: 'https://казаньметалл.рф/images/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+7-3412-56-68-22',
      contactType: 'sales',
      areaServed: 'RU',
      availableLanguage: 'Russian',
    },
    sameAs: ['https://t.me/izh_metall18_bot'],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <div>
        <HeroSection />
        <AboutSection />
        <ContactSection />
      </div>
    </>
  );
}
