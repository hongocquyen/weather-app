import React from 'react';
import styles from './styles.module.scss';
import { useForecast } from 'src/hooks/useWeather';
import { groupForecastByDays } from 'src/utils/forecast';
import ForecastItem from './ForecaseItem';
import ForecastListSkeleton from './ForecastListSkeleton';

type Props = {
  city: string;
};

const ForecastList: React.FC<Props> = ({ city }) => {
  const { data, isLoading, isError, error } = useForecast(city);

  if (isLoading) {
    return <ForecastListSkeleton />;
  }

  if (isError) {
    return (
      <div className={styles.root}>
        <span className={styles.error}>
          Failed to load weather data
          {error?.message && <>: {error.message}</>}
        </span>
      </div>
    );
  }

  if (!data) {
    return (
      <div className={styles.root}>
        <span className={styles.error}>No weather data available</span>
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
