export const getWeatherIconUrl = (
  iconCode: string,
  size: '2x' | '4x' = '4x'
): string => {
  return `https://openweathermap.org/img/wn/${iconCode}@${size}.png`;
};

export const getWindArrowRotation = (degrees: number): number => {
  return (degrees + 180) % 360;
};

export const formatDistance = (meters: number): string => {
  if (meters >= 1000) {
    const km = meters / 1000;
    if (km >= 10) {
      return `${Math.round(km)} km`;
    }
    return `${km.toFixed(1)} km`;
  }
  return `${meters} m`;
};
