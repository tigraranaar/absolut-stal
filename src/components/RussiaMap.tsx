'use client';

import { ReactSVG } from 'react-svg';
import { useState } from 'react';

export default function RussiaMap() {
  const [tooltipText, setTooltipText] = useState<string>('');

  const deliveryRegions = [
    'Удмуртская республика',
    'Кировская область',
    'Республика Татарстан',
    'Пермский край',
  ];

  const handleSvgInjection = (svg: SVGSVGElement) => {
    const paths = svg.querySelectorAll('path');

    paths.forEach((path) => {
      const title = path.getAttribute('title');

      if (title && deliveryRegions.includes(title)) {
        path.setAttribute('fill', '#fbbf24');
      } else {
        path.setAttribute('fill', '#e5e7eb');
      }

      path.setAttribute('stroke', '#d1d5db');
      path.setAttribute('stroke-width', '1');

      if (title) {
        path.style.cursor = 'pointer';
        path.style.transition = 'stroke 0.1s ease';

        path.addEventListener('mouseenter', () => {
          path.setAttribute('filter', 'brightness(0.85)');
          setTooltipText(title);
        });

        path.addEventListener('mouseleave', () => {
          path.setAttribute('filter', 'brightness(1)');
          setTooltipText('');
        });
      }
    });
  };

  return (
    <div className="relative mx-auto max-w-7xl px-4 py-12">
      <div className="mb-8 text-center">
        <h2 className="mb-4 text-3xl font-bold text-gray-900">
          Регионы доставки
        </h2>
      </div>

      {/* Легенда */}
      <div className="mb-8 flex flex-wrap items-center justify-center gap-6">
        <div className="flex items-center gap-2">
          <div className="h-4 w-8 rounded bg-yellow-500"></div>
          <span className="text-sm text-gray-700">Доставка доступна</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-4 w-8 rounded bg-gray-300"></div>
          <span className="text-sm text-gray-700">
            Доставка обсуждается индивидуально
          </span>
        </div>
      </div>

      <div className="relative">
        <ReactSVG
          src="/images/russia-regions.svg"
          afterInjection={handleSvgInjection}
          className="w-full"
        />

        {tooltipText && (
          <div className="pointer-events-none fixed bottom-8 left-1/2 z-50 -translate-x-1/2 rounded-lg bg-gray-900 px-4 py-2 text-white shadow-lg">
            {tooltipText}
          </div>
        )}
      </div>
    </div>
  );
}
