import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Абсолют Сталь - Металлопрокат в Ижевске',
  description:
    'Компания по металлопрокату в городе Ижевске. Широкий ассортимент, качественные материалы, резка и доставка по всей Удмуртской Республике и близлежащим регионам.',
  keywords:
    'металлопрокат, сталь, металл, Ижевск, Удмуртия, резка металла, доставка',
  alternates: {
    canonical: 'https://absolut-stal.ru/',
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://absolut-stal.ru/',
    siteName: 'Абсолют Сталь, Ижевск',
    title: 'Абсолют Сталь - Металлопрокат в Ижевске',
    description:
      'Компания по металлопрокату в городе Ижевске. Широкий ассортимент, качественные материалы, резка и доставка по всей Удмуртской Республике и близлежащим регионам.',
    images: [
      {
        url: 'https://absolut-stal.ru/images/logo.png',
        width: 800,
        height: 600,
        alt: 'Абсолют Сталь - Металлопрокат в Ижевске',
      },
    ],
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
