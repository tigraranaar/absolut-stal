import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'О компании - Абсолют Сталь | Металлопрокат в Ижевске',
  description: 'Узнайте больше о компании Абсолют Сталь - ведущем поставщике металлопроката в Ижевске. Наша история, преимущества и опыт работы.',
};

export default function AboutPage() {
  const companyStats = [
    { number: '5+', label: 'Лет на рынке' },
    { number: '1000+', label: 'Довольных клиентов' },
    { number: '50+', label: 'Видов металлопроката' },
    { number: '4', label: 'Региона обслуживания' },
  ];

  const values = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Качество',
      description: 'Мы работаем только с проверенными поставщиками и гарантируем качество каждого изделия'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Скорость',
      description: 'Быстрая обработка заказов и доставка в кратчайшие сроки'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Команда',
      description: 'Опытные специалисты готовы помочь с выбором материалов и решением любых задач'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      title: 'Цены',
      description: 'Конкурентные цены и гибкая система скидок для постоянных клиентов'
    }
  ];

  const timeline = [
    {
      year: '2019',
      title: 'Основание компании',
      description: 'Компания "Абсолют Сталь" начала свою деятельность в городе Ижевске'
    },
    {
      year: '2020',
      title: 'Расширение ассортимента',
      description: 'Добавлены новые виды металлопроката и услуги по резке'
    },
    {
      year: '2021',
      title: 'Развитие доставки',
      description: 'Запущена служба доставки по всей Удмуртской Республике'
    },
    {
      year: '2022',
      title: 'Региональное расширение',
      description: 'Начали обслуживать клиентов в близлежащих регионах'
    },
    {
      year: '2023',
      title: 'Современные технологии',
      description: 'Внедрение новых технологий резки и улучшение качества услуг'
    },
    {
      year: '2024',
      title: 'Планы на будущее',
      description: 'Планируем открытие новых складов и расширение географии поставок'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero секция */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            О компании <span className="text-yellow-500">Абсолют Сталь</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы являемся ведущей компанией по металлопрокату в городе Ижевске, 
            предоставляющей качественные материалы и профессиональные услуги 
            для строительства и промышленности.
          </p>
        </div>
      </section>

      {/* Статистика */}
      <section className="py-16 bg-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-900 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* О нас */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Кто мы такие
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Компания &quot;Абсолют Сталь&quot; была основана в 2019 году с целью 
                  обеспечить строительные компании и частных клиентов качественным 
                  металлопрокатом по доступным ценам.
                </p>
                <p>
                  За годы работы мы зарекомендовали себя как надежного партнера, 
                  который всегда выполняет свои обязательства и предоставляет 
                  только качественную продукцию.
                </p>
                <p>
                  Наша миссия - сделать качественный металлопрокат доступным 
                  для всех клиентов в регионе, обеспечивая при этом высокий 
                  уровень сервиса и индивидуальный подход к каждому заказу.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8 lg:p-12">
              <div className="text-center">
                <div className="w-24 h-24 bg-yellow-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Наша миссия
                </h3>
                <p className="text-gray-600">
                  Обеспечить клиентов качественным металлопрокатом 
                  и профессиональными услугами по доступным ценам
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Наши ценности */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Наши ценности
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Принципы, которыми мы руководствуемся в работе с клиентами
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-500 group-hover:text-white transition-all duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* История компании */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              История развития
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Путь становления компании от основания до сегодняшнего дня
            </p>
          </div>
          
          <div className="relative">
            {/* Вертикальная линия */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-yellow-200"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}>
                  {/* Точка на линии */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-500 rounded-full border-4 border-white shadow-lg"></div>
                  
                  {/* Контент */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                      <div className="text-2xl font-bold text-yellow-500 mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="py-20 bg-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Готовы начать сотрудничество?
          </h2>
          <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами для получения консультации и оформления заказа
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/catalog">
              <button className="bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                Перейти в каталог
              </button>
            </Link>
            <Link href="/contacts">
              <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Связаться с нами
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

