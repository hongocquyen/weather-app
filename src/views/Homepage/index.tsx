'use client';

import React from 'react';
import styles from './styles.module.scss';
import CurrentWeather from './components/CurrentWeather';
import ForecastList from './components/ForecastList';
import { useSearchParams } from 'next/navigation';
import { useGeolocation } from 'src/hooks/useGeolocation';

const Homepage: React.FC = () => {
  const searchParams = useSearchParams();
  const urlCity = searchParams.get('city');
  const { city: geoCity, getCurrentLocationCity } = useGeolocation();

  const searchCity = urlCity || geoCity;

  React.useEffect(() => {
    getCurrentLocationCity();
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <CurrentWeather city={searchCity} />
        <ForecastList city={searchCity} />
      </div>
    </div>
  );
};

export default Homepage;
