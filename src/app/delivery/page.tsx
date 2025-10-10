import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Доставка и оплата - Абсолют Сталь | Металлопрокат в Ижевске',
  description:
    'Условия доставки металлопроката собственным автопарком и способы оплаты. Доставка по всей Удмуртской Республике и близлежащим регионам.',
  alternates: {
    canonical: 'https://absolut-stal.ru/delivery',
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://absolut-stal.ru/delivery',
    siteName: 'Абсолют Сталь, Ижевск',
    title: 'Доставка и оплата - Абсолют Сталь | Металлопрокат в Ижевске',
    description:
      'Условия доставки металлопроката собственным автопарком и способы оплаты. Доставка по всей Удмуртской Республике и близлежащим регионам.',
    images: [
      {
        url: 'https://absolut-stal.ru/images/logo.png',
        width: 800,
        height: 600,
        alt: 'Абсолют Сталь - Доставка и оплата',
      },
    ],
  },
};

export default function DeliveryPage() {
  const deliveryVehicles = [
    {
      name: 'Газель',
      capacity: 'до 1,5 тонн',
      length: 'до 6м',
      icon: (
        <svg
          className="h-12 w-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      name: 'ГАЗон',
      capacity: 'до 5 тонн',
      length: 'до 6м',
      icon: (
        <svg
          className="h-12 w-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      name: 'МАЗ',
      capacity: 'до 20 тонн',
      length: 'до 13,7м',
      icon: (
        <svg
          className="h-12 w-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

  const paymentMethods = [
    {
      name: 'Безналичный платеж',
      description: 'Оплата по счету для юридических лиц',
      icon: (
        <svg
          className="h-8 w-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      name: 'Платежный терминал',
      description: 'Оплата картой в офисе компании',
      icon: (
        <svg
          className="h-8 w-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
      ),
    },
    {
      name: 'Электронные платежи',
      description: 'Яндекс.Деньги, Qiwi, BTC',
      icon: (
        <svg
          className="h-8 w-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
  ];

  const deliveryFeatures = [
    {
      icon: (
        <svg
          className="h-8 w-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
        </svg>
      ),
      title: 'Собственный автопарк',
      description: 'Полный контроль над процессом доставки',
    },
    {
      icon: (
        <svg
          className="h-8 w-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: 'Быстрая доставка',
      description: 'Доставка в день заказа при наличии товара',
    },
    {
      icon: (
        <svg
          className="h-8 w-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
      title: 'Манипулятор',
      description: 'Возможна выгрузка манипулятором',
    },
    {
      icon: (
        <svg
          className="h-8 w-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      title: 'Авиадоставка',
      description: 'Доставка в отдаленные регионы',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero секция */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-6 text-4xl font-bold text-gray-900 lg:text-6xl">
            Доставка и <span className="text-yellow-500">оплата</span>
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Удобные способы доставки металлопроката собственным автопарком и
            гибкие варианты оплаты для всех клиентов
          </p>
        </div>
      </section>

      {/* Доставка */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">Доставка</h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Продукция доставляется собственным парком специализированных
              грузовых автомобилей
            </p>
          </div>

          {/* Автопарк */}
          <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {deliveryVehicles.map((vehicle, index) => (
              <div
                key={index}
                className="group rounded-2xl bg-gray-50 p-8 text-center"
              >
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full text-gray-600">
                  {vehicle.icon}
                </div>
                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  {vehicle.name}
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p>
                    <span className="font-semibold">Грузоподъемность:</span>{' '}
                    {vehicle.capacity}
                  </p>
                  <p>
                    <span className="font-semibold">Длина кузова:</span>{' '}
                    {vehicle.length}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Особенности доставки */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {deliveryFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full text-gray-600">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Оплата */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">Оплата</h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Гибкие способы оплаты для удобства наших клиентов
            </p>
          </div>

          {/* Способы оплаты */}
          <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {paymentMethods.map((method, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full text-gray-600">
                  {method.icon}
                </div>
                <h3 className="mb-3 text-center text-xl font-semibold text-gray-900">
                  {method.name}
                </h3>
                <p className="text-center text-gray-600">
                  {method.description}
                </p>
              </div>
            ))}
          </div>

          {/* Условия оплаты */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm lg:p-12">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <h3 className="mb-6 text-2xl font-bold text-gray-900">
                  Условия оплаты
                </h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Условия оплаты и сроки обговариваются индивидуально с каждым
                    клиентом в зависимости от объема заказа.
                  </p>
                  <p>
                    Крупным оптовым заказчикам предоставляются скидки и
                    специальные условия сотрудничества.
                  </p>
                </div>
              </div>

              <div className="rounded-xl bg-yellow-50 p-6">
                <h4 className="mb-4 text-lg font-semibold text-gray-900">
                  Преимущества для оптовиков
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <div className="mr-3 h-2 w-2 rounded-full bg-yellow-500"></div>
                    Специальные цены
                  </li>
                  <li className="flex items-center">
                    <div className="mr-3 h-2 w-2 rounded-full bg-yellow-500"></div>
                    Гибкие условия оплаты
                  </li>
                  <li className="flex items-center">
                    <div className="mr-3 h-2 w-2 rounded-full bg-yellow-500"></div>
                    Приоритетная доставка
                  </li>
                  <li className="flex items-center">
                    <div className="mr-3 h-2 w-2 rounded-full bg-yellow-500"></div>
                    Персональный менеджер
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Регионы доставки */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Регионы доставки
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Доставляем металлопрокат по всей Удмуртской Республике и
              близлежащим регионам
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-gray-50 p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500">
                <span className="text-lg font-bold text-white">И</span>
              </div>
              <h3 className="mb-2 font-semibold text-gray-900">Ижевск</h3>
              <p className="text-sm text-gray-600">Столица Удмуртии</p>
            </div>

            <div className="rounded-lg bg-gray-50 p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500">
                <span className="text-lg font-bold text-white">У</span>
              </div>
              <h3 className="mb-2 font-semibold text-gray-900">Удмуртия</h3>
              <p className="text-sm text-gray-600">Весь регион</p>
            </div>

            <div className="rounded-lg bg-gray-50 p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500">
                <span className="text-lg font-bold text-white">Т</span>
              </div>
              <h3 className="mb-2 font-semibold text-gray-900">Татарстан</h3>
              <p className="text-sm text-gray-600">Республика</p>
            </div>

            <div className="rounded-lg bg-gray-50 p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500">
                <span className="text-lg font-bold text-white">К</span>
              </div>
              <h3 className="mb-2 font-semibold text-gray-900">
                Кировская обл.
              </h3>
              <p className="text-sm text-gray-600">Область</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="bg-yellow-500 py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl font-bold text-gray-900">
            Нужна консультация по доставке?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-800">
            Свяжитесь с нами для уточнения деталей доставки и расчета стоимости
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contacts">
              <button className="rounded-lg bg-gray-900 px-8 py-3 font-medium text-white transition-colors hover:bg-gray-800">
                Связаться с нами
              </button>
            </Link>
            <Link href="/catalog">
              <button className="rounded-lg bg-white px-8 py-3 font-medium text-gray-900 transition-colors hover:bg-gray-100">
                Перейти в каталог
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
