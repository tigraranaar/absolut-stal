'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Logo from '@/components/ui/Logo';

interface HeaderProps {
  isSticky?: boolean;
  isTransparent?: boolean;
  isScrolled?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  isSticky = false,
  isTransparent = false,
  isScrolled = false,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Каталог', href: '/catalog' },
    { name: 'Доставка', href: '/delivery' },
    { name: 'О компании', href: '/about' },
    { name: 'Контакты', href: '/contacts' },
  ];

  const getHeaderClasses = () => {
    let classes = '';

    if (isSticky) {
      classes += ' header-sticky';
    }

    if (isTransparent) {
      classes += ' header-transparent';
      if (isScrolled) {
        classes += ' scrolled';
      }
    } else {
      classes += ' border-b border-gray-200 bg-white shadow-sm';
    }

    return classes;
  };

  return (
    <header className={getHeaderClasses()}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Логотип */}
          <div className="flex-shrink-0">
            <Logo
              size="lg"
              textColor={isTransparent && !isScrolled ? 'white' : 'dark'}
            />
          </div>

          {/* Десктопная навигация */}
          <nav className="hidden space-x-8 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors hover:text-yellow-600 ${
                  isTransparent && !isScrolled ? 'text-white' : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Кнопки действий и контакты */}
          <div className="hidden items-center space-x-6 md:flex">
            <button className="rounded-md bg-yellow-500 px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-yellow-600">
              Заказать звонок
            </button>
            <div className="flex flex-col text-right">
              <a
                href="tel:+73412566822"
                className={`text-sm font-medium transition-colors hover:text-yellow-600 ${
                  isTransparent && !isScrolled ? 'text-white' : 'text-gray-700'
                }`}
              >
                +73412566822
              </a>
              <a
                href="mailto:abst18@bk.ru"
                className={`text-xs transition-colors hover:text-yellow-600 ${
                  isTransparent && !isScrolled
                    ? 'text-gray-200'
                    : 'text-gray-500'
                }`}
              >
                abst18@bk.ru
              </a>
            </div>
          </div>

          {/* Мобильная кнопка меню */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 transition-colors hover:text-yellow-600 ${
                isTransparent && !isScrolled ? 'text-white' : 'text-gray-700'
              }`}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Мобильное меню */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 border-t border-gray-200 bg-white px-2 pt-2 pb-3 sm:px-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-yellow-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="space-y-2 pt-4">
                <button
                  className="block w-full rounded-md bg-yellow-500 px-4 py-2 text-center text-sm font-medium text-gray-900 transition-colors hover:bg-yellow-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Заказать звонок
                </button>
                <div className="space-y-1 rounded-md bg-gray-50 px-4 py-3">
                  <a
                    href="tel:+7(3412)123-456"
                    className="block text-sm font-medium text-gray-700 hover:text-yellow-600"
                  >
                    +7 (3412) 566822
                  </a>
                  <a
                    href="mailto:info@absolutstal.ru"
                    className="block text-xs text-gray-500 hover:text-yellow-600"
                  >
                    info@absolutstal.ru
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
