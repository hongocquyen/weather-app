import React from 'react';
import {
  SearchHistoryItem,
  getSearchHistory,
  addToSearchHistory,
  removeFromSearchHistory,
  clearSearchHistory,
} from 'src/utils/searchHistory';

export const useSearchHistory = () => {
  const [history, setHistory] = React.useState<SearchHistoryItem[]>([]);

  React.useEffect(() => {
    setHistory(getSearchHistory());
  }, []);

  const addToHistory = React.useCallback(
    (cityName: string, country: string) => {
      const updatedHistory = addToSearchHistory(cityName, country);
      setHistory(updatedHistory);
    },
    []
  );

  const removeFromHistory = React.useCallback((cityName: string) => {
    const updatedHistory = removeFromSearchHistory(cityName);
    setHistory(updatedHistory);
  }, []);

  const clearHistory = React.useCallback(() => {
    const updatedHistory = clearSearchHistory();
    setHistory(updatedHistory);
  }, []);

  return {
    history,
    addToHistory,
    removeFromHistory,
    clearHistory,
  };
};
