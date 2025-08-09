'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import { useGeolocation } from 'src/hooks/useGeolocation';
import { RouteName } from 'src/models';
import IconSearch from 'assets/svg/ic_search.svg';
import styles from './styles.module.scss';
import Skeleton from '../Skeleton';

const Header = () => {
  const searchParams = useSearchParams();
  const urlCity = searchParams.get('city');
  const {
    city: geoCity,
    loading: geoLoading,
    getCurrentLocationCity,
  } = useGeolocation();

  React.useEffect(() => {
    getCurrentLocationCity();
  }, []);

  const selectedCity = urlCity || geoCity;

  return (
    <header className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          {geoLoading ? (
            <Skeleton className={styles.currentCitySkeleton} />
          ) : (
            <Link href={RouteName.Home}>
              <span className={styles.currentCity}>{selectedCity}</span>
            </Link>
          )}
          <Link href={RouteName.Search}>
            <IconSearch className={styles.iconSearch} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
