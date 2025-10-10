import React from 'react';
import { notFound } from 'next/navigation';
import {
  getCategoriesFromJson,
  getProductsBySubcategoryFromJson,
} from '@/lib/catalog-data';
import CatalogClient from '@/components/catalog/CatalogClient';
import type { Metadata } from 'next';

interface SubcategoryPageProps {
  params: Promise<{
    category: string;
    subcategory: string;
  }>;
}

// ✅ SSG: Генерируем статические страницы для всех подкатегорий при билде
export async function generateStaticParams() {
  const categories = getCategoriesFromJson();
  const paths: { category: string; subcategory: string }[] = [];

  categories.forEach((category) => {
    category.subcategories?.forEach((subcategory) => {
      paths.push({
        category: category.slug,
        subcategory: subcategory.slug,
      });
    });
  });

  return paths;
}

// ✅ Динамические meta-теги для каждой подкатегории
export async function generateMetadata({
  params,
}: SubcategoryPageProps): Promise<Metadata> {
  const { category: categorySlug, subcategory: subcategorySlug } = await params;
  const categories = getCategoriesFromJson();
  const category = categories.find((c) => c.slug === categorySlug);
  const subcategory = category?.subcategories?.find(
    (s) => s.slug === subcategorySlug
  );

  if (!category || !subcategory) {
    return {
      title: 'Подкатегория не найдена',
    };
  }

  return {
    title: `${subcategory.name} - ${category.name} | Абсолют Сталь`,
    description: `${subcategory.name} в категории ${category.name}. Широкий ассортимент металлопроката в Ижевске. Доставка по Удмуртии.`,
    keywords: `${subcategory.name.toLowerCase()}, ${category.name.toLowerCase()}, металлопрокат Ижевск`,
    alternates: {
      canonical: `https://absolut-stal.ru/catalog/${categorySlug}/${subcategorySlug}`,
    },
    openGraph: {
      type: 'website',
      locale: 'ru_RU',
      url: `https://absolut-stal.ru/catalog/${categorySlug}/${subcategorySlug}`,
      siteName: 'Абсолют Сталь, Ижевск',
      title: `${subcategory.name} - ${category.name} | Абсолют Сталь`,
      description: `${subcategory.name} в категории ${category.name}. Широкий ассортимент металлопроката в Ижевске. Доставка по Удмуртии.`,
      images: [
        {
          url: 'https://absolut-stal.ru/images/logo.png',
          width: 800,
          height: 600,
          alt: `Абсолют Сталь - ${subcategory.name}`,
        },
      ],
    },
  };
}

export default async function SubcategoryPage({
  params,
}: SubcategoryPageProps) {
  const { category: categorySlug, subcategory: subcategorySlug } = await params;
  const categories = getCategoriesFromJson();
  const category = categories.find((c) => c.slug === categorySlug);
  const subcategory = category?.subcategories?.find(
    (s) => s.slug === subcategorySlug
  );

  if (!category || !subcategory) {
    notFound();
  }

  // Получаем товары только этой подкатегории
  const subcategoryProducts = getProductsBySubcategoryFromJson(
    subcategorySlug,
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
      {
        '@type': 'ListItem',
        position: 4,
        name: subcategory.name,
        item: `https://absolut-stal.ru/catalog/${categorySlug}/${subcategorySlug}`,
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
        initialProducts={subcategoryProducts.products}
        preselectedCategory={categorySlug}
        preselectedSubcategory={subcategorySlug}
      />
    </>
  );
}
