import { WEATHER_API_KEY } from 'src/configs/constants';
import { GEO_ENDPOINT, WEATHER_ENDPOINT } from 'src/configs/endpoints';
import { FALLBACK_CITY } from 'src/hooks/useGeolocation';

export const getCurrentWeather = async (city: string) => {
  const response = await fetch(
    `${WEATHER_ENDPOINT}/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`
  );
  if (!response.ok) throw new Error('Failed to fetch current weather');
  return response.json();
};

export const getForecast = async (city: string) => {
  const response = await fetch(
    `${WEATHER_ENDPOINT}/forecast?q=${city}&appid=${WEATHER_API_KEY}&units=metric`
  );
  if (!response.ok) throw new Error('Failed to fetch forecast');
  return response.json();
};

export const searchLocations = async (query: string) => {
  const response = await fetch(
    `${GEO_ENDPOINT}/direct?q=${query}&limit=5&appid=${WEATHER_API_KEY}`
  );
  if (!response.ok) throw new Error('Failed to search locations');
  return response.json();
};

export const getCityByCoords = async (lat: number, lon: number) => {
  const response = await fetch(
    `${GEO_ENDPOINT}/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${WEATHER_API_KEY}`
  );
  if (!response.ok) throw new Error('Failed to get city by coordinates');
  const data = await response.json();
  return data[0]?.name || FALLBACK_CITY;
};
