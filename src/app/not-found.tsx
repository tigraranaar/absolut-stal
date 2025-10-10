import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Страница не найдена - 404 | Абсолют Сталь',
  description:
    'Запрашиваемая страница не найдена. Вернитесь на главную страницу или перейдите в каталог металлопроката.',
  alternates: {
    canonical: 'https://absolut-stal.ru/404',
  },
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="mx-auto max-w-2xl px-4 text-center">
        <div className="mb-8">
          <h1 className="mb-4 text-9xl font-bold text-yellow-500">404</h1>
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            Страница не найдена
          </h2>
          <p className="mb-8 text-xl text-gray-600">
            К сожалению, запрашиваемая страница не существует или была удалена.
          </p>
        </div>

        <div className="space-y-4">
          <Link href="/">
            <button className="rounded-lg bg-yellow-500 px-8 py-3 font-medium text-gray-900 transition-colors hover:bg-yellow-600">
              Вернуться на главную
            </button>
          </Link>
          <p className="mt-2 text-sm text-gray-500">
            Или{' '}
            <Link
              href="/contacts"
              className="text-yellow-600 hover:text-yellow-700"
            >
              свяжитесь с нами
            </Link>
            , если нужна помощь
          </p>
        </div>
      </div>
    </div>
  );
}
