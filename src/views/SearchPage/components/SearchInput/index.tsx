'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useLocationsSearch } from 'src/hooks/useWeather';
import styles from './styles.module.scss';
import { useDebounce } from 'src/hooks/useDebounce';
import IconSearch from 'assets/svg/ic_search.svg';
import Spinner from 'src/components/Spinner';
import { useSearchHistory } from 'src/hooks/useSearchHistory';

type Props = {
  placeholder?: string;
  autoFocus?: boolean;
};

const SearchInput: React.FC<Props> = ({
  placeholder = 'Search for a city...',
  autoFocus = true,
}) => {
  const [query, setQuery] = React.useState('');
  const [isOpen, setIsOpen] = React.useState(false);
  const router = useRouter();
  const { addToHistory } = useSearchHistory();

  const debouncedQuery = useDebounce(query, 300);
  const {
    data: locations,
    isLoading,
    isError,
  } = useLocationsSearch(debouncedQuery);

  const handleInputChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setQuery(value);
      setIsOpen(value.length > 0);
    },
    []
  );

  const handleSuggestionClick = React.useCallback(
    (cityName: string, country: string) => {
      setQuery('');
      setIsOpen(false);
      addToHistory(cityName, country);
      router.push(`/?city=${encodeURIComponent(cityName)}`);
    },
    [router]
  );

  const handleInputFocus = React.useCallback(() => {
    if (query.length > 0) {
      setIsOpen(true);
    }
  }, [query]);

  const handleInputBlur = React.useCallback(() => {
    // Delay to allow suggestion click
    setTimeout(() => setIsOpen(false), 200);
  }, []);

  const renderSuggestionContent = () => {
    if (isLoading) {
      return (
        <div className={styles.loadingContainer}>
          <Spinner size={32} />
        </div>
      );
    }

    if (isError) {
      return (
        <div className={styles.errorContainer}>
          <span>Failed to search cities</span>
        </div>
      );
    }

    if (locations && locations.length > 0) {
      return (
        <ul className={styles.suggestionsList}>
          {locations.map(location => (
            <li
              key={`${location.name}-${location.country}-${location.lat}`}
              className={styles.suggestionItem}
              onClick={() =>
                handleSuggestionClick(location.name, location.country)
              }
            >
              <span className={styles.cityName}>{location.name}</span>
              <span className={styles.countryName}>{location.country}</span>
            </li>
          ))}
        </ul>
      );
    }

    if (locations && locations.length === 0) {
      return (
        <div className={styles.emptyContainer}>
          <span>No cities found</span>
        </div>
      );
    }

    return null;
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputWrapper}>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          placeholder={placeholder}
          autoFocus={autoFocus}
          className={styles.searchInput}
        />
        <IconSearch className={styles.searchIcon} />
      </div>

      {isOpen && (
        <div className={styles.suggestionsDropdown}>
          {renderSuggestionContent()}
        </div>
      )}
    </div>
  );
};

export default SearchInput;
