'use client';

import { useSearchParams } from 'next/navigation';
import React from 'react';
import { useGeolocation } from 'src/hooks/useGeolocation';
import { useCurrentWeather } from 'src/hooks/useWeather';
import Homepage from 'src/views/Homepage';

export default function Home() {
  const searchParams = useSearchParams();
  const urlCity = searchParams.get('city');
  const { city: geoCity, getCurrentLocationCity } = useGeolocation();

  const searchCity = urlCity || geoCity;
  const { data, isLoading, isError } = useCurrentWeather(searchCity);

  React.useEffect(() => {
    getCurrentLocationCity();
  }, []);

  return (
    <Homepage
      data={data}
      isLoading={isLoading}
      isError={isError}
      city={searchCity}
    />
  );
}
