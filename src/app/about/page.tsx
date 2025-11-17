import React from 'react';
import Link from 'next/link';
import Logo from '@/components/ui/Logo';

export const metadata = {
  title: 'Компания металлопрокат Ижевск - Металлобазa Ижевск | Абсолют Сталь',
  description:
    'Компания металлопрокат Ижевск - Абсолют Сталь. Металлобазa Ижевск с широким ассортиментом: арматура, трубы, профнастил, лист стальной, уголок, швеллер, балка. Продажа металлопроката оптом и в розницу. Наша история, преимущества и опыт работы.',
  keywords:
    'компания металлопрокат Ижевск, металлобазa Ижевск, продажа металлопроката Ижевск, металлопрокат оптом Ижевск, о компании Абсолют Сталь, поставщик металла Ижевск, история компании, металлопрокат Ижевск',
  alternates: {
    canonical: 'https://absolut-stal.ru/about',
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://absolut-stal.ru/about',
    siteName: 'Абсолют Сталь, Ижевск',
    title: 'Компания металлопрокат Ижевск - Металлобазa Ижевск | Абсолют Сталь',
    description:
      'Компания металлопрокат Ижевск - Абсолют Сталь. Металлобазa Ижевск с широким ассортиментом: арматура, трубы, профнастил, лист стальной, уголок, швеллер, балка. Продажа металлопроката оптом и в розницу. Наша история, преимущества и опыт работы.',
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
    { number: '8+', label: 'Лет на рынке' },
    { number: '1000+', label: 'Довольных клиентов' },
    { number: '10000+', label: 'Видов металлопроката' },
    { number: '4+', label: 'Региона обслуживания' },
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
            d="M4 6h16M4 10h16M4 14h16M4 18h16"
          />
        </svg>
      ),
      title: 'Выбор',
      description:
        'В нашем ассортименте представлен широчайший выбор металлопроката: черный (качественный, инструментальный, специальные сплавы), цветной, нержавеющий, а также готовые металлоизделия.',
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
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: 'Качество',
      description:
        'Мы работаем только с проверенными поставщиками и гарантируем соответствие всей нашей продукции действующим ГОСТам и ТУ. Каждая партия сопровождается необходимыми сертификатами.',
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
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: 'Надежность',
      description:
        'Мы дорожим своей репутацией. Своевременные поставки, точное выполнение заказов и прозрачность сделок — наши основные принципы.',
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
      title: 'Клиентоориентированность',
      description:
        'Мы находим индивидуальный подход к каждому клиенту. Наши специалисты готовы проконсультировать и помочь подобрать оптимальное решение для ваших задач.',
    },
  ];

  const activities = [
    'Оптовая торговля металлопрокатом. Металлопрокат оптом Ижевск с выгодными ценами.',
    'Поставка черного металлопроката: арматура Ижевск, круг стальной Ижевск, уголок Ижевск, швеллер Ижевск, балка Ижевск, лист стальной Ижевск (горячекатаный и холоднокатаный), трубы Ижевск различного сечения.',
    'Поставка цветного металлопроката: алюминий, медь, латунь, бронза в виде листов, прутков, кругов и труб.',
    'Поставка нержавеющего проката: лист, труба, уголок, круг для пищевой, химической и декоративной промышленности.',
    'Резка металла Ижевск: предлагаем услуги продольной и поперечной резки листа по вашим размерам, что позволяет оптимизировать логистику и затраты.',
    'Доставка металлопроката Ижевск: мы организуем оперативную доставку заказов по городу и региону с помощью собственного или наемного транспорта.',
    'Металлоконструкции на заказ Ижевск: изготовление металлоконструкций по индивидуальным проектам.',
  ];

  const advantages = [
    'Конкурентные цены за счет прямых контрактов с заводами-изготовителями и оптимизации логистики.',
    'Собственные складские запасы, что позволяет отгружать продукцию в кратчайшие сроки.',
    'Гибкая система скидок для постоянных клиентов и крупных оптовых покупателей.',
    'Профессиональная команда менеджеров и технических специалистов с глубокими знаниями в области металлургии.',
    'Современная материально-техническая база, включающая оборудование для точной резки металла.',
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero секция */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-6 text-4xl font-bold text-gray-900 lg:text-6xl">
            Компания металлопрокат{' '}
            <span className="text-yellow-500">Ижевск</span>
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            «Абсолют Сталь» — металлобазa Ижевск и надежный партнер в мире
            металлопроката. Продажа металлопроката оптом и в розницу: арматура,
            трубы, профнастил, лист стальной, уголок, швеллер, балка, круг
            стальной, проволока, сетка, катанка, квадрат, шестигранник, пруток.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-lg font-semibold text-gray-700">
            Качественные, Инструментальные, Специальные марки стали.
          </p>
          <p className="mx-auto mt-2 max-w-3xl text-lg text-gray-600">
            Сила в качестве, успех — в партнерстве
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
                  Компания &quot;Абсолют Сталь&quot; — металлобазa Ижевск,
                  которая была основана в 2018 году с целью обеспечить в первую
                  очередь производственные и строительные компании качественным
                  металлопрокатом по доступным ценам. Мы предлагаем купить
                  металлопрокат в Ижевске оптом и в розницу: арматуру, трубы,
                  профнастил, лист стальной, уголок, швеллер, балку, круг
                  стальной, проволоку, сетку, катанку, квадрат, шестигранник,
                  пруток. За годы работы мы зарекомендовали себя как надежного
                  партнера, который всегда выполняет свои обязательства и
                  предоставляет только качественную продукцию.
                </p>
                <p>
                  Наша миссия - сделать качественный металлопрокат доступным для
                  всех клиентов в регионе, обеспечивая при этом высокий уровень
                  сервиса и индивидуальный подход к каждому заказу. Продажа
                  металлопроката Ижевск — это наша специализация. Мы работаем
                  как с оптовыми, так и с розничными покупателями.
                </p>
                <p>
                  Металлопрокат цена Ижевск — мы предлагаем конкурентные цены
                  благодаря прямым контрактам с заводами-изготовителями.
                  Прайс-лист на металлопрокат Ижевск 2024 доступен для
                  скачивания на нашем сайте. Доставка металлопроката Ижевск
                  осуществляется собственным автопарком.
                </p>
              </div>
            </div>
            <div className="rounded-2xl bg-gray-100 p-8 lg:p-12">
              <div className="text-center">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full p-3">
                  <div className="flex items-center justify-center">
                    <Logo
                      size="xl"
                      showText={false}
                      className="pointer-events-none"
                    />
                  </div>
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

          {/* Дополнительные ценности */}
          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <div key={index} className="group text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full text-gray-600">
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
        </div>
      </section>

      {/* Основные направления деятельности */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Основные направления нашей деятельности
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="rounded-lg border border-gray-200 bg-gray-50 p-6 shadow-sm"
              >
                <div className="mb-2 flex items-start">
                  <div className="mt-1 mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-yellow-500 text-sm font-bold text-white">
                    {index + 1}
                  </div>
                  <p className="text-gray-700">{activity}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Почему выбирают нас */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Почему выбирают нас?
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Преимущества, которые делают нас надежным партнером
            </p>
          </div>

          <div className="relative">
            {/* Вертикальная линия */}
            <div className="absolute left-1/2 h-full w-0.5 -translate-x-px transform bg-yellow-200"></div>

            <div>
              {advantages.map((advantage, index) => (
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
                      <p className="text-gray-700">{advantage}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Заключение */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xl leading-relaxed text-gray-700">
            «Абсолют Сталь» — это больше, чем просто поставщик металла. Это
            надежный партнер, который берет на себя ответственность за
            обеспечение вашего производства качественными материалами. Мы
            стремимся к абсолютному качеству в сервисе и в продукте, что и
            делает нас сильными.
          </p>
        </div>
      </section>

      {/* CTA секция */}
      <section className="bg-yellow-500 py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl font-bold text-gray-900">
            Готовы начать сотрудничество?
          </h2>
          <p className="mx-auto mb-4 max-w-2xl text-xl font-semibold text-gray-900">
            Свяжитесь с нами прямо сейчас, и убедитесь в этом сами!
          </p>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-800">
            Получите бесплатную консультацию и расчет вашего заказа!
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
