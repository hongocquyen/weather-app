import React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';
import Skeleton from 'src/components/Skeleton';

type Props = {
  className?: string;
};

const CurrentWeatherSkeleton: React.FC<Props> = ({ className }) => {
  return <Skeleton className={classNames(styles.root, className)} />;
};

export default CurrentWeatherSkeleton;
