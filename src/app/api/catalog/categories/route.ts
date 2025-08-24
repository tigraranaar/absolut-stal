import { NextResponse } from 'next/server';
import { getCategoriesFromJson } from '@/lib/catalog-data';

export async function GET() {
  try {
    const categories = getCategoriesFromJson();

    return NextResponse.json({
      success: true,
      data: categories,
    });
  } catch (error) {
    console.error('Ошибка получения категорий:', error);

    return NextResponse.json(
      {
        success: false,
        error: 'Ошибка получения категорий',
      },
      { status: 500 }
    );
  }
}
