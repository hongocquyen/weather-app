import classNames from 'classnames';
import React from 'react';
import styles from './styles.module.scss';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  checked?: boolean;
};
const Checkbox: React.FC<Props> = ({ className, checked, ...props }) => {
  return (
    <input
      type="checkbox"
      checked={checked}
      {...props}
      className={classNames(styles.checkbox, className)}
    />
  );
};

export default Checkbox;
