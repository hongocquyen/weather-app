import React from 'react';
import { getCityByCoords } from 'src/api/weather';

export const FALLBACK_CITY = 'Singapore';

export const useGeolocation = () => {
  const [city, setCity] = React.useState<string>(FALLBACK_CITY);
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);

  const getCurrentLocationCity = async () => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported');
      return;
    }

    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      async position => {
        try {
          const cityName = await getCityByCoords(
            position.coords.latitude,
            position.coords.longitude
          );
          setCity(cityName);
        } catch {
          setError('Failed to get city name');
        }
        setLoading(false);
      },
      error => {
        setError(error.message);
        setLoading(false);
      }
    );
  };

  return { city, error, loading, getCurrentLocationCity };
};
