#!/usr/bin/env tsx

import {
  initDatabase,
  initCategories,
  importProductsFromJson,
  closeDatabase,
} from '../src/lib/database';

async function main() {
  console.log('🚀 Инициализация базы данных каталога...');

  try {
    // Инициализируем БД
    console.log('📊 Создание таблиц...');
    initDatabase();

    // Создаем базовые категории
    console.log('📁 Создание категорий...');
    initCategories();

    // Импортируем товары из JSON
    console.log('📦 Импорт товаров...');
    await importProductsFromJson();

    console.log('✅ База данных успешно инициализирована!');
  } catch (error) {
    console.error('❌ Ошибка инициализации:', error);
    process.exit(1);
  } finally {
    // Закрываем соединение
    closeDatabase();
  }
}

// Запускаем скрипт
if (require.main === module) {
  main();
}
