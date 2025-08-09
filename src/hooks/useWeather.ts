import { useQuery } from '@tanstack/react-query';
import {
  getCurrentWeather,
  getForecast,
  searchLocations,
} from 'src/api/weather';
import { CurrentWeather, Forecast, Location } from 'src/models';

export const useCurrentWeather = (city: string) => {
  return useQuery<CurrentWeather>({
    queryKey: ['weather', city],
    queryFn: () => getCurrentWeather(city),
    enabled: !!city,
  });
};

export const useForecast = (city: string) => {
  return useQuery<Forecast>({
    queryKey: ['forecast', city],
    queryFn: () => getForecast(city),
    enabled: !!city,
  });
};

export const useLocationSearch = (query: string) => {
  return useQuery<Location[]>({
    queryKey: ['locations', query],
    queryFn: () => searchLocations(query),
    enabled: !!query && query.length > 2,
  });
};
