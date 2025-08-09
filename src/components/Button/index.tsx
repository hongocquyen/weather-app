import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';
import Spinner from '../Spinner';

type Props = {
  className?: string;
  label: string | React.ReactElement;
  disabled?: boolean;
  type?: 'primary';
  loading?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: React.FC<Props> = ({
  className,
  label,
  disabled = false,
  type = 'primary',
  loading = false,
  onClick,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={classNames(
        styles.button,
        disabled && styles.disabled,
        styles[type],
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      <span className={classNames(styles.label, loading && styles.hide)}>
        {label}
      </span>
      {loading && <Spinner size={30} className={styles.loading} />}
    </button>
  );
};

export default Button;
