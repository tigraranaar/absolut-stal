import React from 'react';
import { notFound } from 'next/navigation';
import {
  getCategoriesFromJson,
  getProductsByCategoryFromJson,
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

  return {
    title: `${category.name} - Каталог металлопроката | Абсолют Сталь`,
    description: `${category.description}. Широкий выбор ${category.name.toLowerCase()} в Ижевске. Доставка по Удмуртии.`,
    keywords: `${category.name.toLowerCase()}, металлопрокат ${category.name.toLowerCase()}, купить ${category.name.toLowerCase()} Ижевск`,
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

  return (
    <CatalogClient
      initialCategories={categories}
      initialProducts={categoryProducts.products}
      preselectedCategory={categorySlug}
    />
  );
}
