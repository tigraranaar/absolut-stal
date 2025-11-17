'use client';

import React, { useState, useMemo } from 'react';

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
  const [searchQuery, setSearchQuery] = useState('');

  const handleCategoryClick = (categorySlug: string) => {
    if (selectedCategory === categorySlug) {
      return;
    }

    onCategoryChange(categorySlug);
    // Обновляем URL без скролла
    window.history.pushState(null, '', `/catalog/${categorySlug}`);
  };

  // Фильтруем категории по поисковому запросу
  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) {
      return categories;
    }

    const query = searchQuery.toLowerCase();
    return categories.filter((category) =>
      category.name.toLowerCase().includes(query)
    );
  }, [categories, searchQuery]);

  // Группируем категории по первой букве
  const groupedCategories = useMemo(() => {
    const groups: Record<string, Category[]> = {};

    filteredCategories.forEach((category) => {
      const firstLetter = category.name.charAt(0).toUpperCase();
      if (!groups[firstLetter]) {
        groups[firstLetter] = [];
      }
      groups[firstLetter].push(category);
    });

    return Object.keys(groups)
      .sort()
      .map((letter) => ({
        letter,
        categories: groups[letter].sort((a, b) => a.name.localeCompare(b.name)),
      }));
  }, [filteredCategories]);

  return (
    <div className={`space-y-4 ${className}`}>
      <h3 className="mb-4 text-lg font-semibold text-gray-900">
        Категории товаров
      </h3>

      {/* Поиск по категориям */}
      <div className="relative">
        <input
          type="text"
          placeholder="Поиск категории..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 pl-10 text-sm text-gray-900 placeholder-gray-500 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
        />
        <svg
          className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Кнопка "Все категории" */}
      <button
        onClick={() => {
          onCategoryChange(null);
          window.history.pushState(null, '', '/catalog');
          setSearchQuery('');
        }}
        className={`flex w-full items-center rounded-lg border px-3 py-2 text-sm transition-all duration-200 ${
          selectedCategory === null
            ? 'border-yellow-500 bg-yellow-50 font-medium text-gray-900'
            : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50'
        }`}
      >
        <svg
          className="mr-2 h-4 w-4"
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
        <span>Все категории</span>
        <span className="ml-auto text-xs text-gray-500">
          {categories.reduce((sum, cat) => sum + cat.product_count, 0)}
        </span>
      </button>

      {/* Список категорий с прокруткой и группировкой */}
      <div className="max-h-[calc(100vh-300px)] overflow-y-auto rounded-lg border border-gray-200 bg-white">
        {groupedCategories.length === 0 ? (
          <div className="px-4 py-8 text-center text-sm text-gray-500">
            Категории не найдены
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {groupedCategories.map(
              ({ letter, categories: letterCategories }) => (
                <div key={letter}>
                  {/* Заголовок группы */}
                  <div className="sticky top-0 z-10 bg-gray-50 px-3 py-1.5">
                    <span className="text-xs font-semibold text-gray-600 uppercase">
                      {letter}
                    </span>
                  </div>

                  {/* Категории в группе */}
                  {letterCategories.map((category) => {
                    const isSelected = selectedCategory === category.slug;

                    return (
                      <button
                        key={category.id}
                        onClick={() => handleCategoryClick(category.slug)}
                        className={`flex w-full items-center justify-between px-3 py-2 text-left text-sm transition-colors hover:bg-gray-50 ${
                          isSelected
                            ? 'bg-yellow-50 text-gray-900'
                            : 'text-gray-700'
                        }`}
                      >
                        <div className="min-w-0 flex-1">
                          <span
                            className={`block truncate ${isSelected ? 'font-medium' : ''}`}
                          >
                            {category.name}
                          </span>
                          <span className="text-xs text-gray-500">
                            {category.product_count}
                          </span>
                        </div>

                        {isSelected && (
                          <svg
                            className="ml-2 h-4 w-4 flex-shrink-0 text-yellow-600"
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
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryFilter;
