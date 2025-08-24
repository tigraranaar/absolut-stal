import { NextResponse } from 'next/server';
import { getCatalogStats } from '@/lib/database';

export async function GET() {
  try {
    const stats = getCatalogStats();

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
