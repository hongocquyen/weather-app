import React from 'react';
import Image from 'next/image';
import { getWeatherIconUrl } from 'src/utils/weather';
import { DayForecast, convertToHourlyForecast } from 'src/utils/forecast';
import styles from './styles.module.scss';
import { formatDateShort } from 'src/utils/date';

type Props = {
  dayForecast: DayForecast;
};

const ForecastItem: React.FC<Props> = ({ dayForecast }) => {
  return (
    <div className={styles.root}>
      <div className={styles.dateContainer}>
        <span className={styles.date}>
          {formatDateShort(new Date(dayForecast.date))}
        </span>
      </div>

      <div className={styles.content}>
        {dayForecast.items.map(item => {
          const hourly = convertToHourlyForecast(item);
          return (
            <div key={hourly.dt} className={styles.item}>
              <div className={styles.leftContent}>
                <span className={styles.time}>{hourly.time}</span>
              </div>

              <div className={styles.centerContent}>
                <Image
                  src={getWeatherIconUrl(hourly.weather.icon, '2x')}
                  alt={hourly.weather.description}
                  width={64}
                  height={64}
                  className={styles.weatherIcon}
                />
                <div className={styles.temps}>
                  <span className={styles.minTemp}>
                    {Math.round(hourly.tempMin)}/
                  </span>
                  <span className={styles.maxTemp}>
                    {Math.round(hourly.tempMax)}°C
                  </span>
                </div>
              </div>

              <div className={styles.rightContent}>
                <span className={styles.description}>
                  {hourly.weather.description}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ForecastItem;
