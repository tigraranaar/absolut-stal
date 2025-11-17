import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';
import type { Metadata } from 'next';

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
  other: {
    'yandex-verification': 'd9e454a1bfbbd110',
  },
};

export default function Home() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Абсолют Сталь',
    description:
      'Компания по металлопрокату в городе Ижевске. Широкий ассортимент, качественные материалы, резка и доставка.',
    url: 'https://absolut-stal.ru',
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
        name: 'Ижевск',
      },
      {
        '@type': 'State',
        name: 'Удмуртская Республика',
      },
    ],
    logo: 'https://absolut-stal.ru/images/logo.png',
    image: 'https://absolut-stal.ru/images/logo.png',
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ООО "Абсолют Сталь"',
    url: 'https://absolut-stal.ru',
    logo: 'https://absolut-stal.ru/images/logo.png',
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
