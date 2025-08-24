import { NextRequest, NextResponse } from 'next/server';
import {
  getProductsByCategoryFromJson,
  getProductsBySubcategoryFromJson,
  searchProductsFromJson,
} from '@/lib/catalog-data';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const subcategory = searchParams.get('subcategory');
    const search = searchParams.get('search');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '50');

    let result;
    let totalCount = 0;

    if (search) {
      // Поиск по названию
      result = searchProductsFromJson(search);
      totalCount = result.length;
    } else if (subcategory) {
      // Фильтр по субкатегории
      const subcategoryResult = getProductsBySubcategoryFromJson(
        subcategory,
        page,
        limit
      );
      result = subcategoryResult.products;
      totalCount = subcategoryResult.pagination.total;
    } else if (category) {
      // Фильтр по категории
      const categoryResult = getProductsByCategoryFromJson(
        category,
        page,
        limit
      );
      result = categoryResult.products;
      totalCount = categoryResult.pagination.total;
    } else {
      // Все товары
      const allResult = getProductsByCategoryFromJson('all', page, limit);
      result = allResult.products;
      totalCount = allResult.pagination.total;
    }

    // Если пагинация уже применена в JSON функциях, используем её
    let paginatedResult = result;
    const totalPages = Math.ceil(totalCount / limit);

    // Если пагинация не была применена (например, для поиска), применяем её здесь
    if (search || (!category && !subcategory)) {
      const offset = (page - 1) * limit;
      paginatedResult = result.slice(offset, offset + limit);
    }

    return NextResponse.json({
      success: true,
      data: paginatedResult,
      pagination: {
        page,
        limit,
        total: totalCount,
        totalPages,
        offset: (page - 1) * limit,
      },
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}
