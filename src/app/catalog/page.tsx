import React from 'react';
import { getCategoriesFromJson } from '@/lib/catalog-data';
import CatalogClient from '@/components/catalog/CatalogClient';

export const metadata = {
  title:
    'Каталог металлопроката Ижевск — более 10 000 позиций | Купить металлопрокат в Ижевске',
  description:
    'Каталог металлопроката Ижевск: арматура, трубы, профнастил, лист стальной, уголок, швеллер, балка, круг стальной, проволока, сетка, катанка, квадрат, шестигранник, пруток. Более 10 000 наименований на складе. Цены на металлопрокат. Резка в размер, доставка по Ижевску и Удмуртии. Прайс-лист 2024.',
  keywords:
    'каталог металлопроката Ижевск, купить металлопрокат в Ижевске, металлопрокат цена Ижевск, прайс-лист на металлопрокат Ижевск 2024, арматура Ижевск, трубы Ижевск, профнастил Ижевск, лист стальной Ижевск, уголок Ижевск, швеллер Ижевск, балка Ижевск, круг стальной Ижевск, проволока Ижевск, сетка Ижевск, катанка Ижевск, квадрат Ижевск, шестигранник Ижевск, пруток Ижевск, металлопрокат с доставкой, резка металла Ижевск',
  alternates: {
    canonical: 'https://absolut-stal.ru/catalog',
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://absolut-stal.ru/catalog',
    siteName: 'Абсолют Сталь, Ижевск',
    title:
      'Каталог металлопроката Ижевск — более 10 000 позиций | Купить металлопрокат в Ижевске',
    description:
      'Каталог металлопроката Ижевск: арматура, трубы, профнастил, лист стальной, уголок, швеллер, балка, круг стальной, проволока, сетка, катанка, квадрат, шестигранник, пруток. Более 10 000 наименований на складе. Цены на металлопрокат. Резка в размер, доставка по Ижевску и Удмуртии. Прайс-лист 2024.',
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
  // Данные товаров загружаются на клиенте из статического JSON файла
  // Это уменьшает размер HTML страниц с ~5MB до нескольких KB

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
      <CatalogClient initialCategories={categories} />
    </>
  );
}
