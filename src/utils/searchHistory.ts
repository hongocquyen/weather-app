export interface SearchHistoryItem {
  cityName: string;
  country: string;
  searchedAt: number;
}

const STORAGE_KEY = 'weather_search_history';
const MAX_HISTORY_ITEMS = 10;

export const getSearchHistory = (): SearchHistoryItem[] => {
  if (typeof window === 'undefined') return [];

  try {
    const history = localStorage.getItem(STORAGE_KEY);
    if (history) {
      const parsed = JSON.parse(history);
      return Array.isArray(parsed) ? parsed : [];
    }
  } catch {
    return [];
  }

  return [];
};

export const saveSearchHistory = (history: SearchHistoryItem[]): boolean => {
  if (typeof window === 'undefined') return false;

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
    return true;
  } catch {
    return false;
  }
};

export const addToSearchHistory = (
  cityName: string,
  country: string
): SearchHistoryItem[] => {
  const currentHistory = getSearchHistory();

  const newItem: SearchHistoryItem = {
    cityName,
    country,
    searchedAt: Date.now(),
  };

  // Remove if already exists
  const filtered = currentHistory.filter(
    item => item.cityName.toLowerCase() !== cityName.toLowerCase()
  );

  // Add to beginning and slice to MAX_HISTORY_ITEMS
  const updatedHistory = [newItem, ...filtered].slice(0, MAX_HISTORY_ITEMS);

  saveSearchHistory(updatedHistory);
  return updatedHistory;
};

export const removeFromSearchHistory = (
  cityName: string
): SearchHistoryItem[] => {
  const currentHistory = getSearchHistory();
  const updatedHistory = currentHistory.filter(
    item => item.cityName.toLowerCase() !== cityName.toLowerCase()
  );

  saveSearchHistory(updatedHistory);
  return updatedHistory;
};

export const clearSearchHistory = (): SearchHistoryItem[] => {
  saveSearchHistory([]);
  return [];
};
