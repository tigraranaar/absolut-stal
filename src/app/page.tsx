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
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
