import React from 'react';

import { useAppSelector } from 'store/hooks';
import successIcon from 'assets/images/success.svg';

import styles from './SuccessReg.module.scss';

export const SuccessReg = () => {
  const { params } = useAppSelector((state) => state.reg);

  return (
    <div className={styles.successReg}>
      <img src={successIcon} alt="Иконка успех" />
      <h1 className={styles.title}>Ваша регистрация прошла успешно!</h1>
      <p className={styles.text}>Добро пожаловать, {params.name}!</p>
    </div>
  );
};
