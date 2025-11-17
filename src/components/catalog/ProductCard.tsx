import React from 'react';

interface Product {
  id: number;
  product_name: string;
  product_group: string;
  unit: string;
  category_name: string;
  category_slug: string;
  [key: string]: string | number;
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
        </div>

        {/* Название товара */}
        <h3 className="mb-2 line-clamp-2 text-lg font-semibold text-gray-900 transition-colors group-hover:text-yellow-600">
          {product.product_name}
        </h3>

        {/* Дополнительные характеристики */}
        {Object.keys(product)
          .filter(
            (key) =>
              ![
                'id',
                'product_name',
                'product_group',
                'unit',
                'category_name',
                'category_slug',
              ].includes(key)
          )
          .slice(0, 2)
          .map((key) => (
            <p key={key} className="mb-1 text-xs text-gray-500">
              <span className="font-medium">{key.replace(/_/g, ' ')}:</span>{' '}
              {String(product[key])}
            </p>
          ))}

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

export default ProductCard;
