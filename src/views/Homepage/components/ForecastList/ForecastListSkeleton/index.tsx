import React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';

type Props = {
  className?: string;
};

const ForecastListSkeleton: React.FC<Props> = ({ className }) => {
  return <div className={classNames(styles.root, className)}></div>;
};

export default ForecastListSkeleton;
