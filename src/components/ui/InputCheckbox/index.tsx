import React, { FC } from 'react';
import clsx from 'clsx';

import styles from './InputCheckbox.module.scss';

interface InputCheckboxProps {
  label?: any;
  setting: any;
  errorMessage?: string;
}

export const InputCheckbox: FC<InputCheckboxProps> = ({ label, setting, errorMessage }) => {
  return (
    <label className={styles.inputWrapper}>
      <input {...setting} className={clsx(styles.input, errorMessage && styles.error)} type="checkbox" />
      <span className={styles.label}>{label}</span>
    </label>
  );
};
