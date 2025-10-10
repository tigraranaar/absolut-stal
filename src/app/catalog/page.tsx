import React from 'react';
import {
  getCategoriesFromJson,
  getAllProductsFromJson,
} from '@/lib/catalog-data';
import CatalogClient from '@/components/catalog/CatalogClient';

export const metadata = {
  title: 'Каталог металлопроката - Абсолют Сталь | Ижевск',
  description:
    'Полный каталог металлопроката: черный металл, нержавеющая сталь, цветные металлы. Более 10000 наименований. Резка, доставка по Ижевску и Удмуртии.',
  keywords:
    'каталог металлопроката, купить металл Ижевск, цены на металлопрокат, нержавейка, цветные металлы, арматура, трубы, листовой металл',
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://absolut-stal.ru/catalog',
    siteName: 'Абсолют Сталь, Ижевск',
    title: 'Каталог металлопроката - Абсолют Сталь | Ижевск',
    description:
      'Полный каталог металлопроката: черный металл, нержавеющая сталь, цветные металлы. Более 10000 наименований. Резка, доставка по Ижевску и Удмуртии.',
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

  return (
    <CatalogClient initialCategories={categories} initialProducts={products} />
  );
}
