'use client';

import { useSearchParams } from 'next/navigation';
import React from 'react';
import { useGeolocation } from 'src/hooks/useGeolocation';
import Homepage from 'src/views/Homepage';

export default function Home() {
  const searchParams = useSearchParams();
  const urlCity = searchParams.get('city');
  const {
    city: geoCity,
    loading: geoLoading,
    getCurrentLocationCity,
  } = useGeolocation();

  const searchCity = urlCity || geoCity;

  React.useEffect(() => {
    getCurrentLocationCity();
  }, []);

  return <Homepage city={searchCity} geoLoading={geoLoading} />;
}
