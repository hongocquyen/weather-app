import React from 'react';
import styles from './styles.module.scss';
import { useForecast } from 'src/hooks/useWeather';
import { groupForecastByDays } from 'src/utils/forecast';
import ForecastItem from './ForecaseItem';
import ForecastListSkeleton from './ForecastListSkeleton';
import classNames from 'classnames';

type Props = {
  city: string;
};

const ForecastList: React.FC<Props> = ({ city }) => {
  const { data, isLoading, isError, error } = useForecast(city);

  if (isLoading) {
    return (
      <div className={styles.root}>
        <span className={styles.title}>5-Day Forecast</span>
        <div className={styles.forecastList}>
          <ForecastListSkeleton />
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className={styles.root}>
        <span className={styles.title}>5-Day Forecast</span>
        <div className={classNames(styles.forecastList, styles.errorContainer)}>
          <span className={styles.error}>Failed to load weather data </span>
          <span className={styles.message}>
            {error?.message ? error.message : 'Please try again later.'}
          </span>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className={styles.root}>
        <span className={styles.title}>5-Day Forecast</span>
        <div className={classNames(styles.forecastList, styles.errorContainer)}>
          <span className={styles.error}>No weather data available</span>
          <span className={styles.message}>Please try again later.</span>
        </div>
      </div>
    );
  }

  const dayForecasts = groupForecastByDays(data.list);

  return (
    <div className={styles.root}>
      <span className={styles.title}>5-Day Forecast</span>
      <div className={styles.forecastList}>
        {dayForecasts.map(dayForecast => (
          <ForecastItem key={dayForecast.date} dayForecast={dayForecast} />
        ))}
      </div>
    </div>
  );
};

export default ForecastList;
