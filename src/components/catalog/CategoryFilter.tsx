'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
  product_count: number;
}

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string | null;
  onCategoryChange: (categorySlug: string | null) => void;
  className?: string;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
  className = '',
}) => {
  const router = useRouter();

  const handleCategoryClick = (categorySlug: string) => {
    if (selectedCategory === categorySlug) {
      return;
    }

    onCategoryChange(categorySlug);
    router.push(`/catalog/${categorySlug}`);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <h3 className="mb-4 text-lg font-semibold text-gray-900">
        Категории товаров
      </h3>

      <div className="space-y-2">
        {/* Кнопка "Все категории" - переход на главную страницу каталога */}
        <button
          onClick={() => {
            onCategoryChange(null);
            router.push('/catalog');
          }}
          className={`flex w-full items-center rounded-lg border px-4 py-3 transition-all duration-200 ${
            selectedCategory === null
              ? 'border-yellow-500 bg-yellow-50 text-gray-900'
              : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50'
          }`}
        >
          <svg
            className="mr-3 h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 10h16M4 14h16M4 18h16"
            />
          </svg>
          <span className="font-medium">Все категории</span>
        </button>

        {/* Категории */}
        {categories.map((category) => {
          const isSelected = selectedCategory === category.slug;

          return (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.slug)}
              className={`flex w-full items-center justify-between rounded-lg border px-4 py-3 transition-all duration-200 ${
                isSelected
                  ? 'border-yellow-500 bg-yellow-50 text-gray-900'
                  : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <div className="text-left">
                <span className="block font-medium">{category.name}</span>
                <span className="text-xs text-gray-500">
                  {category.product_count} товаров
                </span>
              </div>

              {isSelected && (
                <svg
                  className="h-5 w-5 text-yellow-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryFilter;
