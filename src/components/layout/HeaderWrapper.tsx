'use client';

import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Header from './Header';

const HeaderWrapper: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Header будет sticky только на главной странице
  const isSticky = pathname === '/';
  const isTransparent = pathname === '/';

  useEffect(() => {
    setMounted(true);

    if (!isTransparent) return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    // Устанавливаем начальное состояние скролла
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isTransparent]);

  // Во время SSR рендерим без isScrolled, чтобы избежать несоответствий
  return (
    <Header
      isSticky={isSticky}
      isTransparent={isTransparent}
      isScrolled={mounted ? isScrolled : false}
    />
  );
};

export default HeaderWrapper;
