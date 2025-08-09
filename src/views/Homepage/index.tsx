import React from 'react';
import styles from './styles.module.scss';
import { CurrentWeather } from 'src/models';

type Props = {
  data?: CurrentWeather;
  city: string;
  isLoading: boolean;
  isError: boolean;
};

const Homepage: React.FC<Props> = () => {
  return (
    <div className={styles.root}>
      <span>Homepage</span>
    </div>
  );
};

export default Homepage;
