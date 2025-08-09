import { ENV } from './constants';

export const WEATHER_ENDPOINT = (() => {
  const apis: Record<typeof ENV, string> = {
    production: 'https://api.openweathermap.org/data/2.5',
    staging: 'https://api.openweathermap.org/data/2.5',
  };
  return apis[ENV];
})();

export const GEO_ENDPOINT = (() => {
  const apis: Record<typeof ENV, string> = {
    production: 'http://api.openweathermap.org/geo/1.0',
    staging: 'http://api.openweathermap.org/geo/1.0',
  };
  return apis[ENV];
})();
