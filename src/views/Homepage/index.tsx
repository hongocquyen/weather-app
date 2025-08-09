import React from 'react';
import styles from './styles.module.scss';
import CurrentWeather from './components/CurrentWeather';
import ForecastList from './components/ForecastList';

type Props = {
  city: string;
  geoLoading: boolean;
};

const Homepage: React.FC<Props> = ({ city }) => {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <CurrentWeather city={city} />
        <ForecastList city={city} />
      </div>
    </div>
  );
};

export default Homepage;
