'use client';

import React, { useState, useEffect } from 'react';
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

interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export default function CatalogPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(
    null
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('table');
  const [pagination, setPagination] = useState<Pagination>({
    page: 1,
    limit: 25,
    total: 0,
    totalPages: 0,
  });

  // Загрузка категорий
  useEffect(() => {
    fetchCategories();
  }, []);

  // Загрузка товаров при изменении категории или субкатегории
  useEffect(() => {
    if (selectedSubcategory) {
      fetchProductsBySubcategory(selectedSubcategory, 1);
    } else if (selectedCategory) {
      fetchProductsByCategory(selectedCategory, 1);
    } else {
      fetchAllProducts(1);
    }
  }, [selectedCategory, selectedSubcategory]);

  // Загрузка всех товаров при инициализации страницы
  useEffect(() => {
    if (categories.length > 0) {
      fetchAllProducts(1);
    }
  }, [categories]);

  // Фильтрация товаров при изменении поиска
  useEffect(() => {
    filterProducts();
  }, [searchQuery, products]);

  const fetchCategories = async () => {
    try {
      const response = await fetch('/api/catalog/categories');
      const data = await response.json();

      if (data.success) {
        setCategories(data.data);
      } else {
        setError('Ошибка загрузки категорий');
      }
    } catch (error) {
      setError('Ошибка загрузки категорий');
    }
  };

  const fetchProductsByCategory = async (
    categorySlug: string,
    page: number = 1
  ) => {
    setLoading(true);
    try {
      const response = await fetch(
        `/api/catalog/products?category=${categorySlug}&page=${page}&limit=${pagination.limit}`
      );
      const data = await response.json();

      if (data.success) {
        setProducts(data.data);
        setPagination((prev) => ({
          ...prev,
          page,
          total: data.pagination?.total || data.data.length,
          totalPages:
            data.pagination?.totalPages ||
            Math.ceil(
              (data.pagination?.total || data.data.length) / pagination.limit
            ),
        }));
      } else {
        setError('Ошибка загрузки товаров');
      }
    } catch (error) {
      setError('Ошибка загрузки товаров');
    } finally {
      setLoading(false);
    }
  };

  const fetchProductsBySubcategory = async (
    subcategorySlug: string,
    page: number = 1
  ) => {
    setLoading(true);
    try {
      const response = await fetch(
        `/api/catalog/products?subcategory=${subcategorySlug}&page=${page}&limit=${pagination.limit}`
      );
      const data = await response.json();

      if (data.success) {
        setProducts(data.data);
        setPagination((prev) => ({
          ...prev,
          page,
          total: data.pagination?.total || data.data.length,
          totalPages:
            data.pagination?.totalPages ||
            Math.ceil(
              (data.pagination?.total || data.data.length) / pagination.limit
            ),
        }));
      } else {
        setError('Ошибка загрузки товаров');
      }
    } catch (error) {
      setError('Ошибка загрузки товаров');
    } finally {
      setLoading(false);
    }
  };

  const fetchAllProducts = async (page: number = 1) => {
    setLoading(true);
    try {
      // Загружаем товары из всех категорий с пагинацией
      const allProducts: Product[] = [];
      let totalProducts = 0;

      for (const category of categories) {
        const response = await fetch(
          `/api/catalog/products?category=${category.slug}&page=1&limit=1000`
        );
        const data = await response.json();

        if (data.success) {
          allProducts.push(...data.data);
          totalProducts += data.pagination?.total || data.data.length;
        }
      }

      // Применяем пагинацию к общему списку
      const startIndex = (page - 1) * pagination.limit;
      const endIndex = startIndex + pagination.limit;
      const paginatedProducts = allProducts.slice(startIndex, endIndex);

      setProducts(paginatedProducts);
      setPagination((prev) => ({
        ...prev,
        page,
        total: totalProducts,
        totalPages: Math.ceil(totalProducts / pagination.limit),
      }));
    } catch (error) {
      setError('Ошибка загрузки товаров');
    } finally {
      setLoading(false);
    }
  };

  const filterProducts = () => {
    let filtered = products;

    // Фильтрация по поиску
    if (searchQuery) {
      filtered = filtered.filter(
        (product) =>
          product.product_name
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          product.product_group
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleCategoryChange = (categorySlug: string | null) => {
    setSelectedCategory(categorySlug);
    setSelectedSubcategory(null);
    setSearchQuery(''); // Сбрасываем поиск при смене категории
    setPagination((prev) => ({ ...prev, page: 1 })); // Сбрасываем на первую страницу
  };

  const handleSubcategoryChange = (subcategorySlug: string | null) => {
    setSelectedSubcategory(subcategorySlug);
    setSearchQuery(''); // Сбрасываем поиск при смене субкатегории
    setPagination((prev) => ({ ...prev, page: 1 })); // Сбрасываем на первую страницу
  };

  const handleProductClick = (product: Product) => {
    // Здесь можно добавить логику для открытия детальной страницы товара
    console.log('Выбран товар:', product);
  };

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= pagination.totalPages) {
      if (selectedSubcategory) {
        fetchProductsBySubcategory(selectedSubcategory, newPage);
      } else if (selectedCategory) {
        fetchProductsByCategory(selectedCategory, newPage);
      } else {
        fetchAllProducts(newPage);
      }
    }
  };

  // Получаем название текущего уровня
  const getCurrentLevelName = () => {
    if (selectedSubcategory) {
      const category = categories.find((c) => c.slug === selectedCategory);
      const subcategory = category?.subcategories?.find(
        (s) => s.slug === selectedSubcategory
      );
      return subcategory?.name || 'Субкатегория';
    } else if (selectedCategory) {
      return (
        categories.find((c) => c.slug === selectedCategory)?.name || 'Категория'
      );
    } else {
      return 'Все товары';
    }
  };

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-4 text-6xl text-red-500">⚠️</div>
            <h1 className="mb-4 text-2xl font-bold text-gray-900">
              Произошла ошибка
            </h1>
            <p className="mb-8 text-gray-600">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="rounded-lg bg-yellow-500 px-6 py-3 font-medium text-gray-900 transition-colors hover:bg-yellow-600"
            >
              Попробовать снова
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero секция */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-6 text-4xl font-bold text-gray-900 lg:text-6xl">
            <span className="text-yellow-500">Каталог</span> товаров
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
                categories={categories}
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
                    {loading
                      ? 'Загрузка...'
                      : `Найдено ${pagination.total} товаров`}
                  </p>
                </div>

                {/* Переключатель вида */}
                <ViewToggle currentView={viewMode} onViewChange={setViewMode} />
              </div>

              {/* Загрузка */}
              {loading && (
                <div className="py-20 text-center">
                  <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2 border-yellow-600"></div>
                  <p className="text-gray-600">Загрузка товаров...</p>
                </div>
              )}

              {/* Список товаров */}
              {!loading && (
                <>
                  {filteredProducts.length === 0 ? (
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
                          {filteredProducts.map((product) => (
                            <ProductCard
                              key={product.id}
                              product={product}
                              onClick={handleProductClick}
                            />
                          ))}
                        </div>
                      ) : (
                        <ProductTable
                          products={filteredProducts}
                          onProductClick={handleProductClick}
                        />
                      )}

                      {/* Пагинация */}
                      {pagination.totalPages > 1 && (
                        <div className="mt-12 flex items-center justify-center">
                          <nav className="flex items-center space-x-2">
                            {/* Кнопка "Назад" */}
                            <button
                              onClick={() =>
                                handlePageChange(pagination.page - 1)
                              }
                              disabled={pagination.page === 1}
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
                                { length: Math.min(5, pagination.totalPages) },
                                (_, i) => {
                                  let pageNum;
                                  if (pagination.totalPages <= 5) {
                                    pageNum = i + 1;
                                  } else if (pagination.page <= 3) {
                                    pageNum = i + 1;
                                  } else if (
                                    pagination.page >=
                                    pagination.totalPages - 2
                                  ) {
                                    pageNum = pagination.totalPages - 4 + i;
                                  } else {
                                    pageNum = pagination.page - 2 + i;
                                  }

                                  return (
                                    <button
                                      key={pageNum}
                                      onClick={() => handlePageChange(pageNum)}
                                      className={`rounded-lg px-3 py-2 text-sm font-medium ${
                                        pageNum === pagination.page
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
                              onClick={() =>
                                handlePageChange(pagination.page + 1)
                              }
                              disabled={
                                pagination.page === pagination.totalPages
                              }
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
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
