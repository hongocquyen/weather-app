import React from 'react';
import styles from './styles.module.scss';
import CurrentWeather from './components/CurrentWeather';

type Props = {
  city: string;
  geoLoading: boolean;
};

const Homepage: React.FC<Props> = ({ city }) => {
  return (
    <div className={styles.root}>
      <CurrentWeather city={city} />
    </div>
  );
};

export default Homepage;
