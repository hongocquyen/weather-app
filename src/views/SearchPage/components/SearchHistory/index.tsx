'use client';

import React from 'react';

import styles from './styles.module.scss';
import IconSearch from 'assets/svg/ic_search.svg';
import IconTrashCan from 'assets/svg/ic_delete.svg';
import { useSearchHistory } from 'src/hooks/useSearchHistory';
import { RouteName } from 'src/models';
import Link from 'next/link';

type Props = {};

const SearchHistory: React.FC<Props> = () => {
  const { history, removeFromHistory, clearHistory } = useSearchHistory();

  if (history.length === 0) {
    return (
      <div className={styles.root}>
        <div className={styles.titleContainer}>
          <span className={styles.title}>Search history</span>
        </div>
        <div className={styles.emptyContainer}>
          <span className={styles.empty}>No search history</span>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.root}>
      <div className={styles.titleContainer}>
        <span className={styles.title}>Search history</span>
        <span className={styles.clearHistory} onClick={clearHistory}>
          Clear all
        </span>
      </div>
      <div className={styles.historyList}>
        {history.map(item => (
          <div key={item.cityName} className={styles.item}>
            <Link
              href={`${RouteName.Home}?city=${encodeURIComponent(item.cityName)}`}
            >
              <span className={styles.cityName}>
                {item.cityName}, {item.country}
              </span>
            </Link>
            <div className={styles.actionContainer}>
              <Link
                href={`${RouteName.Home}?city=${encodeURIComponent(item.cityName)}`}
              >
                <IconSearch className={styles.iconSearch} />
              </Link>
              <div onClick={() => removeFromHistory(item.cityName)}>
                <IconTrashCan className={styles.iconTrashCan} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchHistory;
