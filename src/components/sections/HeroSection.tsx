import React from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Левая колонка - Текст */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="text-yellow-500">Абсолют Сталь</span>
              <br />
              Металлопрокат в Ижевске
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Широкий ассортимент металлопроката, профессиональная резка, 
              быстрая доставка по всей Удмуртской Республике и близлежащим регионам.
            </p>
            
            {/* Кнопки действий */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/catalog">
                <Button size="lg" className="w-full sm:w-auto">
                  Перейти в каталог
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Скачать прайс-лист
              </Button>
            </div>

            {/* Дополнительная информация */}
            <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-gray-600">
              <div className="flex items-center justify-center lg:justify-start">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                <span>Быстрая доставка</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                <span>Гарантия качества</span>
              </div>
            </div>
          </div>

          {/* Правая колонка - Визуальный элемент */}
          <div className="relative">
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl p-8 lg:p-12 shadow-2xl">
              <div className="text-center text-white">
                <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Широкий ассортимент</h3>
                <p className="text-lg opacity-90">
                  Лист, труба, уголок, швеллер, арматура и многое другое
                </p>
              </div>
            </div>
            
            {/* Декоративные элементы */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-500 rounded-full opacity-80"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-yellow-400 rounded-full opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

