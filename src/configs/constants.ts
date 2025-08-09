import { ENV_NAME } from '../models/enums';

export const ENV: ENV_NAME =
  (process.env.NEXT_PUBLIC_APP_ENV as ENV_NAME) || ENV_NAME.PRODUCTION;

export const WEATHER_API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
