'use client';

import React, { useState, useEffect, useMemo } from 'react';
import SearchBar from '@/components/catalog/SearchBar';
import CategoryFilter from '@/components/catalog/CategoryFilter';
import ProductCard from '@/components/catalog/ProductCard';
import ProductTable from '@/components/catalog/ProductTable';
import ViewToggle from '@/components/catalog/ViewToggle';

interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
  product_count: number;
}

interface Product {
  id: number;
  product_name: string;
  product_group: string;
  unit: string;
  category_name: string;
  category_slug: string;
  [key: string]: string | number;
}

interface CatalogData {
  categories: Category[];
  products: Product[];
  generatedAt: string;
}

interface CatalogClientProps {
  initialCategories: Category[];
  preselectedCategory?: string | null;
}

export default function CatalogClient({
  initialCategories,
  preselectedCategory = null,
}: CatalogClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    preselectedCategory
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('table');
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 25;

  // Загружаем данные каталога на клиенте из статического JSON файла
  useEffect(() => {
    async function loadCatalogData() {
      try {
        const response = await fetch('/catalog-data.json');
        if (!response.ok) {
          throw new Error('Failed to load catalog data');
        }
        const data: CatalogData = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error('Ошибка загрузки данных каталога:', error);
      } finally {
        setLoading(false);
      }
    }

    loadCatalogData();
  }, []);

  // Сохраняем исходную категорию из URL для восстановления при очистке поиска
  const initialCategoryFromUrl = preselectedCategory;
  const isSearching = searchQuery.trim().length > 0;

  const selectedCategoryInfo = useMemo(() => {
    if (!selectedCategory) return null;
    return initialCategories.find((c) => c.slug === selectedCategory) || null;
  }, [initialCategories, selectedCategory]);

  const heroTitle = useMemo(() => {
    if (isSearching) return 'Поиск по каталогу';
    if (selectedCategoryInfo?.name)
      return `${selectedCategoryInfo.name} в Казани`;
    return 'Каталог металлопроката в Казани';
  }, [isSearching, selectedCategoryInfo?.name]);

  const heroDescription = useMemo(() => {
    if (isSearching) {
      return `Результаты поиска по запросу «${searchQuery.trim()}»`;
    }
    if (selectedCategoryInfo?.name) {
      return `Купить ${selectedCategoryInfo.name.toLowerCase()} с доставкой по Казани и Татарстану. Резка в размер, консультации и подбор.`;
    }
    return 'Широкий ассортимент металлопроката, нержавеющей стали и цветных металлов';
  }, [isSearching, searchQuery, selectedCategoryInfo?.name]);

  const filteredProducts = useMemo(() => {
    if (loading || products.length === 0) {
      return [];
    }

    let filtered = products;

    // Если есть поисковый запрос, ищем по всем товарам (игнорируем категорию)
    // Если поиска нет, фильтруем по выбранной категории
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (product) =>
          product.product_name.toLowerCase().includes(query) ||
          product.product_group.toLowerCase().includes(query) ||
          product.category_name.toLowerCase().includes(query)
      );
    } else if (selectedCategory) {
      filtered = filtered.filter(
        (product) => product.category_slug === selectedCategory
      );
    }

    return filtered;
  }, [products, selectedCategory, searchQuery, loading]);

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredProducts.slice(startIndex, endIndex);
  }, [filteredProducts, currentPage]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);

  const handleSearch = (query: string) => {
    const wasSearching = searchQuery.trim().length > 0;
    const willSearch = query.trim().length > 0;

    setSearchQuery(query);

    // Если начинаем поиск и есть выбранная категория - очищаем категорию и обновляем URL
    if (willSearch && !wasSearching && selectedCategory) {
      setSelectedCategory(null);
      window.history.replaceState(null, '', '/catalog/');
    }

    // Если очищаем поиск и были на странице категории - возвращаем категорию
    if (!willSearch && wasSearching && initialCategoryFromUrl) {
      setSelectedCategory(initialCategoryFromUrl);
      window.history.replaceState(
        null,
        '',
        `/catalog/${initialCategoryFromUrl}/`
      );
    }
  };

  const handleCategoryChange = (categorySlug: string | null) => {
    setSelectedCategory(categorySlug);
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

  const currentLevelName = useMemo(() => {
    if (selectedCategory) {
      return (
        initialCategories.find((c) => c.slug === selectedCategory)?.name ||
        'Категория'
      );
    }
    return 'Все товары';
  }, [initialCategories, selectedCategory]);

  const listTitle = useMemo(() => {
    if (isSearching) return 'Результаты поиска';
    if (selectedCategoryInfo?.name) return 'Товары и характеристики';
    return currentLevelName;
  }, [currentLevelName, isSearching, selectedCategoryInfo?.name]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero секция */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-6 text-4xl font-bold text-gray-900 lg:text-6xl">
            {heroTitle}
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-gray-600">
            {heroDescription}
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
                onCategoryChange={handleCategoryChange}
                className="sticky top-8"
              />
            </div>

            {/* Список товаров */}
            <div className="lg:col-span-3">
              {/* Заголовок с количеством и переключателем вида */}
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <h2 className="mb-2 text-2xl font-bold text-gray-900">
                    {listTitle}
                  </h2>
                  <p className="text-gray-600">
                    Найдено {filteredProducts.length} товаров
                  </p>
                  {!isSearching && selectedCategoryInfo?.name && (
                    <p className="mt-2 max-w-3xl text-sm text-gray-600">
                      Категория:{' '}
                      <span className="font-medium">
                        {selectedCategoryInfo.name}
                      </span>
                      . Уточните наличие и стоимость по телефону — поможем
                      подобрать размеры/марки и организуем доставку.
                    </p>
                  )}
                </div>

                {/* Переключатель вида */}
                <ViewToggle currentView={viewMode} onViewChange={setViewMode} />
              </div>

              {/* Список товаров */}
              {loading ? (
                <div className="py-20 text-center">
                  <div className="mb-4 text-6xl text-gray-400">⏳</div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">
                    Загрузка каталога...
                  </h3>
                  <p className="text-gray-600">Пожалуйста, подождите</p>
                </div>
              ) : paginatedProducts.length === 0 ? (
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
