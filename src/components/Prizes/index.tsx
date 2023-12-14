import React from 'react';

import { Prize } from 'components/Prizes/Prize';
import { PrizesProps } from 'components/Prizes/Prize.types';
import guaranteedPrize from 'assets/images/guaranteed-prize.png';

import styles from './Prizes.module.scss';

export const Prizes = ({ prizes }: PrizesProps) => {
  return (
    <section className={styles.prizes} id="prizes">
      <h1 className={styles.title}>Выигрывай призы</h1>
      <h2 className={styles.subtitle}>Гарантированный приз</h2>
      <article className={styles.guaranteedPrize}>
        <div className={styles.prizeWrapper}>
          <img src={guaranteedPrize} alt="Гарантированные призы" />
        </div>
        <span>Зарегистрируйте один чек и получите подписку Яндекс Плюс на 1 год</span>
      </article>
      <h2 className={styles.subtitle}>Ежемесячный приз</h2>
      <div className={styles.allPrizes}>
        {prizes.map((item) => (
          <Prize id={item.id} image={item.image} name={item.name} key={item.id} />
        ))}
      </div>
    </section>
  );
};
