import React from 'react';
import styles from './styles.module.scss';
import { useCurrentWeather } from 'src/hooks/useWeather';
import Image from 'next/image';
import {
  formatDistance,
  getWeatherIconUrl,
  getWindArrowRotation,
} from 'src/utils/weather';
import { formatDateShort } from 'src/utils/date';
import CurrentWeatherSkeleton from './CurrentWeatherSkeleton';
import classNames from 'classnames';

type Props = {
  city: string;
};

const CurrentWeather: React.FC<Props> = ({ city }) => {
  const { data, isLoading, isError, error } = useCurrentWeather(city);

  if (isLoading) {
    return <CurrentWeatherSkeleton />;
  }

  if (isError) {
    return (
      <div className={classNames(styles.root, styles.errorContainer)}>
        <span className={styles.error}>Failed to load weather data </span>
        <span className={styles.message}>
          {error?.message ? error.message : 'Please try again later.'}
        </span>
      </div>
    );
  }

  if (!data) {
    return (
      <div className={classNames(styles.root, styles.errorContainer)}>
        <span className={styles.error}>No weather data available</span>
      </div>
    );
  }

  return (
    <div className={styles.root}>
      <div className={styles.dateContainer}>
        <span className={styles.city}>{data.name}</span>
        <span className={styles.date}>
          {formatDateShort(new Date(data.dt * 1000))}
        </span>
      </div>
      <div className={styles.infoContainer}>
        <Image
          src={getWeatherIconUrl(data.weather[0].icon)}
          alt={data.weather[0].description}
          width={256}
          height={256}
          className={styles.weatherIcon}
          priority
        />
        <div className={styles.generalContainer}>
          <span className={styles.temp}>{data.main.temp}°C</span>
          <span className={styles.description}>
            {data.weather[0].description}
          </span>
        </div>
      </div>
      <div className={styles.extraContainer}>
        <div className={styles.item}>
          <span className={styles.label}>Humidity</span>
          <span className={styles.value}>
            {data.main.humidity}
            <span>%</span>
          </span>
        </div>
        <div className={styles.item}>
          <span className={styles.label}>Winds</span>
          <div className={styles.windContainer}>
            <div
              className={styles.windDirection}
              style={{
                transform: `rotate(${getWindArrowRotation(data.wind.deg)}deg)`,
              }}
            >
              <span>↑</span>
            </div>
            <span className={styles.value}>{data.wind.speed} m/s</span>
          </div>
        </div>
        <div className={styles.item}>
          <span className={styles.label}>Visibility</span>
          <span className={styles.value}>
            {formatDistance(data.visibility)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
