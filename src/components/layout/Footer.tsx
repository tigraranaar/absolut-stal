import React from 'react';
import Link from 'next/link';
import Logo from '@/components/ui/Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* О компании */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Logo size="lg" showText={false} />
              <span className="text-lg font-bold ml-3">Абсолют Сталь</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Компания по металлопрокату в городе Ижевске. Широкий ассортимент, 
              качественные материалы, резка и доставка по всей Удмуртской Республике 
              и близлежащим регионам.
            </p>
            <div className="flex space-x-4">
              <span className="text-yellow-500 font-medium">Телефон:</span>
              <span className="text-gray-300">+7 (3412) XXX-XX-XX</span>
            </div>
          </div>

          {/* Услуги */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-500">Услуги</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/catalog" className="text-gray-300 hover:text-white transition-colors">
                  Металлопрокат
                </Link>
              </li>
              <li>
                <span className="text-gray-300">Резка металла</span>
              </li>
              <li>
                <span className="text-gray-300">Доставка</span>
              </li>
              <li>
                <span className="text-gray-300">Консультации</span>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-500">Контакты</h3>
            <ul className="space-y-2 text-gray-300">
              <li>г. Ижевск</li>
              <li>ул. Примерная, 123</li>
              <li>Пн-Пт: 9:00-18:00</li>
              <li>Сб: 9:00-14:00</li>
              <li>Вс: Выходной</li>
            </ul>
          </div>
        </div>

        {/* Нижняя часть */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Абсолют Сталь. Все права защищены.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/about" className="text-gray-400 hover:text-white text-sm transition-colors">
              О компании
            </Link>
            <Link href="/delivery" className="text-gray-400 hover:text-white text-sm transition-colors">
              Доставка
            </Link>
            <Link href="/contacts" className="text-gray-400 hover:text-white text-sm transition-colors">
              Контакты
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
