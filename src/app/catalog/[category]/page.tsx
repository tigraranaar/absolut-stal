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

export async function generateStaticParams() {
  const categories = getCategoriesFromJson();

  return categories.map((category) => ({
    category: category.slug,
  }));
}

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

  const seoData = getCategorySeoData(categorySlug);

  const title =
    seoData?.seoTitle ||
    `${category.name} - Каталог металлопроката | Абсолют Сталь`;

  const description = seoData
    ? seoData.seoDescription
    : `${category.description}. Широкий выбор ${category.name.toLowerCase()} в Казани. Доставка по Татарстану.`;

  const keywords = seoData
    ? seoData.seoKeywords
    : `${category.name.toLowerCase()}, металлопрокат ${category.name.toLowerCase()}, купить ${category.name.toLowerCase()} Казань`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `https://казаньметалл.рф/catalog/${categorySlug}/`,
    },
    openGraph: {
      type: 'website',
      locale: 'ru_RU',
      url: `https://казаньметалл.рф/catalog/${categorySlug}/`,
      siteName: 'Абсолют Сталь, Казань',
      title,
      description,
      images: [
        {
          url: 'https://казаньметалл.рф/images/logo.png',
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
        item: 'https://казаньметалл.рф/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Каталог',
        item: 'https://казаньметалл.рф/catalog/',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: category.name,
        item: `https://казаньметалл.рф/catalog/${categorySlug}/`,
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
