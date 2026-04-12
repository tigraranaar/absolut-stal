import React from 'react';
import Link from 'next/link';
import RussiaMap from '@/components/RussiaMap';

export const metadata = {
  title:
    'Доставка металлопроката Казань - Заказать металлопрокат с доставкой | Абсолют Сталь',
  description:
    'Доставка металлопроката Казань собственным автопарком. Заказать металлопрокат с доставкой по Казани и Татарстану. Доставка арматуры, труб, профнастила, листа стального, уголка, швеллера, балки. Гибкие способы оплаты, условия доставки.',
  keywords:
    'доставка металлопроката Казань, заказать металлопрокат с доставкой Казань, доставка металла Татарстан, доставка арматуры Казань, доставка труб Казань, доставка профнастила Казань, оплата металлопроката, условия доставки, доставка металлопроката оптом Казань',
  alternates: {
    canonical: 'https://казаньметалл.рф/delivery',
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://казаньметалл.рф/delivery',
    siteName: 'Абсолют Сталь, Казань',
    title:
      'Доставка металлопроката Казань - Заказать металлопрокат с доставкой | Абсолют Сталь',
    description:
      'Доставка металлопроката Казань собственным автопарком. Заказать металлопрокат с доставкой по Казани и Татарстану. Доставка арматуры, труб, профнастила, листа стального, уголка, швеллера, балки. Гибкие способы оплаты, условия доставки.',
    images: [
      {
        url: 'https://казаньметалл.рф/images/logo.png',
        width: 800,
        height: 600,
        alt: 'Абсолют Сталь - Доставка и оплата',
      },
    ],
  },
};

export default function DeliveryPage() {
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
  ];

  const deliveryFeatures = [
    {
      emoji: '🚛',
      title: 'Собственный автопарк',
      description:
        'Полный контроль над сроками и качеством перевозки, без посредников',
    },
    {
      emoji: '📏',
      title: 'Разнообразие техники',
      description:
        'От манипуляторов для штучных грузов до тралов для негабаритного проката',
    },
    {
      emoji: '🔒',
      title: 'Профессиональное крепление',
      description:
        'Гарантируем безопасную транспортировку без сдвигов и повреждений',
    },
    {
      emoji: '⏱️',
      title: 'Четкая логистика',
      description: 'Подача транспорта в нужное время по оптимальному маршруту',
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
      <section className="relative py-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/images/maz.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'brightness(0.4)',
          }}
        ></div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">
              Доставка металлопроката Казань
            </h2>
            <p className="mx-auto mb-6 max-w-3xl text-xl text-gray-200">
              Собственный автопарк — гарантия точных сроков и сохранности вашего
              металлопроката. Доставка арматуры, труб, профнастила, листа
              стального, уголка, швеллера, балки и другого металлопроката.
            </p>
            <div className="mx-auto max-w-4xl">
              <ul className="mt-6 space-y-3 text-left text-gray-200">
                <li className="flex items-start">
                  <span className="mr-3 text-yellow-400">•</span>
                  <span>Наш автопарк — ваша уверенность в целости металла</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-yellow-400">•</span>
                  <span>
                    Доставим любой металлопрокат: от прутка до балки. Своим
                    транспортом
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-yellow-400">•</span>
                  <span>
                    Полный контроль логистики. От склада до вашего объекта
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-yellow-400">•</span>
                  <span>Ваш металл в надежных руках и на нашей технике</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Автопарк */}
          <div className="mb-16">
            <h3 className="mb-8 text-center text-2xl font-bold text-white">
              Наш автопарк предназначен к перевозке металлопроката любого типа и
              сложности:
            </h3>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl bg-gray-50/90 p-6 backdrop-blur-sm">
                <div className="mb-4 text-3xl">🚛</div>
                <h4 className="mb-3 text-lg font-bold text-gray-900">
                  Для длинномера и негабарита
                </h4>
                <p className="text-gray-700">
                  Тяжелые тралы и полуприцепы-тяжеловозы для перевозки балок,
                  труб и двутавров любой длины
                </p>
              </div>
              <div className="rounded-2xl bg-gray-50/90 p-6 backdrop-blur-sm">
                <div className="mb-4 text-3xl">📦</div>
                <h4 className="mb-3 text-lg font-bold text-gray-900">
                  Для листового проката
                </h4>
                <p className="text-gray-700">
                  Платформы со стойками и ложементами, которые исключают
                  деформацию и повреждение листов и рулонов
                </p>
              </div>
              <div className="rounded-2xl bg-gray-50/90 p-6 backdrop-blur-sm">
                <div className="mb-4 text-3xl">📋</div>
                <h4 className="mb-3 text-lg font-bold text-gray-900">
                  Для стандартных партий
                </h4>
                <p className="text-gray-700">
                  Тентованные полуприцепы и бортовые автомобили, обеспечивающие
                  сохранность сортового и фасонного проката
                </p>
              </div>
              <div className="rounded-2xl bg-gray-50/90 p-6 backdrop-blur-sm">
                <div className="mb-4 text-3xl">🔧</div>
                <h4 className="mb-3 text-lg font-bold text-gray-900">
                  Для сложной погрузки
                </h4>
                <p className="text-gray-700">
                  Автомобили, оснащенные манипуляторами, для быстрого и
                  безопасного выполнения погрузо-разгрузочных работ прямо на
                  объекте
                </p>
              </div>
            </div>
          </div>

          {/* Особенности доставки */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {deliveryFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-4xl backdrop-blur-sm">
                  {feature.emoji}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-200">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Преимущества работы с автопарком */}
      <div className="mb-16 rounded-2xl bg-gray-50/90 p-8 backdrop-blur-sm lg:p-12">
        <h3 className="mb-8 text-center text-2xl font-bold text-gray-900">
          Преимущества работы с нашим автопарком:
        </h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex items-start">
            <span className="mr-4 text-2xl">✅</span>
            <div>
              <h4 className="mb-2 font-semibold text-gray-900">
                Экономия времени и денег
              </h4>
              <p className="text-gray-700">
                Мы оперативно подаем машину под загрузку и оптимизируем маршруты
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="mr-4 text-2xl">✅</span>
            <div>
              <h4 className="mb-2 font-semibold text-gray-900">
                Сохранность груза
              </h4>
              <p className="text-gray-700">
                Наши водители-экспедиторы — опытные специалисты, которые знают
                все нюансы крепления металла
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="mr-4 text-2xl">✅</span>
            <div>
              <h4 className="mb-2 font-semibold text-gray-900">
                Решение любых задач
              </h4>
              <p className="text-gray-700">
                Мы легко подберем нужный транспорт под ваш конкретный груз, будь
                то арматура или сложная металлоконструкция
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="mr-4 text-2xl">✅</span>
            <div>
              <h4 className="mb-2 font-semibold text-gray-900">Прозрачность</h4>
              <p className="text-gray-700">
                Вы всегда знаете, где ваш груз и когда он прибудет
              </p>
            </div>
          </div>
        </div>
      </div>

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
          <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
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

      <RussiaMap />

      {/* CTA секция */}
      <section className="bg-yellow-500 py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl font-bold text-gray-900">
            Нужна консультация по доставке металлопроката?
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
