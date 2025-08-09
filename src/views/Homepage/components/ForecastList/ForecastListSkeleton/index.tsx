import React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';
import Skeleton from 'src/components/Skeleton';

type Props = {
  className?: string;
};

const ForecastListSkeleton: React.FC<Props> = ({ className }) => {
  return (
    <div className={classNames(styles.root, className)}>
      <div className={styles.itemContainer}>
        <Skeleton className={styles.title} />
        <div className={styles.itemContent}>
          <Skeleton className={styles.item} />
          <Skeleton className={styles.item} />
        </div>
      </div>
      <div className={styles.itemContainer}>
        <Skeleton className={styles.title} />
        <div className={styles.itemContent}>
          <Skeleton className={styles.item} />
          <Skeleton className={styles.item} />
          <Skeleton className={styles.item} />
          <Skeleton className={styles.item} />
        </div>
      </div>
      <div className={styles.itemContainer}>
        <Skeleton className={styles.title} />
        <div className={styles.itemContent}>
          <Skeleton className={styles.item} />
          <Skeleton className={styles.item} />
          <Skeleton className={styles.item} />
          <Skeleton className={styles.item} />
        </div>
      </div>
    </div>
  );
};

export default ForecastListSkeleton;
