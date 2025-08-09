import React from 'react';
import classNames from 'classnames';
import Image from 'next/image';

import icLoading from 'assets/svg/ic_loading.svg?url';
import styles from './styles.module.scss';

type Props = {
  className?: string;
  size?: 'large' | 'normal' | 'small' | number;
};

const Spinner: React.FC<Props> = ({ className, size = 'normal' }) => {
  const numberSize = typeof size === 'number' ? size : 100;
  return (
    <div className={classNames(styles.container, className)}>
      <Image
        src={icLoading}
        alt="loading"
        width={numberSize}
        height={numberSize}
        className={typeof size !== 'number' ? styles[size] : ''}
        priority
        draggable={false}
      />
    </div>
  );
};

export default Spinner;
