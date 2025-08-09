'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import { useGeolocation } from 'src/hooks/useGeolocation';
import { RouteName } from 'src/models';
import IconSearch from 'assets/svg/ic_search.svg';
import styles from './styles.module.scss';

const Header = () => {
  const searchParams = useSearchParams();
  const urlCity = searchParams.get('city');
  const { city: geoCity } = useGeolocation();

  const currentCity = urlCity || geoCity;

  return (
    <header className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Link href={RouteName.Home}>
            <span className={styles.currentCity}>{currentCity}</span>
          </Link>
          <Link href={RouteName.Search}>
            <IconSearch className={styles.iconSearch} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
