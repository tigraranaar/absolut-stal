import { writeFileSync } from 'fs';
import { join } from 'path';
import {
  getCategoriesFromJson,
  getAllProductsFromJson,
} from '../src/lib/catalog-data';

// Генерируем JSON файл с данными каталога для загрузки на клиенте
function generateCatalogData() {
  const categories = getCategoriesFromJson();
  const products = getAllProductsFromJson();

  const catalogData = {
    categories,
    products,
    generatedAt: new Date().toISOString(),
  };

  const outputPath = join(process.cwd(), 'public', 'catalog-data.json');
  writeFileSync(outputPath, JSON.stringify(catalogData), 'utf-8');

  console.log(
    `✅ Generated catalog data: ${categories.length} categories, ${products.length} products`
  );
  console.log(`📁 Saved to: ${outputPath}`);
}

generateCatalogData();
