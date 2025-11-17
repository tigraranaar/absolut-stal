import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';
import slugify from 'slugify';

// Интерфейсы для типизации
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
  [key: string]: string | number; // Для дополнительных полей из таблиц
}

// Структура данных из JSON файлов
interface JsonProduct {
  productGroup: string;
  productName: string;
  unit: string;
  [key: string]: string; // Для дополнительных полей из таблиц
}

// Функция создания slug из текста (транслитерация через библиотеку slugify)
function createSlug(text: string): string {
  return slugify(text, {
    lower: true,
    strict: true,
    locale: 'ru',
  });
}

// Функция для Capitalize (первая буква каждого слова заглавная, остальные строчные)
function capitalize(text: string): string {
  if (!text) return text;
  return text
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

// Функция для загрузки всех категорий из JSON файлов
function loadAllCategories(): Map<
  string,
  { name: string; products: JsonProduct[] }
> {
  const categoriesDir = join(process.cwd(), 'src', 'data', 'categories');
  const categoriesMap = new Map<
    string,
    { name: string; products: JsonProduct[] }
  >();

  try {
    // Читаем все JSON файлы в папке categories
    const files = readdirSync(categoriesDir).filter((file) =>
      file.endsWith('.json')
    );

    files.forEach((file) => {
      const filePath = join(categoriesDir, file);
      const fileContent = readFileSync(filePath, 'utf-8');
      const products = JSON.parse(fileContent) as JsonProduct[];

      if (products.length > 0) {
        // Название категории берется из productGroup (одинаковое для всех товаров в файле)
        const rawCategoryName = products[0].productGroup;
        const categoryName = capitalize(rawCategoryName);
        const categorySlug = createSlug(rawCategoryName);

        // Если категория уже существует, объединяем продукты
        if (categoriesMap.has(categorySlug)) {
          const existing = categoriesMap.get(categorySlug)!;
          existing.products.push(...products);
        } else {
          categoriesMap.set(categorySlug, {
            name: categoryName,
            products,
          });
        }
      }
    });
  } catch (error) {
    console.error('Ошибка при загрузке категорий:', error);
  }

  return categoriesMap;
}

// Генерируем уникальные ID для товаров
let productIdCounter = 1;

// Преобразуем JSON данные в формат Product
function transformJsonToProducts(): Product[] {
  const categoriesMap = loadAllCategories();
  const allProducts: Product[] = [];

  categoriesMap.forEach((categoryData, categorySlug) => {
    categoryData.products.forEach((jsonProduct) => {
      const product: Product = {
        id: productIdCounter++,
        product_name: jsonProduct.productName,
        product_group: jsonProduct.productGroup,
        unit: jsonProduct.unit,
        category_name: categoryData.name,
        category_slug: categorySlug,
      };

      // Добавляем дополнительные поля из JSON (например, диаметр, марка и т.д.)
      Object.keys(jsonProduct).forEach((key) => {
        if (!['productGroup', 'productName', 'unit'].includes(key)) {
          product[key] = jsonProduct[key];
        }
      });

      allProducts.push(product);
    });
  });

  return allProducts;
}

// Получаем все категории (без субкатегорий)
export function getCategoriesFromJson(): Category[] {
  const categoriesMap = loadAllCategories();
  const categories: Category[] = [];
  let index = 0;

  categoriesMap.forEach((categoryData, categorySlug) => {
    categories.push({
      id: ++index,
      name: categoryData.name,
      slug: categorySlug,
      description: `Каталог ${categoryData.name.toLowerCase()}`,
      product_count: categoryData.products.length,
    });
  });

  // Сортируем по названию для консистентности
  return categories.sort((a, b) => a.name.localeCompare(b.name));
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
    };
  });

  return {
    totalProducts: allProducts.length,
    totalCategories: categories.length,
    productsByCategory,
  };
}

// Получаем SEO-данные для категории по slug
export function getCategorySeoData(categorySlug: string): {
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
} | null {
  const categories = getCategoriesFromJson();
  const category = categories.find((c) => c.slug === categorySlug);

  if (!category) {
    return null;
  }

  // Генерируем SEO-данные на основе названия категории
  return {
    seoTitle: `${category.name} в Ижевске — купить с доставкой | Абсолют Сталь`,
    seoDescription: `${category.name}: большой выбор размеров и марок на складе в Ижевске. ${category.product_count} позиций. Доставка по Удмуртии. Звоните!`,
    seoKeywords: `${category.name.toLowerCase()}, купить ${category.name.toLowerCase()} Ижевск, металлопрокат ${category.name.toLowerCase()}`,
  };
}
