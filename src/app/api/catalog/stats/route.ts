import { NextResponse } from 'next/server';
import { getCatalogStatsFromJson } from '@/lib/catalog-data';

export async function GET() {
  try {
    const stats = getCatalogStatsFromJson();

    return NextResponse.json({
      success: true,
      data: stats,
    });
  } catch (error) {
    console.error('Ошибка получения статистики:', error);

    return NextResponse.json(
      {
        success: false,
        error: 'Ошибка получения статистики',
      },
      { status: 500 }
    );
  }
}
