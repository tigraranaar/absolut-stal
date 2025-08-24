import React, { useState, useEffect } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  placeholder = 'Поиск товаров...',
  className = '',
}) => {
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  // Debounce поиска
  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.trim()) {
        setIsSearching(true);
        onSearch(query.trim());
        setIsSearching(false);
      } else {
        onSearch('');
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [query, onSearch]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setIsSearching(true);
      onSearch(query.trim());
      setIsSearching(false);
    }
  };

  return (
    <div className={`relative ${className}`}>
      <form onSubmit={handleSubmit} className="relative">
        {/* Иконка поиска */}
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            className="h-5 w-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {/* Поле ввода */}
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="block w-full rounded-lg border border-gray-300 bg-white py-3 pr-12 pl-10 leading-5 placeholder-gray-500 transition-colors focus:border-yellow-500 focus:placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
          placeholder={placeholder}
        />

        {/* Кнопка поиска */}
        <div className="absolute inset-y-0 right-0 flex items-center">
          <button
            type="submit"
            disabled={isSearching}
            className="inline-flex items-center rounded-r-lg border border-transparent bg-yellow-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-yellow-700 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSearching ? (
              <>
                <svg
                  className="mr-2 -ml-1 h-4 w-4 animate-spin text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Поиск...
              </>
            ) : (
              'Найти'
            )}
          </button>
        </div>
      </form>

      {/* Индикатор загрузки */}
      {isSearching && (
        <div className="absolute inset-y-0 right-0 flex items-center pr-32">
          <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-yellow-600"></div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
