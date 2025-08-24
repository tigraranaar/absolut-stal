import React, { useState } from 'react';

interface Subcategory {
  id: number;
  name: string;
  slug: string;
  product_count?: number;
}

interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
  subcategories?: Subcategory[];
}

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string | null;
  selectedSubcategory: string | null;
  onCategoryChange: (categorySlug: string | null) => void;
  onSubcategoryChange: (subcategorySlug: string | null) => void;
  className?: string;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  selectedSubcategory,
  onCategoryChange,
  onSubcategoryChange,
  className = '',
}) => {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set()
  );

  const handleCategoryClick = (categorySlug: string) => {
    // Если категория уже выбрана - ничего не делаем
    if (selectedCategory === categorySlug) {
      return;
    }

    // Иначе выбираем новую категорию
    onCategoryChange(categorySlug);
    onSubcategoryChange(null);
    setExpandedCategories((prev) => new Set([...prev, categorySlug]));
  };

  const handleSubcategoryClick = (subcategorySlug: string) => {
    // Если субкатегория уже выбрана - ничего не делаем
    if (selectedSubcategory === subcategorySlug) {
      return;
    }

    // Иначе выбираем новую субкатегорию
    onSubcategoryChange(subcategorySlug);
  };

  const toggleCategoryExpansion = (categorySlug: string) => {
    setExpandedCategories((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(categorySlug)) {
        newSet.delete(categorySlug);
      } else {
        newSet.add(categorySlug);
      }
      return newSet;
    });
  };

  const getCategoryIcon = (slug: string) => {
    switch (slug) {
      case 'metal-rolling':
        return (
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            />
          </svg>
        );
      case 'stainless-steel':
        return (
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        );
      case 'non-ferrous-metals':
        return (
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        );
      default:
        return (
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
            />
          </svg>
        );
    }
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <h3 className="mb-4 text-lg font-semibold text-gray-900">
        Категории товаров
      </h3>

      <div className="space-y-2">
        {/* Кнопка "Все категории" - сбрасывает все фильтры */}
        <button
          onClick={() => {
            onCategoryChange(null);
            onSubcategoryChange(null);
          }}
          className={`flex w-full items-center rounded-lg border px-4 py-3 transition-all duration-200 ${
            selectedCategory === null && selectedSubcategory === null
              ? 'border-yellow-500 bg-yellow-50 text-yellow-700'
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

        {/* Категории с субкатегориями */}
        {categories.map((category) => {
          const isExpanded = expandedCategories.has(category.slug);
          const isSelected = selectedCategory === category.slug;
          const hasSubcategories =
            category.subcategories && category.subcategories.length > 0;

          return (
            <div key={category.id} className="space-y-1">
              {/* Основная категория */}
              <button
                onClick={() => handleCategoryClick(category.slug)}
                className={`flex w-full items-center justify-between rounded-lg border px-4 py-3 transition-all duration-200 ${
                  isSelected
                    ? 'border-yellow-500 bg-yellow-50 text-yellow-700'
                    : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center">
                  <div
                    className={`mr-3 rounded p-1 ${
                      isSelected
                        ? 'bg-yellow-100 text-yellow-600'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {getCategoryIcon(category.slug)}
                  </div>

                  <div className="text-left">
                    <span className="block font-medium">{category.name}</span>
                    <span className="text-sm opacity-75">
                      {category.description}
                    </span>
                  </div>
                </div>

                {/* Кнопка разворачивания */}
                {hasSubcategories && (
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleCategoryExpansion(category.slug);
                    }}
                    className={`ml-2 cursor-pointer rounded p-1 transition-transform ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
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
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                )}
              </button>

              {/* Субкатегории */}
              {hasSubcategories && isExpanded && category.subcategories && (
                <div className="ml-6 space-y-1">
                  {category.subcategories.map((subcategory) => (
                    <button
                      key={subcategory.id}
                      onClick={() => handleSubcategoryClick(subcategory.slug)}
                      className={`flex w-full items-center justify-between rounded-lg border px-3 py-2 text-sm transition-all duration-200 ${
                        selectedSubcategory === subcategory.slug
                          ? 'bg-yellow-25 border-yellow-400 text-yellow-600'
                          : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <span className="truncate">{subcategory.name}</span>
                      {subcategory.product_count && (
                        <span className="ml-2 rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600">
                          {subcategory.product_count}
                        </span>
                      )}
                    </button>
                  ))}
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
