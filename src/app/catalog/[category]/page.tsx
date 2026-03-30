import React from 'react';
import { notFound } from 'next/navigation';
import { getCategoriesFromJson, getCategorySeoData } from '@/lib/catalog-data';
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

  // Используем SEO-данные (они уже содержат название сайта)
  const title =
    seoData?.seoTitle ||
    `${category.name} - Каталог металлопроката | Абсолют Сталь`;

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
        preselectedCategory={categorySlug}
      />
    </>
  );
}
