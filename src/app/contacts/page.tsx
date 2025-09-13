import React from 'react';

export const metadata = {
  title: 'Контакты - Абсолют Сталь | Металлопрокат в Ижевске',
  description:
    'Свяжитесь с нами для заказа металлопроката. Контакты отдела продаж, адрес, телефоны и реквизиты компании Абсолют Сталь.',
};

export default function ContactsPage() {
  const salesTeam = [
    { name: 'Дмитрий', phone: '+7 919 919-02-21' },
    { name: 'Григорий', phone: '+7 919 919-09-55' },
    { name: 'Алексей', phone: '+7 919 919-03-36' },
    { name: 'Егор', phone: '+7 919 919-13-37' },
    { name: 'Илья', phone: '+7 919 905 17-75' },
  ];

  const branches = [
    {
      name: 'ООО «Абсолют Сталь»',
      address: '426035, УР, г. Ижевск, ул. Репина, дом 35, кор. 1',
      phone: '+7 3412 56-68-22',
      email: 'abst18@bk.ru',
      workHours: 'пн-пт, 8:00-17:30 (время указано по МСК)',
    },
    {
      name: 'ООО «Абсолют Сталь+»',
      address:
        '125315, Г.МОСКВА, ВН.ТЕР.Г. МУНИЦИПАЛЬНЫЙ ОКРУГ СОКОЛ, ПР-КТ ЛЕНИНГРАДСКИЙ, Д.80, К.66, ПОМЕЩ. 1406',
      ogrn: 'ОГРН 1237700488233',
      inn: 'ИНН/КПП 7743422654/774301001',
      bank: 'ОТДЕЛЕНИЕ № 8618 СБЕРБАНКА РОССИИ г. ИЖЕВСК',
      account: 'р/с 40702810168000005050',
      bik: 'БИК: 049401601',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero секция */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-6 text-4xl font-bold text-gray-900 lg:text-6xl">
            <span className="text-yellow-500">Контакты</span>
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Свяжитесь с нами для заказа металлопроката. Наши специалисты готовы
            помочь с выбором материалов и ответить на все вопросы.
          </p>
        </div>
      </section>

      {/* Отдел продаж */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Отдел продаж
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Наши менеджеры готовы помочь с выбором металлопроката и
              оформлением заказа
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {salesTeam.map((member, index) => (
              <div
                key={index}
                className="rounded-xl bg-gray-50 p-2 text-center transition-all duration-300 hover:bg-yellow-50"
              >
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  {member.name}
                </h3>
                <a
                  href={`tel:${member.phone.replace(/\s/g, '')}`}
                  className="font-medium text-yellow-600 transition-colors hover:text-yellow-700"
                >
                  {member.phone}
                </a>
              </div>
            ))}
          </div>

          {/* Telegram бот */}
          <div className="mt-12 text-center">
            <div className="mx-auto max-w-md rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 p-8">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white">
                <svg
                  className="h-10 w-10 text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">
                Металл в Кармане
              </h3>
              <p className="mb-4 text-blue-100">
                Сервис для быстрого поиска металла и создания срочных заявок
              </p>
              <a
                href="https://t.me/izh_metall18_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-white px-6 py-3 font-medium text-blue-600 transition-colors hover:bg-gray-100"
              >
                Открыть бота
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Контактная информация */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Контактная информация
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Основной офис и филиалы компании
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <h3 className="mb-6 text-2xl font-bold text-gray-900">
                {branches[1].name}
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-yellow-100 text-yellow-600">
                    <svg
                      className="h-4 w-4"
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
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Адрес:</p>
                    <p className="text-gray-600">{branches[1].address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-yellow-100 text-yellow-600">
                    <svg
                      className="h-4 w-4"
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
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Реквизиты:</p>
                    <div className="space-y-1 text-gray-600">
                      <p>{branches[1].ogrn}</p>
                      <p>{branches[1].inn}</p>
                      <p>{branches[1].bank}</p>
                      <p>{branches[1].account}</p>
                      <p>{branches[1].bik}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Карта */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Мы на карте
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Наш офис в городе Ижевске
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 rounded-2xl border border-gray-200 shadow-sm lg:grid-cols-2">
            {/* Контактная информация - левый блок */}
            <div className="bg-white p-8">
              <h3 className="mb-6 text-2xl font-bold text-gray-900">
                {branches[0].name}
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-yellow-100 text-yellow-600">
                    <svg
                      className="h-4 w-4"
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
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Адрес:</p>
                    <p className="text-gray-600">{branches[0].address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-yellow-100 text-yellow-600">
                    <svg
                      className="h-4 w-4"
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
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Телефон:</p>
                    <a
                      href={`tel:${branches[0]?.phone?.replace(/\s/g, '')}`}
                      className="text-yellow-600 transition-colors hover:text-yellow-700"
                    >
                      {branches[0].phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-yellow-100 text-yellow-600">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email:</p>
                    <a
                      href={`mailto:${branches[0].email}`}
                      className="text-yellow-600 transition-colors hover:text-yellow-700"
                    >
                      {branches[0].email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-yellow-100 text-yellow-600">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Режим работы:</p>
                    <p className="text-gray-600">{branches[0].workHours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Карта - правый блок */}
            <div className="bg-white p-8">
              <h3 className="mb-6 text-2xl font-bold text-gray-900">
                Расположение на карте
              </h3>
              <div className="overflow-hidden rounded-lg">
                <iframe
                  src="https://yandex.ru/map-widget/v1/-/CBqZEVtL-A"
                  width="600"
                  height="600"
                  frameBorder="0"
                  className="h-[500px] w-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
