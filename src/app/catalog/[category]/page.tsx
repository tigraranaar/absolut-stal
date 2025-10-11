import React from 'react';
import { notFound } from 'next/navigation';
import {
  getCategoriesFromJson,
  getProductsByCategoryFromJson,
  getCategorySeoData,
} from '@/lib/catalog-data';
import CatalogClient from '@/components/catalog/CatalogClient';
import type { Metadata } from 'next';

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

// ✅ SSG: Генерируем статические страницы для всех категорий при билде
export async function generateStaticParams() {
  const categories = getCategoriesFromJson();

  return categories.map((category) => ({
    category: category.slug,
  }));
}

// ✅ Динамические meta-теги для каждой категории
export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const categories = getCategoriesFromJson();
  const category = categories.find((c) => c.slug === categorySlug);

  if (!category) {
    return {
      title: 'Категория не найдена',
    };
  }

  // Получаем SEO-данные для категории
  const seoData = getCategorySeoData(categorySlug);

  // Если есть специальные SEO-данные, используем их
  const title = seoData
    ? `${seoData.seoTitle} | Абсолют Сталь`
    : `${category.name} - Каталог металлопроката | Абсолют Сталь`;

  const description = seoData
    ? seoData.seoDescription
    : `${category.description}. Широкий выбор ${category.name.toLowerCase()} в Ижевске. Доставка по Удмуртии.`;

  const keywords = seoData
    ? seoData.seoKeywords
    : `${category.name.toLowerCase()}, металлопрокат ${category.name.toLowerCase()}, купить ${category.name.toLowerCase()} Ижевск`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `https://absolut-stal.ru/catalog/${categorySlug}`,
    },
    openGraph: {
      type: 'website',
      locale: 'ru_RU',
      url: `https://absolut-stal.ru/catalog/${categorySlug}`,
      siteName: 'Абсолют Сталь, Ижевск',
      title,
      description,
      images: [
        {
          url: 'https://absolut-stal.ru/images/logo.png',
          width: 800,
          height: 600,
          alt: `Абсолют Сталь - ${category.name}`,
        },
      ],
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params;
  const categories = getCategoriesFromJson();
  const category = categories.find((c) => c.slug === categorySlug);

  if (!category) {
    notFound();
  }

  // Получаем товары только этой категории
  const categoryProducts = getProductsByCategoryFromJson(
    categorySlug,
    1,
    10000
  );

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
      {
        '@type': 'ListItem',
        position: 3,
        name: category.name,
        item: `https://absolut-stal.ru/catalog/${categorySlug}`,
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
        initialProducts={categoryProducts.products}
        preselectedCategory={categorySlug}
      />
    </>
  );
}
