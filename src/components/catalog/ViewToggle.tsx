import React from 'react';

type ViewMode = 'cards' | 'table';

interface ViewToggleProps {
  currentView: ViewMode;
  onViewChange: (view: ViewMode) => void;
  className?: string;
}

const ViewToggle: React.FC<ViewToggleProps> = ({
  currentView,
  onViewChange,
  className = '',
}) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <span className="text-sm font-medium text-gray-700">Вид:</span>

      {/* Кнопка карточки */}
      <button
        onClick={() => onViewChange('cards')}
        className={`flex items-center space-x-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
          currentView === 'cards'
            ? 'bg-yellow-500 text-white'
            : 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
        }`}
      >
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
          />
        </svg>
        <span>Карточки</span>
      </button>

      {/* Кнопка таблицы */}
      <button
        onClick={() => onViewChange('table')}
        className={`flex items-center space-x-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
          currentView === 'table'
            ? 'bg-yellow-500 text-white'
            : 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
        }`}
      >
        <svg
          className="h-4 w-4"
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
        <span>Таблица</span>
      </button>
    </div>
  );
};

export default ViewToggle;
