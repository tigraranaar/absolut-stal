import { NextRequest, NextResponse } from 'next/server';
import {
  getProductsByCategory,
  getProductsBySubcategory,
  searchProducts,
} from '@/lib/database';

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
      result = await searchProducts(search);
      totalCount = result.length;
    } else if (subcategory) {
      // Фильтр по субкатегории
      result = await getProductsBySubcategory(subcategory);
      totalCount = result.length;
    } else if (category) {
      // Фильтр по категории
      result = await getProductsByCategory(category);
      totalCount = result.length;
    } else {
      // Все товары
      result = await getProductsByCategory('all');
      totalCount = result.length;
    }

    // Применяем пагинацию
    const offset = (page - 1) * limit;
    const paginatedResult = result.slice(offset, offset + limit);
    const totalPages = Math.ceil(totalCount / limit);

    return NextResponse.json({
      success: true,
      data: paginatedResult,
      pagination: {
        page,
        limit,
        total: totalCount,
        totalPages,
        offset,
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
