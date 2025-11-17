import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
  textColor?: 'dark' | 'white';
}

const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showText = true,
  className = '',
  textColor = 'dark',
}) => {
  const sizes = {
    sm: { logo: 32, text: 'text-sm' },
    md: { logo: 48, text: 'text-lg' },
    lg: { logo: 56, text: 'text-2xl' },
  };

  const currentSize = sizes[size];

  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <div className="relative">
        <Image
          src="/images/logo.png"
          alt="Абсолют Сталь - Логотип"
          width={currentSize.logo}
          height={currentSize.logo}
          className="rounded-lg"
          priority
        />
      </div>
      {showText && (
        <span
          className={`ml-3 font-bold ${textColor === 'white' ? 'text-white' : 'text-gray-900'} ${currentSize.text}`}
        >
          Абсолют Сталь
        </span>
      )}
    </Link>
  );
};

export default Logo;
