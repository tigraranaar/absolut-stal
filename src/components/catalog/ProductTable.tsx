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

interface ProductTableProps {
  products: Product[];
  onProductClick?: (product: Product) => void;
  className?: string;
}

const ProductTable: React.FC<ProductTableProps> = ({
  products,
  onProductClick,
  className = '',
}) => {
  const handleRowClick = (product: Product) => {
    if (onProductClick) {
      onProductClick(product);
    }
  };

  // Получаем все дополнительные поля из продуктов (кроме стандартных)
  const standardFields = [
    'id',
    'product_name',
    'product_group',
    'unit',
    'category_name',
    'category_slug',
  ];
  const additionalFields =
    products.length > 0
      ? Object.keys(products[0]).filter((key) => !standardFields.includes(key))
      : [];

  return (
    <div
      className={`overflow-hidden rounded-lg border border-gray-200 bg-white ${className}`}
    >
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                Название товара
              </th>
              {additionalFields.map((field) => (
                <th
                  key={field}
                  className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
                >
                  {field.charAt(0).toUpperCase() +
                    field.slice(1).replace(/_/g, ' ')}
                </th>
              ))}
              <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                Ед. измерения
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {products.map((product) => (
              <tr
                key={product.id}
                onClick={() => handleRowClick(product)}
                className="cursor-pointer transition-colors hover:bg-gray-100"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {product.product_name}
                  </div>
                </td>
                {additionalFields.map((field) => (
                  <td key={field} className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-900">
                      {String(product[field] || '')}
                    </span>
                  </td>
                ))}
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-800">
                    {product.unit}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;
