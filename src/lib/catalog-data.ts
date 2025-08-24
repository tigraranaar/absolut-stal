// Импортируем основные JSON файлы для каждой категории
import structuralSteelData from '../data/metal-rolling/structural-steel.json';
import pipesData from '../data/metal-rolling/pipes.json';
import platesData from '../data/metal-rolling/plates.json';
import roundsData from '../data/metal-rolling/rounds.json';
import sheetsData from '../data/metal-rolling/sheets-zinc-profiles.json';
import squaresData from '../data/metal-rolling/squares.json';
import hexagonsData from '../data/metal-rolling/hexagons.json';
import reinforcementData from '../data/metal-rolling/reinforcement.json';
import wireMeshData from '../data/metal-rolling/wire-mesh.json';
import corrugatedSheetsData from '../data/metal-rolling/corrugated-sheets.json';
import drywallProfilesData from '../data/metal-rolling/drywall-profiles.json';

import stainlessSheetsData from '../data/stainless-steel/stainless-sheets.json';
import stainlessPipesData from '../data/stainless-steel/stainless-welded-pipes.json';
import stainlessSeamlessPipesData from '../data/stainless-steel/stainless-seamless-pipes.json';
import stainlessRoundsData from '../data/stainless-steel/stainless-rounds.json';
import stainlessStructuralData from '../data/stainless-steel/stainless-structural.json';
import stainlessWireData from '../data/stainless-steel/stainless-wire.json';
import stainlessHexagonsData from '../data/stainless-steel/stainless-hexagons.json';
import stainlessProfilePipesData from '../data/stainless-steel/stainless-profile-pipes.json';
import stainlessFittingsData from '../data/stainless-steel/stainless-fittings.json';

import aluminumData from '../data/non-ferrous-metals/aluminum.json';
import copperData from '../data/non-ferrous-metals/copper.json';
import brassData from '../data/non-ferrous-metals/brass.json';
import bronzeData from '../data/non-ferrous-metals/bronze.json';
import duraluminData from '../data/non-ferrous-metals/duralumin.json';

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

// Загружаем все данные в память
const allData = {
  'metal-rolling': {
    name: 'Металлопрокат',
    description: 'Черный металлопрокат',
    products: [
      ...structuralSteelData,
      ...pipesData,
      ...platesData,
      ...roundsData,
      ...sheetsData,
      ...squaresData,
      ...hexagonsData,
      ...reinforcementData,
      ...wireMeshData,
      ...corrugatedSheetsData,
      ...drywallProfilesData,
    ] as JsonProduct[],
  },
  'stainless-steel': {
    name: 'Нержавеющая сталь',
    description: 'Нержавеющий металлопрокат',
    products: [
      ...stainlessSheetsData,
      ...stainlessPipesData,
      ...stainlessSeamlessPipesData,
      ...stainlessRoundsData,
      ...stainlessStructuralData,
      ...stainlessWireData,
      ...stainlessHexagonsData,
      ...stainlessProfilePipesData,
      ...stainlessFittingsData,
    ] as JsonProduct[],
  },
  'non-ferrous-metals': {
    name: 'Цветные металлы',
    description: 'Цветной металлопрокат',
    products: [
      ...aluminumData,
      ...copperData,
      ...brassData,
      ...bronzeData,
      ...duraluminData,
    ] as JsonProduct[],
  },
};

// Генерируем уникальные ID для товаров
let productIdCounter = 1;

// Преобразуем JSON данные в формат Product
function transformJsonToProducts(): Product[] {
  const allProducts: Product[] = [];

  Object.entries(allData).forEach(([categorySlug, categoryData]) => {
    categoryData.products.forEach((jsonProduct) => {
      // Создаем slug для productGroup
      const subcategorySlug = jsonProduct.productGroup
        .toLowerCase()
        .replace(/[^a-z0-9а-яё]/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');

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
  const categories: Category[] = [];
  const allProducts = transformJsonToProducts();

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
      slug: name
        .toLowerCase()
        .replace(/[^a-z0-9а-яё]/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, ''),
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
