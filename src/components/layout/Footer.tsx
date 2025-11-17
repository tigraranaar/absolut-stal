import React from 'react';
import Link from 'next/link';
import Logo from '@/components/ui/Logo';

const Footer: React.FC = () => {
  return (
    <footer className="text-white" style={{ backgroundColor: '#201F1F' }}>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Услуги */}
          <div className="text-center md:text-left">
            <h3 className="mb-4 text-lg font-semibold text-yellow-500">
              Услуги
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/catalog"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Металлопрокат
                </Link>
              </li>
              <li>
                <Link
                  href="/delivery"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Доставка
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  О компании
                </Link>
              </li>
              <li>
                <Link
                  href="/contacts"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div className="text-center md:text-left">
            <h3 className="mb-4 text-lg font-semibold text-yellow-500">
              Контакты
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>г. Ижевск</li>
              <li>ул. Репина, дом 35, кор. 1</li>
              <li>Пн-Пт: 9:00-18:00 (МСК)</li>
              <li>Сб: 9:00-14:00 (МСК)</li>
              <li>Вс: Выходной</li>
            </ul>
          </div>

          {/* О компании */}
          <div className="col-span-1 text-center md:col-span-2 md:text-left">
            <div className="mb-4 flex items-center justify-center md:justify-start">
              <Logo size="lg" showText={false} />
              <span className="ml-3 text-lg font-bold">Абсолют Сталь</span>
            </div>
            <p className="mx-auto mb-4 max-w-md text-gray-300 md:mx-0">
              Компания по металлопрокату в городе Ижевске. Широкий ассортимент,
              качественные материалы, резка и доставка по всей Удмуртской
              Республике и близлежащим регионам.
            </p>
            <div className="flex flex-col items-center justify-center md:flex-row md:justify-start md:space-x-4">
              <span className="font-medium text-yellow-500">Телефон:</span>
              <span className="text-gray-300">+7 (3412) 566822</span>
            </div>
          </div>
        </div>

        {/* Нижняя часть */}
        <div className="mt-8 flex flex-col items-center justify-between border-t border-gray-800 pt-8 md:flex-row">
          <p className="text-sm text-gray-400">
            © 2025 Абсолют Сталь. Все права защищены.
          </p>
          <div className="mt-4 flex space-x-6 md:mt-0">
            <Link
              href="/about"
              className="text-sm text-gray-400 transition-colors hover:text-white"
            >
              О компании
            </Link>
            <Link
              href="/delivery"
              className="text-sm text-gray-400 transition-colors hover:text-white"
            >
              Доставка
            </Link>
            <Link
              href="/contacts"
              className="text-sm text-gray-400 transition-colors hover:text-white"
            >
              Контакты
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
