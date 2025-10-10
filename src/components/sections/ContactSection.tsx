import React from 'react';
import Link from 'next/link';

const ContactSection: React.FC = () => {
  const contactInfo = [
    {
      icon: (
        <svg
          className="h-6 w-6"
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
      title: 'Телефон',
      value: '+7 (3412) 566822',
      link: 'tel:+73412566822',
    },
    {
      icon: (
        <svg
          className="h-6 w-6"
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
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      title: 'Адрес',
      value: 'г. Ижевск, ул. Репина, дом 35, кор. 1',
      link: null,
    },
    {
      icon: (
        <svg
          className="h-6 w-6"
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
      ),
      title: 'Время работы',
      value: 'Пн-Пт: 9:00-18:00, Сб: 9:00-14:00 (МСК)',
      link: null,
    },
    {
      icon: (
        <svg
          className="h-6 w-6"
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
      ),
      title: 'Email',
      value: 'abst18@bk.ru',
      link: 'mailto:abst18@bk.ru',
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
            Свяжитесь с нами
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            Готовы ответить на все ваши вопросы и помочь с выбором
            металлопроката
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Контактная информация */}
          <div>
            <h3 className="mb-8 text-2xl font-bold text-gray-900">
              Контактная информация
            </h3>

            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-yellow-100 text-yellow-600">
                    {contact.icon}
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-gray-900">
                      {contact.title}
                    </h4>
                    {contact.link ? (
                      <Link
                        href={contact.link}
                        className="text-gray-600 transition-colors hover:text-yellow-600"
                      >
                        {contact.value}
                      </Link>
                    ) : (
                      <p className="text-gray-600">{contact.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Кнопка "Все контакты" */}
            <div className="mt-8">
              <Link href="/contacts">
                <button className="rounded-lg bg-yellow-500 px-6 py-3 font-medium text-gray-900 transition-colors hover:bg-yellow-600">
                  Все контакты
                </button>
              </Link>
            </div>
          </div>

          {/* Регионы работы */}
          <div>
            <h3 className="mb-8 text-2xl font-bold text-gray-900">
              Регионы работы
            </h3>
            <p className="mb-6 text-gray-600">
              Мы обслуживаем клиентов в следующих регионах:
            </p>

            <div className="space-y-4">
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
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
