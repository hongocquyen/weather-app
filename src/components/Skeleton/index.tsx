import React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';

type Props = {
  className?: string;
};

const Skeleton: React.FC<React.PropsWithChildren<Props>> = ({
  className,
  children,
}) => {
  return (
    <div className={classNames(className, styles.skeleton)}>{children}</div>
  );
};

export default Skeleton;
