import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Контакты - Абсолют Сталь | Металлопрокат в Ижевске',
  description: 'Свяжитесь с нами для заказа металлопроката. Контакты отдела продаж, адрес, телефоны и реквизиты компании Абсолют Сталь.',
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
      workHours: 'пн-пт, 8:00-17:30 (время указано по МСК)'
    },
    {
      name: 'ООО «Абсолют Сталь+»',
      address: '125315, Г.МОСКВА, ВН.ТЕР.Г. МУНИЦИПАЛЬНЫЙ ОКРУГ СОКОЛ, ПР-КТ ЛЕНИНГРАДСКИЙ, Д.80, К.66, ПОМЕЩ. 1406',
      ogrn: 'ОГРН 1237700488233',
      inn: 'ИНН/КПП 7743422654/774301001',
      bank: 'ОТДЕЛЕНИЕ № 8618 СБЕРБАНКА РОССИИ г. ИЖЕВСК',
      account: 'р/с 40702810168000005050',
      bik: 'БИК: 049401601'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero секция */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-yellow-500">Контакты</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Свяжитесь с нами для заказа металлопроката. Наши специалисты готовы 
            помочь с выбором материалов и ответить на все вопросы.
          </p>
        </div>
      </section>

      {/* Отдел продаж */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Отдел продаж
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Наши менеджеры готовы помочь с выбором металлопроката и оформлением заказа
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {salesTeam.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:bg-yellow-50 transition-all duration-300">
                <div className="w-16 h-16 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">{member.name[0]}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <a 
                  href={`tel:${member.phone.replace(/\s/g, '')}`}
                  className="text-yellow-600 hover:text-yellow-700 font-medium transition-colors"
                >
                  {member.phone}
                </a>
              </div>
            ))}
          </div>

          {/* Telegram бот */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 max-w-md mx-auto">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Металл в Кармане
              </h3>
              <p className="text-blue-100 mb-4">
                Сервис для быстрого поиска металла и создания срочных заявок
              </p>
              <a 
                href="https://t.me/izh_metall18_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-block"
              >
                Открыть бота
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Контактная информация */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Контактная информация
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Основной офис и филиалы компании
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Основной офис */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {branches[0].name}
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Адрес:</p>
                    <p className="text-gray-600">{branches[0].address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Телефон:</p>
                    <a 
                      href={`tel:${branches[0]?.phone?.replace(/\s/g, '')}`}
                      className="text-yellow-600 hover:text-yellow-700 transition-colors"
                    >
                      {branches[0].phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email:</p>
                    <a 
                      href={`mailto:${branches[0].email}`}
                      className="text-yellow-600 hover:text-yellow-700 transition-colors"
                    >
                      {branches[0].email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Режим работы:</p>
                    <p className="text-gray-600">{branches[0].workHours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Филиал */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {branches[1].name}
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Адрес:</p>
                    <p className="text-gray-600">{branches[1].address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Реквизиты:</p>
                    <div className="text-gray-600 space-y-1">
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Мы на карте
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Наш офис в городе Ижевске
            </p>
          </div>
          
          <div className="bg-gray-100 rounded-2xl p-8 text-center">
            <div className="w-24 h-24 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Яндекс Карта
            </h3>
            <p className="text-gray-600 mb-6">
              Адрес: г. Ижевск, ул. Репина, дом 35, кор. 1
            </p>
            <div className="bg-gray-200 rounded-lg p-8 max-w-2xl mx-auto">
              <p className="text-gray-500">
                Здесь будет встроена Яндекс Карта с API
              </p>
              <p className="text-sm text-gray-400 mt-2">
                Координаты: 56.8519, 53.2324
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="py-20 bg-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Готовы сделать заказ?
          </h2>
          <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
            Свяжитесь с любым из наших менеджеров для консультации и оформления заказа
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/catalog">
              <button className="bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                Перейти в каталог
              </button>
            </Link>
            <a 
              href="https://t.me/izh_metall18_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Написать в Telegram
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

