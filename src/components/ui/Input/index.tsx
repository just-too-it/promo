import React, { FC } from 'react';
import clsx from 'clsx';

import styles from './Input.module.scss';

interface InputProps {
  label?: string;
  setting: any;
  errorMessage?: string;
  placeholder: string;
  type?: string;
}

export const Input: FC<InputProps> = ({ label, setting, errorMessage, placeholder, type }) => {
  return (
    <div className={styles.inputWrapper}>
      <label>
        <span className={styles.label}>{label}</span>
        <input
          {...setting}
          className={clsx(styles.input, errorMessage && styles.error)}
          placeholder={placeholder}
          type={type}
        />
      </label>
      <div>
        {errorMessage && <p className={styles.errorMessage}>{errorMessage || 'Проверьте корректность заполнения'}</p>}
      </div>
    </div>
  );
};
