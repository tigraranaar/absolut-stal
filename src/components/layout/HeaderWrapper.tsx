'use client';

import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Header from './Header';

const HeaderWrapper: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  // Header будет sticky только на главной странице
  const isSticky = pathname === '/';
  const isTransparent = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    if (isTransparent) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isTransparent]);

  return (
    <Header
      isSticky={isSticky}
      isTransparent={isTransparent}
      isScrolled={isScrolled}
    />
  );
};

export default HeaderWrapper;
