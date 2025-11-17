import React from 'react';
import Link from 'next/link';

const AboutSection: React.FC = () => {
  const advantages = [
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
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: 'Широкий ассортимент',
      description: 'Полный спектр металлопроката для любых задач',
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
      description:
        'Доставка по всей Удмуртской Республике и близлежащим регионам',
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
      title: 'Профессиональная резка',
      description: 'Точная резка металла по вашим размерам',
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
            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z"
          />
        </svg>
      ),
      title: 'Консультации',
      description: 'Бесплатные консультации по выбору материалов',
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
            Компания металлопрокат{' '}
            <span className="text-yellow-500">Ижевск</span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Мы являемся ведущей компанией по металлопрокату в городе Ижевске.
            Металлобазa Ижевск с широким ассортиментом: арматура, трубы,
            профнастил, лист стальной, уголок, швеллер, балка, круг стальной,
            проволока, сетка, катанка, квадрат, шестигранник, пруток.
            Предоставляем качественные материалы и профессиональные услуги для
            строительства и промышленности.
          </p>
        </div>

        {/* Преимущества */}
        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {advantages.map((advantage, index) => (
            <div key={index} className="group text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full text-gray-600">
                {advantage.icon}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                {advantage.title}
              </h3>
              <p className="text-gray-600">{advantage.description}</p>
            </div>
          ))}
        </div>

        {/* Регионы работы */}
        <div className="rounded-2xl bg-gray-50 p-8 lg:p-12">
          <div className="mb-8 text-center">
            <h3 className="mb-4 text-2xl font-bold text-gray-900">
              Регионы работы
            </h3>
            <p className="text-gray-600">
              Мы обслуживаем клиентов в следующих регионах:
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-3 flex items-center">
                <div className="mr-3 h-3 w-3 rounded-full bg-yellow-500"></div>
                <h4 className="font-semibold text-gray-900">Ижевск</h4>
              </div>
              <p className="text-sm text-gray-600">
                Столица Удмуртской Республики
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-3 flex items-center">
                <div className="mr-3 h-3 w-3 rounded-full bg-yellow-500"></div>
                <h4 className="font-semibold text-gray-900">
                  Удмуртская Республика
                </h4>
              </div>
              <p className="text-sm text-gray-600">Весь регион</p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-3 flex items-center">
                <div className="mr-3 h-3 w-3 rounded-full bg-yellow-500"></div>
                <h4 className="font-semibold text-gray-900">
                  Близлежащие регионы
                </h4>
              </div>
              <p className="text-sm text-gray-600">
                Татарстан, Кировская область, Пермский край
              </p>
            </div>
          </div>
        </div>

        {/* Дополнительная SEO-информация */}
        <div className="mt-12 rounded-2xl bg-yellow-50 p-8 lg:p-12">
          <div className="text-center">
            <h3 className="mb-4 text-2xl font-bold text-gray-900">
              Прайс-лист на металлопрокат Ижевск 2024
            </h3>
            <p className="mx-auto mb-6 max-w-3xl text-gray-700">
              Актуальные цены на металлопрокат в Ижевске. Скачайте прайс-лист на
              металлопрокат Ижевск 2024 с ценами на арматуру, трубы, профнастил,
              лист стальной, уголок, швеллер, балку, круг стальной, проволоку,
              сетку, катанку, квадрат, шестигранник, пруток. Металлоконструкции
              на заказ Ижевск.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="/price-list.xlsx"
                download="Прайс-лист-металлопрокат-Ижевск-2024.xlsx"
              >
                <button className="rounded-lg bg-yellow-500 px-8 py-3 font-medium text-gray-900 transition-colors hover:bg-yellow-600">
                  Скачать прайс-лист 2024
                </button>
              </a>
              <Link href="/catalog">
                <button className="rounded-lg border-2 border-yellow-500 bg-white px-8 py-3 font-medium text-gray-900 transition-colors hover:bg-yellow-50">
                  Посмотреть каталог
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Кнопка "Подробнее" */}
        <div className="mt-12 text-center">
          <Link href="/about">
            <button className="rounded-lg bg-yellow-500 px-8 py-3 font-medium text-gray-900 transition-colors hover:bg-yellow-600">
              Узнать больше о компании
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
