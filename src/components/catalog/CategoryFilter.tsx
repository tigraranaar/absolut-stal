'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { getAllGroups, getCategoryGroup } from '@/lib/category-groups';

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
  const groups = getAllGroups();

  // Распределяем категории по группам
  const categoriesByGroup = useMemo(() => {
    const map: Record<string, Category[]> = {};

    categories.forEach((category) => {
      const groupId = getCategoryGroup(category.name);
      if (!map[groupId]) {
        map[groupId] = [];
      }
      map[groupId].push(category);
    });

    // Сортируем категории внутри каждой группы
    Object.keys(map).forEach((groupId) => {
      map[groupId].sort((a, b) => a.name.localeCompare(b.name));
    });

    return map;
  }, [categories]);

  // Инициализируем expandedGroups на основе selectedCategory
  // Используем функцию инициализации для useState, чтобы избежать проблем с гидратацией
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(() => {
    const initialSet = new Set<string>();
    if (selectedCategory) {
      const category = categories.find((c) => c.slug === selectedCategory);
      if (category) {
        const groupId = getCategoryGroup(category.name);
        initialSet.add(groupId);
      }
    }
    return initialSet;
  });
  const [searchQuery, setSearchQuery] = useState('');

  // Обновляем expandedGroups при изменении selectedCategory
  useEffect(() => {
    if (selectedCategory) {
      const category = categories.find((c) => c.slug === selectedCategory);
      if (category) {
        const groupId = getCategoryGroup(category.name);
        setExpandedGroups((prev) => {
          if (!prev.has(groupId)) {
            return new Set(prev).add(groupId);
          }
          return prev;
        });
      }
    }
  }, [selectedCategory, categories]);

  // Фильтруем категории по поисковому запросу
  const filteredCategoriesByGroup = useMemo(() => {
    if (!searchQuery.trim()) {
      return categoriesByGroup;
    }

    const query = searchQuery.toLowerCase();
    const filtered: Record<string, Category[]> = {};

    Object.keys(categoriesByGroup).forEach((groupId) => {
      const filteredCats = categoriesByGroup[groupId].filter((category) =>
        category.name.toLowerCase().includes(query)
      );
      if (filteredCats.length > 0) {
        filtered[groupId] = filteredCats;
      }
    });

    return filtered;
  }, [categoriesByGroup, searchQuery]);

  const toggleGroup = (groupId: string) => {
    setExpandedGroups((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(groupId)) {
        newSet.delete(groupId);
      } else {
        newSet.add(groupId);
      }
      return newSet;
    });
  };

  const handleCategoryClick = (categorySlug: string) => {
    if (selectedCategory === categorySlug) {
      return;
    }

    onCategoryChange(categorySlug);
    window.history.pushState(null, '', `/catalog/${categorySlug}/`);
  };

  const handleAllCategoriesClick = () => {
    onCategoryChange(null);
    window.history.pushState(null, '', '/catalog/');
    setSearchQuery('');
    setExpandedGroups(new Set());
  };

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
        onClick={handleAllCategoriesClick}
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
        {/* <span className="ml-auto text-xs text-gray-500">
          {categories.reduce((sum, cat) => sum + cat.product_count, 0)}
        </span> */}
      </button>

      {/* Список групп с аккордеоном */}
      <div className="max-h-[calc(100vh-300px)] overflow-y-auto rounded-lg border border-gray-200 bg-white">
        {groups.map((group) => {
          const groupCats = filteredCategoriesByGroup[group.id] || [];
          if (groupCats.length === 0) {
            return null; // Пропускаем группы без категорий
          }

          const isExpanded = expandedGroups.has(group.id);

          return (
            <div
              key={group.id}
              className="border-b border-gray-100 last:border-b-0"
            >
              {/* Кнопка группы */}
              <button
                onClick={() => toggleGroup(group.id)}
                className="flex w-full items-center justify-between px-3 py-2.5 text-left text-sm transition-colors hover:bg-gray-50"
              >
                <div className="flex items-center gap-2">
                  <svg
                    className={`h-4 w-4 text-gray-500 transition-transform ${
                      isExpanded ? 'rotate-90' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  <span className="font-medium text-gray-900">
                    {group.name}
                  </span>
                </div>
                {/* <span className="text-xs text-gray-500">{productCount}</span> */}
              </button>

              {/* Категории группы (выпадающий список) */}
              {isExpanded && (
                <div className="bg-gray-50">
                  {groupCats.map((category) => {
                    const isSelected = selectedCategory === category.slug;

                    return (
                      <button
                        key={category.id}
                        onClick={() => handleCategoryClick(category.slug)}
                        className={`flex w-full items-center justify-between px-6 py-2 text-left text-sm transition-colors hover:bg-gray-100 ${
                          isSelected
                            ? 'bg-yellow-50 font-medium text-gray-900'
                            : 'text-gray-700'
                        }`}
                      >
                        <div className="min-w-0 flex-1">
                          <span className="block truncate">
                            {category.name}
                          </span>
                          {/* <span className="text-xs text-gray-500">
                            {category.product_count}
                          </span> */}
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
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryFilter;
