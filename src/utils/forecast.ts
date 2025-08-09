import { ForecastItem } from 'src/models/types';

export interface DayForecast {
  date: string;
  items: ForecastItem[];
}

export interface HourlyForecast {
  time: string;
  temp: number;
  tempMin: number;
  tempMax: number;
  weather: {
    main: string;
    description: string;
    icon: string;
  };
  dt: number;
}

export const groupForecastByDays = (
  forecastList: ForecastItem[]
): DayForecast[] => {
  const grouped = forecastList.reduce(
    (acc, item) => {
      const date = item.dt_txt.split(' ')[0];

      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(item);

      return acc;
    },
    {} as Record<string, ForecastItem[]>
  );

  return Object.entries(grouped).map(([date, dayItems]) => ({
    date,
    items: dayItems,
  }));
};

export const convertToHourlyForecast = (item: ForecastItem): HourlyForecast => {
  return {
    time: item.dt_txt.split(' ')[1].slice(0, 5),
    temp: item.main.temp,
    tempMin: item.main.temp_min,
    tempMax: item.main.temp_max,
    weather: item.weather[0],
    dt: item.dt,
  };
};
