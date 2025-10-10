import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';
import slugify from 'slugify';

// Интерфейсы для типизации
interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
  subcategories?: Subcategory[];
}

interface Subcategory {
  id: number;
  name: string;
  slug: string;
  product_count?: number;
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

// Структура данных из JSON файлов
interface JsonProduct {
  productGroup: string;
  productName: string;
  unit: string;
}

// Функция создания slug из текста (транслитерация через библиотеку slugify)
function createSlug(text: string): string {
  return slugify(text, {
    lower: true,
    strict: true,
    locale: 'ru',
  });
}

// ⚙️ Конфигурация категорий (теперь с соответствием папок)
// Ключ = название папки в src/data/
// Значение = название и описание категории
const CATEGORIES_CONFIG = {
  'metal-rolling': {
    name: 'Металлопрокат',
    description: 'Черный металлопрокат',
  },
  'stainless-steel': {
    name: 'Нержавеющая сталь',
    description: 'Нержавеющий металлопрокат',
  },
  'non-ferrous-metals': {
    name: 'Цветные металлы',
    description: 'Цветной металлопрокат',
  },
};

// Функция для динамической загрузки всех JSON файлов из категории
function loadCategoryData(categorySlug: string): JsonProduct[] {
  const categoryPath = join(process.cwd(), 'src', 'data', categorySlug);

  try {
    // Читаем все файлы в папке категории
    const files = readdirSync(categoryPath).filter((file) =>
      file.endsWith('.json')
    );

    const allProducts: JsonProduct[] = [];

    // Загружаем каждый JSON файл
    files.forEach((file) => {
      const filePath = join(categoryPath, file);
      const fileContent = readFileSync(filePath, 'utf-8');
      const products = JSON.parse(fileContent) as JsonProduct[];
      allProducts.push(...products);
    });

    return allProducts;
  } catch (error) {
    console.warn(
      `Не удалось загрузить данные для категории ${categorySlug}:`,
      error
    );
    return [];
  }
}

// Загружаем все данные динамически
function loadAllData(): Record<
  string,
  {
    name: string;
    description: string;
    products: JsonProduct[];
    folderName: string;
  }
> {
  const allData: Record<
    string,
    {
      name: string;
      description: string;
      products: JsonProduct[];
      folderName: string;
    }
  > = {};

  Object.entries(CATEGORIES_CONFIG).forEach(([folderName, categoryInfo]) => {
    // Генерируем slug из названия категории через транслитерацию
    const categorySlug = createSlug(categoryInfo.name);

    allData[categorySlug] = {
      name: categoryInfo.name,
      description: categoryInfo.description,
      products: loadCategoryData(folderName), // Загружаем из папки с английским названием
      folderName: folderName,
    };
  });

  return allData;
}

// Генерируем уникальные ID для товаров
let productIdCounter = 1;

// Преобразуем JSON данные в формат Product
function transformJsonToProducts(): Product[] {
  const allData = loadAllData();
  const allProducts: Product[] = [];

  Object.entries(allData).forEach(([categorySlug, categoryData]) => {
    categoryData.products.forEach((jsonProduct) => {
      // Создаем slug для подкатегории через транслитерацию
      const subcategorySlug = createSlug(jsonProduct.productGroup);

      allProducts.push({
        id: productIdCounter++,
        product_name: jsonProduct.productName,
        product_group: jsonProduct.productGroup,
        unit: jsonProduct.unit,
        category_name: categoryData.name,
        category_slug: categorySlug,
        subcategory_name: jsonProduct.productGroup,
        subcategory_slug: subcategorySlug,
      });
    });
  });

  return allProducts;
}

// Получаем все категории с субкатегориями
export function getCategoriesFromJson(): Category[] {
  const allData = loadAllData();
  const categories: Category[] = [];

  Object.entries(allData).forEach(([categorySlug, categoryData], index) => {
    // Группируем продукты по productGroup для создания субкатегорий
    const subcategoryGroups = new Map<string, number>();

    categoryData.products.forEach((product) => {
      const count = subcategoryGroups.get(product.productGroup) || 0;
      subcategoryGroups.set(product.productGroup, count + 1);
    });

    const subcategories: Subcategory[] = Array.from(
      subcategoryGroups.entries()
    ).map(([name, count], subIndex) => ({
      id: subIndex + 1,
      name,
      slug: createSlug(name), // Используем транслитерацию
      product_count: count,
    }));

    categories.push({
      id: index + 1,
      name: categoryData.name,
      slug: categorySlug,
      description: categoryData.description,
      subcategories,
    });
  });

  return categories;
}

// Получаем все товары
export function getAllProductsFromJson(): Product[] {
  return transformJsonToProducts();
}

// Получаем товары по категории с пагинацией
export function getProductsByCategoryFromJson(
  categorySlug: string,
  page: number = 1,
  limit: number = 50
): {
  products: Product[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    offset: number;
  };
} {
  const allProducts = transformJsonToProducts();
  let filteredProducts: Product[];

  if (categorySlug === 'all') {
    filteredProducts = allProducts;
  } else {
    filteredProducts = allProducts.filter(
      (product) => product.category_slug === categorySlug
    );
  }

  // Применяем пагинацию
  const total = filteredProducts.length;
  const totalPages = Math.ceil(total / limit);
  const offset = (page - 1) * limit;
  const paginatedProducts = filteredProducts.slice(offset, offset + limit);

  return {
    products: paginatedProducts,
    pagination: {
      page,
      limit,
      total,
      totalPages,
      offset,
    },
  };
}

// Получаем товары по субкатегории с пагинацией
export function getProductsBySubcategoryFromJson(
  subcategorySlug: string,
  page: number = 1,
  limit: number = 50
): {
  products: Product[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    offset: number;
  };
} {
  const allProducts = transformJsonToProducts();
  const filteredProducts = allProducts.filter(
    (product) => product.subcategory_slug === subcategorySlug
  );

  // Применяем пагинацию
  const total = filteredProducts.length;
  const totalPages = Math.ceil(total / limit);
  const offset = (page - 1) * limit;
  const paginatedProducts = filteredProducts.slice(offset, offset + limit);

  return {
    products: paginatedProducts,
    pagination: {
      page,
      limit,
      total,
      totalPages,
      offset,
    },
  };
}

// Поиск товаров
export function searchProductsFromJson(query: string): Product[] {
  const allProducts = transformJsonToProducts();
  const searchLower = query.toLowerCase();

  return allProducts.filter(
    (product) =>
      product.product_name.toLowerCase().includes(searchLower) ||
      product.product_group.toLowerCase().includes(searchLower) ||
      product.category_name.toLowerCase().includes(searchLower)
  );
}

// Получаем статистику каталога
export function getCatalogStatsFromJson() {
  const allProducts = transformJsonToProducts();
  const categories = getCategoriesFromJson();

  const productsByCategory = categories.map((category) => {
    const categoryProducts = allProducts.filter(
      (product) => product.category_slug === category.slug
    );

    return {
      name: category.name,
      slug: category.slug,
      count: categoryProducts.length,
      subcategories: category.subcategories,
    };
  });

  return {
    totalProducts: allProducts.length,
    totalCategories: categories.length,
    productsByCategory,
  };
}
