import Database from 'better-sqlite3';
import path from 'path';

// Интерфейсы для типизации
interface Category {
  id: number;
  name: string;
  slug: string;
  parent_id?: number;
  sort_order?: number;
  description?: string;
  created_at?: string;
}

interface Subcategory {
  id: number;
  category_id: number;
  name: string;
  slug: string;
  sort_order?: number;
  created_at?: string;
  product_count?: number;
}

interface Product {
  id: number;
  category_id: number;
  subcategory_id: number;
  product_group: string;
  product_name: string;
  unit: string;
  specifications?: string;
  created_at?: string;
  updated_at?: string;
  category_name?: string;
  category_slug?: string;
  subcategory_name?: string;
  subcategory_slug?: string;
}

interface CategoryStats {
  name: string;
  slug: string;
  count: number;
  subcategories?: Subcategory[];
}

// Путь к файлу БД
const dbPath = path.join(process.cwd(), 'data', 'catalog.db');

// Создание подключения к БД
let db: Database.Database;

// Инициализация БД
export function initDatabase() {
  if (!db) {
    db = new Database(dbPath);

    // Включаем WAL режим для лучшей производительности
    db.pragma('journal_mode = WAL');

    // Создаем таблицы если их нет
    createTables();

    // Создаем индексы
    createIndexes();
  }
  return db;
}

// Создание таблиц
function createTables() {
  // Таблица категорий
  db.exec(`
    CREATE TABLE IF NOT EXISTS categories (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      slug TEXT UNIQUE NOT NULL,
      parent_id INTEGER,
      sort_order INTEGER DEFAULT 0,
      description TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Таблица субкатегорий (product groups)
  db.exec(`
    CREATE TABLE IF NOT EXISTS subcategories (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      category_id INTEGER NOT NULL,
      name TEXT NOT NULL,
      slug TEXT NOT NULL,
      sort_order INTEGER DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (category_id) REFERENCES categories (id),
      UNIQUE(category_id, slug)
    )
  `);

  // Таблица товаров
  db.exec(`
    CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      category_id INTEGER NOT NULL,
      subcategory_id INTEGER NOT NULL,
      product_group TEXT NOT NULL,
      product_name TEXT NOT NULL,
      unit TEXT,
      specifications TEXT, -- JSON строка с характеристиками
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (category_id) REFERENCES categories (id),
      FOREIGN KEY (subcategory_id) REFERENCES subcategories (id)
    )
  `);

  // Таблица поиска (для полнотекстового поиска)
  db.exec(`
    CREATE VIRTUAL TABLE IF NOT EXISTS products_search USING fts5(
      product_name,
      product_group,
      specifications,
      content='products',
      content_rowid='id'
    )
  `);
}

// Создание индексов
function createIndexes() {
  db.exec(`
    CREATE INDEX IF NOT EXISTS idx_products_category ON products(category_id);
    CREATE INDEX IF NOT EXISTS idx_products_subcategory ON products(subcategory_id);
    CREATE INDEX IF NOT EXISTS idx_products_group ON products(product_group);
    CREATE INDEX IF NOT EXISTS idx_products_name ON products(product_name);
    CREATE INDEX IF NOT EXISTS idx_categories_slug ON categories(slug);
    CREATE INDEX IF NOT EXISTS idx_categories_parent ON categories(parent_id);
    CREATE INDEX IF NOT EXISTS idx_subcategories_category ON subcategories(category_id);
    CREATE INDEX IF NOT EXISTS idx_subcategories_slug ON subcategories(slug);
  `);
}

// Получение подключения к БД
export function getDatabase() {
  if (!db) {
    initDatabase();
  }
  return db;
}

// Закрытие подключения
export function closeDatabase() {
  if (db) {
    db.close();
  }
}

// Инициализация базовых категорий
export function initCategories() {
  const db = getDatabase();

  const categories = [
    {
      name: 'Металлопрокат',
      slug: 'metal-rolling',
      description: 'Черный металлопрокат',
    },
    {
      name: 'Нержавеющая сталь',
      slug: 'stainless-steel',
      description: 'Нержавеющий металлопрокат',
    },
    {
      name: 'Цветные металлы',
      slug: 'non-ferrous-metals',
      description: 'Цветной металлопрокат',
    },
  ];

  const insertCategory = db.prepare(`
    INSERT OR IGNORE INTO categories (name, slug, description) 
    VALUES (?, ?, ?)
  `);

  for (const category of categories) {
    insertCategory.run(category.name, category.slug, category.description);
  }
}

// Импорт товаров из JSON файлов
export async function importProductsFromJson() {
  const db = getDatabase();

  try {
    // Импорт металлопроката
    const metalRollingData = await import(
      '../data/metal-rolling/structural-steel.json'
    );
    await importProducts('metal-rolling', metalRollingData.default);

    // Импорт нержавейки
    const stainlessData = await import(
      '../data/stainless-steel/stainless-sheets.json'
    );
    await importProducts('stainless-steel', stainlessData.default);

    // Импорт цветных металлов
    const aluminumData = await import(
      '../data/non-ferrous-metals/aluminum.json'
    );
    await importProducts('non-ferrous-metals', aluminumData.default);

    console.log('✅ Импорт товаров завершен');
  } catch (error) {
    console.error('❌ Ошибка импорта:', error);
  }
}

// Импорт товаров в БД
async function importProducts(
  categorySlug: string,
  products: Array<{ productGroup: string; productName: string; unit: string }>
) {
  const db = getDatabase();

  // Получаем ID категории
  const categoryResult = db
    .prepare('SELECT id FROM categories WHERE slug = ?')
    .get(categorySlug) as Category | undefined;

  const categoryId = categoryResult?.id;

  if (!categoryId) {
    console.error(`Категория ${categorySlug} не найдена`);
    return;
  }

  // Создаем субкатегории из productGroup
  const subcategoryGroups = [...new Set(products.map((p) => p.productGroup))];

  for (const groupName of subcategoryGroups) {
    const slug = groupName
      .toLowerCase()
      .replace(/[^a-z0-9а-яё]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');

    // Проверяем, существует ли уже субкатегория
    const existingSubcategory = db
      .prepare(
        'SELECT id FROM subcategories WHERE category_id = ? AND slug = ?'
      )
      .get(categoryId, slug) as Subcategory | undefined;

    if (!existingSubcategory) {
      db.prepare(
        `
        INSERT INTO subcategories (category_id, name, slug)
        VALUES (?, ?, ?)
      `
      ).run(categoryId, groupName, slug);
    }
  }

  // Получаем все субкатегории для этой категории
  const subcategories = db
    .prepare('SELECT id, name, slug FROM subcategories WHERE category_id = ?')
    .all(categoryId) as Subcategory[];

  const insertProduct = db.prepare(`
    INSERT OR IGNORE INTO products (category_id, subcategory_id, product_group, product_name, unit)
    VALUES (?, ?, ?, ?, ?)
  `);

  const transaction = db.transaction(() => {
    for (const product of products) {
      // Находим соответствующую субкатегорию
      const subcategory = subcategories.find(
        (s) => s.name === product.productGroup
      );

      if (subcategory) {
        insertProduct.run(
          categoryId,
          subcategory.id,
          product.productGroup,
          product.productName,
          product.unit
        );
      }
    }
  });

  transaction();
  console.log(
    `✅ Импортировано ${products.length} товаров в категорию ${categorySlug}`
  );
}

// Получение всех категорий с субкатегориями
export function getCategories() {
  const db = getDatabase();
  const categories = db
    .prepare('SELECT * FROM categories ORDER BY sort_order, name')
    .all() as Category[];

  // Добавляем субкатегории для каждой категории
  return categories.map((category) => {
    const subcategories = db
      .prepare(
        `
        SELECT s.*, COUNT(p.id) as product_count
        FROM subcategories s
        LEFT JOIN products p ON s.id = p.subcategory_id
        WHERE s.category_id = ?
        GROUP BY s.id, s.name, s.slug
        ORDER BY s.sort_order, s.name
      `
      )
      .all(category.id) as Subcategory[];

    return {
      ...category,
      subcategories,
    };
  });
}

// Получение субкатегорий по категории
export function getSubcategoriesByCategory(
  categorySlug: string
): Subcategory[] {
  const db = getDatabase();

  const categoryId = db
    .prepare('SELECT id FROM categories WHERE slug = ?')
    .get(categorySlug) as Category | undefined;

  if (!categoryId) return [];

  return db
    .prepare(
      `
      SELECT s.*, COUNT(p.id) as product_count
      FROM subcategories s
      LEFT JOIN products p ON s.id = p.subcategory_id
      WHERE s.category_id = ?
      GROUP BY s.id, s.name, s.slug
      ORDER BY s.sort_order, s.name
    `
    )
    .all(categoryId.id) as Subcategory[];
}

// Получение товаров по категории
export async function getProductsByCategory(
  categorySlug: string,
  limit?: number,
  offset?: number
): Promise<Product[]> {
  try {
    const db = getDatabase();

    let query: string;
    let params: (string | number)[] = [];

    if (categorySlug === 'all') {
      // Получаем все товары из всех категорий
      query = `
        SELECT 
          p.id,
          p.category_id,
          p.subcategory_id,
          p.product_group,
          p.product_name,
          p.unit,
          p.specifications,
          p.created_at,
          p.updated_at,
          c.name as category_name,
          c.slug as category_slug,
          s.name as subcategory_name,
          s.slug as subcategory_slug
        FROM products p
        JOIN categories c ON p.category_id = c.id
        JOIN subcategories s ON p.subcategory_id = s.id
        ORDER BY p.id
      `;
    } else {
      // Получаем товары по конкретной категории
      query = `
        SELECT 
          p.id,
          p.category_id,
          p.subcategory_id,
          p.product_group,
          p.product_name,
          p.unit,
          p.specifications,
          p.created_at,
          p.updated_at,
          c.name as category_name,
          c.slug as category_slug,
          s.name as subcategory_name,
          s.slug as subcategory_slug
        FROM products p
        JOIN categories c ON p.category_id = c.id
        JOIN subcategories s ON p.subcategory_id = s.id
        WHERE c.slug = ?
        ORDER BY p.id
      `;
      params = [categorySlug];
    }

    // Применяем лимит и смещение если указаны
    if (limit !== undefined) {
      query += ` LIMIT ?`;
      params.push(limit);

      if (offset !== undefined) {
        query += ` OFFSET ?`;
        params.push(offset);
      }
    }

    const stmt = db.prepare(query);
    const products = stmt.all(...params) as Product[];

    return products;
  } catch (error) {
    console.error('Error getting products by category:', error);
    return [];
  }
}

// Получение товаров по субкатегории
export async function getProductsBySubcategory(
  subcategorySlug: string,
  limit?: number,
  offset?: number
): Promise<Product[]> {
  try {
    const db = getDatabase();

    let query = `
      SELECT 
        p.id,
        p.category_id,
        p.subcategory_id,
        p.product_group,
        p.product_name,
        p.unit,
        p.specifications,
        p.created_at,
        p.updated_at,
        c.name as category_name,
        c.slug as category_slug,
        s.name as subcategory_name,
        s.slug as subcategory_slug
      FROM products p
      JOIN categories c ON p.category_id = c.id
      JOIN subcategories s ON p.subcategory_id = s.id
      WHERE s.slug = ?
      ORDER BY p.id
    `;

    const params: (string | number)[] = [subcategorySlug];

    // Применяем лимит и смещение если указаны
    if (limit !== undefined) {
      query += ` LIMIT ?`;
      params.push(limit);

      if (offset !== undefined) {
        query += ` OFFSET ?`;
        params.push(offset);
      }
    }

    const stmt = db.prepare(query);
    const products = stmt.all(...params) as Product[];

    return products;
  } catch (error) {
    console.error('Error getting products by subcategory:', error);
    return [];
  }
}

// Поиск товаров
export function searchProducts(query: string): Product[] {
  const db = getDatabase();

  const stmt = db.prepare(`
    SELECT 
      p.id,
      p.category_id,
      p.subcategory_id,
      p.product_group,
      p.product_name,
      p.unit,
      p.specifications,
      p.created_at,
      p.updated_at,
      c.name as category_name,
      c.slug as category_slug,
      s.name as subcategory_name,
      s.slug as subcategory_slug
    FROM products p
    JOIN categories c ON p.category_id = c.id
    JOIN subcategories s ON p.subcategory_id = s.id
    WHERE p.product_name LIKE ? OR p.product_group LIKE ?
    ORDER BY p.product_name
  `);

  const searchPattern = `%${query}%`;
  return stmt.all(searchPattern, searchPattern) as Product[];
}

// Получение статистики каталога
export function getCatalogStats() {
  const db = getDatabase();

  const totalProducts = db
    .prepare('SELECT COUNT(*) as count FROM products')
    .get() as { count: number };
  const totalCategories = db
    .prepare('SELECT COUNT(*) as count FROM categories')
    .get() as { count: number };

  const productsByCategory = db
    .prepare(
      `
        SELECT c.name, c.slug, COUNT(p.id) as count
        FROM categories c
        LEFT JOIN products p ON c.id = p.category_id
        GROUP BY c.id, c.name, c.slug
        ORDER BY count DESC
      `
    )
    .all() as CategoryStats[];

  // Добавляем субкатегории для каждой категории
  const categoriesWithSubcategories = productsByCategory.map((category) => {
    const subcategories = db
      .prepare(
        `
        SELECT s.name, s.slug, COUNT(p.id) as product_count
        FROM subcategories s
        LEFT JOIN products p ON s.id = p.subcategory_id
        JOIN categories c ON s.category_id = c.id
        WHERE c.slug = ?
        GROUP BY s.id, s.name, s.slug
        ORDER BY s.sort_order, s.name
      `
      )
      .all(category.slug) as Subcategory[];

    return {
      ...category,
      subcategories,
    };
  });

  return {
    totalProducts: totalProducts.count,
    totalCategories: totalCategories.count,
    productsByCategory: categoriesWithSubcategories,
  };
}
