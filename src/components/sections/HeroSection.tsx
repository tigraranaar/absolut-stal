import React from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/images/bg.jpg)',
      }}
    >
      {/* Overlay для лучшей читаемости текста */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Контент поверх overlay */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Левая колонка - Текст */}
          <div className="text-center lg:text-left">
            <h1 className="mb-6 text-4xl leading-tight font-bold text-white lg:text-6xl">
              <span className="text-yellow-400">Абсолют Сталь</span>
              <br />
              Металлопрокат в Ижевске
            </h1>
            <p className="mb-8 text-xl leading-relaxed text-gray-200">
              Широкий ассортимент металлопроката, профессиональная резка,
              быстрая доставка по всей Удмуртской Республике и близлежащим
              регионам.
            </p>
          </div>

          {/* Правая колонка - Кнопки действий */}
          <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-center">
            <Link href="/catalog">
              <Button size="lg" className="w-full sm:w-auto">
                Перейти в каталог
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Скачать прайс-лист
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
