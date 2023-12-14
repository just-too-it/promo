import React, { FC } from 'react';

import { PrizeProps } from 'components/Prizes/Prize.types';

import styles from './Prize.module.scss';

export const Prize: FC<PrizeProps> = ({ image, name }) => {
  return (
    <article className={styles.prize}>
      <div className={styles.imgWrapper}>
        <img src={image} alt={name} />
      </div>
      <div className={styles.block}>
        <span>{name}</span>
      </div>
    </article>
  );
};
