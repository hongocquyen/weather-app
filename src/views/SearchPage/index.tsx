import React from 'react';
import styles from './styles.module.scss';
import SearchInput from './components/SearchInput';

const SearchPage: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <SearchInput />
      </div>
    </div>
  );
};

export default SearchPage;
