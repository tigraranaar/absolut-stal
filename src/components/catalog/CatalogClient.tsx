'use client';

import React, { useState, useEffect, useMemo } from 'react';
import SearchBar from '@/components/catalog/SearchBar';
import CategoryFilter from '@/components/catalog/CategoryFilter';
import ProductCard from '@/components/catalog/ProductCard';
import ProductTable from '@/components/catalog/ProductTable';
import ViewToggle from '@/components/catalog/ViewToggle';

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

interface Product {
  id: number;
  product_name: string;
  product_group: string;
  unit: string;
  category_name: string;
  category_slug: string;
  subcategory_name?: string;
  subcategory_slug?: string;
}

interface CatalogClientProps {
  initialCategories: Category[];
  initialProducts: Product[];
  preselectedCategory?: string | null;
  preselectedSubcategory?: string | null;
}

export default function CatalogClient({
  initialCategories,
  initialProducts,
  preselectedCategory = null,
  preselectedSubcategory = null,
}: CatalogClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    preselectedCategory
  );
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(
    preselectedSubcategory
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('table');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 25;

  const filteredProducts = useMemo(() => {
    let filtered = initialProducts;

    if (selectedCategory) {
      filtered = filtered.filter(
        (product) => product.category_slug === selectedCategory
      );
    }

    if (selectedSubcategory) {
      filtered = filtered.filter(
        (product) => product.subcategory_slug === selectedSubcategory
      );
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (product) =>
          product.product_name.toLowerCase().includes(query) ||
          product.product_group.toLowerCase().includes(query) ||
          product.category_name.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [initialProducts, selectedCategory, selectedSubcategory, searchQuery]);

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredProducts.slice(startIndex, endIndex);
  }, [filteredProducts, currentPage]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, selectedSubcategory, searchQuery]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleCategoryChange = (categorySlug: string | null) => {
    setSelectedCategory(categorySlug);
    setSelectedSubcategory(null);
    setSearchQuery('');
  };

  const handleSubcategoryChange = (subcategorySlug: string | null) => {
    setSelectedSubcategory(subcategorySlug);
    setSearchQuery('');
  };

  const handleProductClick = (product: Product) => {
    console.log('Выбран товар:', product);
  };

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const getCurrentLevelName = () => {
    if (selectedSubcategory) {
      const category = initialCategories.find(
        (c) => c.slug === selectedCategory
      );
      const subcategory = category?.subcategories?.find(
        (s) => s.slug === selectedSubcategory
      );
      return subcategory?.name || 'Субкатегория';
    } else if (selectedCategory) {
      return (
        initialCategories.find((c) => c.slug === selectedCategory)?.name ||
        'Категория'
      );
    } else {
      return 'Все товары';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero секция */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-6 text-4xl font-bold text-gray-900 lg:text-6xl">
            Каталог товаров
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-gray-600">
            Широкий ассортимент металлопроката, нержавеющей стали и цветных
            металлов
          </p>

          {/* Поиск */}
          <div className="mx-auto max-w-2xl">
            <SearchBar
              onSearch={handleSearch}
              placeholder="Найти товар по названию или характеристикам..."
            />
          </div>
        </div>
      </section>

      {/* Основной контент */}
      <section className="py-20">
        <div className="px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {/* Фильтр категорий */}
            <div className="lg:col-span-1">
              <CategoryFilter
                categories={initialCategories}
                selectedCategory={selectedCategory}
                selectedSubcategory={selectedSubcategory}
                onCategoryChange={handleCategoryChange}
                onSubcategoryChange={handleSubcategoryChange}
                className="sticky top-8"
              />
            </div>

            {/* Список товаров */}
            <div className="lg:col-span-3">
              {/* Заголовок с количеством и переключателем вида */}
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <h2 className="mb-2 text-2xl font-bold text-gray-900">
                    {getCurrentLevelName()}
                  </h2>
                  <p className="text-gray-600">
                    Найдено {filteredProducts.length} товаров
                  </p>
                </div>

                {/* Переключатель вида */}
                <ViewToggle currentView={viewMode} onViewChange={setViewMode} />
              </div>

              {/* Список товаров */}
              {paginatedProducts.length === 0 ? (
                <div className="py-20 text-center">
                  <div className="mb-4 text-6xl text-gray-400">🔍</div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">
                    Товары не найдены
                  </h3>
                  <p className="text-gray-600">
                    Попробуйте изменить параметры поиска или выбрать другую
                    категорию
                  </p>
                </div>
              ) : (
                <>
                  {/* Отображение товаров */}
                  {viewMode === 'cards' ? (
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                      {paginatedProducts.map((product) => (
                        <ProductCard
                          key={product.id}
                          product={product}
                          onClick={handleProductClick}
                        />
                      ))}
                    </div>
                  ) : (
                    <ProductTable
                      products={paginatedProducts}
                      onProductClick={handleProductClick}
                    />
                  )}

                  {/* Пагинация */}
                  {totalPages > 1 && (
                    <div className="mt-12 flex items-center justify-center">
                      <nav className="flex items-center space-x-2">
                        {/* Кнопка "Назад" */}
                        <button
                          onClick={() => handlePageChange(currentPage - 1)}
                          disabled={currentPage === 1}
                          className="flex items-center rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
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
                              d="M15 19l-7-7 7-7"
                            />
                          </svg>
                          Назад
                        </button>

                        {/* Номера страниц */}
                        <div className="flex items-center space-x-1">
                          {Array.from(
                            { length: Math.min(5, totalPages) },
                            (_, i) => {
                              let pageNum;
                              if (totalPages <= 5) {
                                pageNum = i + 1;
                              } else if (currentPage <= 3) {
                                pageNum = i + 1;
                              } else if (currentPage >= totalPages - 2) {
                                pageNum = totalPages - 4 + i;
                              } else {
                                pageNum = currentPage - 2 + i;
                              }

                              return (
                                <button
                                  key={pageNum}
                                  onClick={() => handlePageChange(pageNum)}
                                  className={`rounded-lg px-3 py-2 text-sm font-medium ${
                                    pageNum === currentPage
                                      ? 'bg-yellow-500 text-white'
                                      : 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
                                  }`}
                                >
                                  {pageNum}
                                </button>
                              );
                            }
                          )}
                        </div>

                        {/* Кнопка "Вперед" */}
                        <button
                          onClick={() => handlePageChange(currentPage + 1)}
                          disabled={currentPage === totalPages}
                          className="flex items-center rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          Вперед
                          <svg
                            className="ml-2 h-4 w-4"
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
                        </button>
                      </nav>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
