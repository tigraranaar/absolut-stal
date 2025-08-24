import React from 'react';

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

interface ProductCardProps {
  product: Product;
  onClick?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(product);
    }
  };

  return (
    <div
      className="group cursor-pointer rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md"
      onClick={handleClick}
    >
      <div className="p-6">
        {/* Иконка категории */}
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-100 text-yellow-600 transition-all duration-300 group-hover:bg-yellow-500 group-hover:text-white">
          {getCategoryIcon(product.category_slug)}
        </div>

        {/* Название товара */}
        <h3 className="mb-2 line-clamp-2 text-lg font-semibold text-gray-900 transition-colors group-hover:text-yellow-600">
          {product.product_name}
        </h3>

        {/* Субкатегория */}
        {product.subcategory_name && (
          <p className="mb-2 text-sm font-medium text-yellow-600">
            {product.subcategory_name}
          </p>
        )}

        {/* Группа товаров */}
        <p className="mb-3 line-clamp-1 text-sm text-gray-600">
          {product.product_group}
        </p>

        {/* Единица измерения */}
        <div className="flex items-center justify-between">
          <span className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-500">
            {product.unit}
          </span>

          {/* Категория */}
          <span className="text-xs font-medium text-yellow-600">
            {product.category_name}
          </span>
        </div>
      </div>

      {/* Hover эффект */}
      <div className="h-1 rounded-b-lg bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
    </div>
  );
};

// Функция для получения иконки категории
function getCategoryIcon(categorySlug: string) {
  switch (categorySlug) {
    case 'metal-rolling':
      return (
        <svg
          className="h-6 w-6"
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
          className="h-6 w-6"
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
          className="h-6 w-6"
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
          className="h-6 w-6"
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
}

export default ProductCard;
