import React from 'react';
import {
  getCategoriesFromJson,
  getAllProductsFromJson,
} from '@/lib/catalog-data';
import CatalogClient from '@/components/catalog/CatalogClient';

export const metadata = {
  title:
    'Каталог металлопроката в Ижевске — более 10 000 позиций | Абсолют Сталь',
  description:
    'Полный каталог металлопроката: черный металл, нержавейка, цветные металлы. Более 10 000 наименований на складе. Резка в размер, доставка по Ижевску и Удмуртии. Консультация специалистов.',
  keywords:
    'каталог металлопроката Ижевск, купить металл, металлопрокат с доставкой, арматура, трубы, листовой металл, нержавейка',
  alternates: {
    canonical: 'https://absolut-stal.ru/catalog',
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://absolut-stal.ru/catalog',
    siteName: 'Абсолют Сталь, Ижевск',
    title:
      'Каталог металлопроката в Ижевске — более 10 000 позиций | Абсолют Сталь',
    description:
      'Полный каталог металлопроката: черный металл, нержавейка, цветные металлы. Более 10 000 наименований на складе. Резка в размер, доставка по Ижевску и Удмуртии. Консультация специалистов.',
    images: [
      {
        url: 'https://absolut-stal.ru/images/logo.png',
        width: 800,
        height: 600,
        alt: 'Абсолют Сталь - Каталог металлопроката',
      },
    ],
  },
};

export default function CatalogPage() {
  const categories = getCategoriesFromJson();
  const products = getAllProductsFromJson();

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Главная',
        item: 'https://absolut-stal.ru',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Каталог',
        item: 'https://absolut-stal.ru/catalog',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CatalogClient
        initialCategories={categories}
        initialProducts={products}
      />
    </>
  );
}
