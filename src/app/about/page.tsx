import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'О компании - Абсолют Сталь | Металлопрокат в Ижевске',
  description:
    'Узнайте больше о компании Абсолют Сталь - ведущем поставщике металлопроката в Ижевске. Наша история, преимущества и опыт работы.',
  alternates: {
    canonical: 'https://absolut-stal.ru/about',
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://absolut-stal.ru/about',
    siteName: 'Абсолют Сталь, Ижевск',
    title: 'О компании - Абсолют Сталь | Металлопрокат в Ижевске',
    description:
      'Узнайте больше о компании Абсолют Сталь - ведущем поставщике металлопроката в Ижевске. Наша история, преимущества и опыт работы.',
    images: [
      {
        url: 'https://absolut-stal.ru/images/logo.png',
        width: 800,
        height: 600,
        alt: 'Абсолют Сталь - О компании',
      },
    ],
  },
};

export default function AboutPage() {
  const companyStats = [
    { number: '5+', label: 'Лет на рынке' },
    { number: '1000+', label: 'Довольных клиентов' },
    { number: '10000+', label: 'Видов металлопроката' },
    { number: '4', label: 'Региона обслуживания' },
  ];

  const values = [
    {
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
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: 'Качество',
      description:
        'Мы работаем только с проверенными поставщиками и гарантируем качество каждого изделия',
    },
    {
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
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: 'Скорость',
      description: 'Быстрая обработка заказов и доставка в кратчайшие сроки',
    },
    {
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
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: 'Команда',
      description:
        'Опытные специалисты готовы помочь с выбором материалов и решением любых задач',
    },
    {
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
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
          />
        </svg>
      ),
      title: 'Цены',
      description:
        'Конкурентные цены и гибкая система скидок для постоянных клиентов',
    },
  ];

  const timeline = [
    {
      year: '2019',
      title: 'Основание компании',
      description:
        'Компания "Абсолют Сталь" начала свою деятельность в городе Ижевске',
    },
    {
      year: '2020',
      title: 'Расширение ассортимента',
      description: 'Добавлены новые виды металлопроката и услуги по резке',
    },
    {
      year: '2021',
      title: 'Развитие доставки',
      description: 'Запущена служба доставки по всей Удмуртской Республике',
    },
    {
      year: '2022',
      title: 'Региональное расширение',
      description: 'Начали обслуживать клиентов в близлежащих регионах',
    },
    {
      year: '2023',
      title: 'Современные технологии',
      description:
        'Внедрение новых технологий резки и улучшение качества услуг',
    },
    {
      year: '2024',
      title: 'Расширение',
      description: 'Расширение географии поставок',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero секция */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-6 text-4xl font-bold text-gray-900 lg:text-6xl">
            О компании &quot;Абсолют Сталь&quot;
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Мы являемся ведущей компанией по металлопрокату в городе Ижевске,
            предоставляющей качественные материалы и профессиональные услуги для
            строительства и промышленности.
          </p>
        </div>
      </section>

      {/* Статистика */}
      <section className="bg-yellow-500 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {companyStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-2 text-4xl font-bold text-gray-900 lg:text-5xl">
                  {stat.number}
                </div>
                <div className="font-medium text-gray-900">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* О нас */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                Кто мы такие
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Компания &quot;Абсолют Сталь&quot; была основана в 2019 году с
                  целью обеспечить строительные компании и частных клиентов
                  качественным металлопрокатом по доступным ценам.
                </p>
                <p>
                  За годы работы мы зарекомендовали себя как надежного партнера,
                  который всегда выполняет свои обязательства и предоставляет
                  только качественную продукцию.
                </p>
                <p>
                  Наша миссия - сделать качественный металлопрокат доступным для
                  всех клиентов в регионе, обеспечивая при этом высокий уровень
                  сервиса и индивидуальный подход к каждому заказу.
                </p>
              </div>
            </div>
            <div className="rounded-2xl bg-gray-100 p-8 lg:p-12">
              <div className="text-center">
                <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-yellow-500">
                  <svg
                    className="h-12 w-12 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  Наша миссия
                </h3>
                <p className="text-gray-600">
                  Обеспечить клиентов качественным металлопрокатом и
                  профессиональными услугами по доступным ценам
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Наши ценности */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Наши ценности
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Принципы, которыми мы руководствуемся в работе с клиентами
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div key={index} className="group text-center">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full text-gray-600">
                  {value.icon}
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* История компании */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              История развития
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Путь становления компании от основания до сегодняшнего дня
            </p>
          </div>

          <div className="relative">
            {/* Вертикальная линия */}
            <div className="absolute left-1/2 h-full w-0.5 -translate-x-px transform bg-yellow-200"></div>

            <div>
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Точка на линии */}
                  <div className="absolute left-1/2 h-4 w-4 -translate-x-1/2 transform rounded-full border-4 border-white bg-yellow-500 shadow-lg"></div>

                  {/* Контент */}
                  <div
                    className={`w-5/12 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}
                  >
                    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                      <div className="mb-2 text-2xl font-bold text-yellow-500">
                        {item.year}
                      </div>
                      <h3 className="mb-2 text-lg font-semibold text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="bg-yellow-500 py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl font-bold text-gray-900">
            Готовы начать сотрудничество?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-800">
            Свяжитесь с нами для получения консультации и оформления заказа
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/catalog">
              <button className="rounded-lg bg-gray-900 px-8 py-3 font-medium text-white transition-colors hover:bg-gray-800">
                Перейти в каталог
              </button>
            </Link>
            <Link href="/contacts">
              <button className="rounded-lg bg-white px-8 py-3 font-medium text-gray-900 transition-colors hover:bg-gray-100">
                Связаться с нами
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
