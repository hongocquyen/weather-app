import React from 'react';
import styles from './styles.module.scss';
import SearchInput from './components/SearchInput';
import SearchHistory from './components/SearchHistory';

const SearchPage: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <SearchInput />
        <SearchHistory />
      </div>
    </div>
  );
};

export default SearchPage;
