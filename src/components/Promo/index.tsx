import React, { FC } from 'react';
import clsx from 'clsx';

import { Menu } from 'components/Menu';
import { menuItems } from 'components/Menu/data';
import { Button } from 'components/ui/Button';
import { Logo } from 'components/ui/Logo';

import styles from './Promo.module.scss';

interface PromoProps {
  setIsModalOpen: (x: boolean) => void;
}

export const Promo: FC<PromoProps> = ({ setIsModalOpen }) => {
  return (
    <section className={styles.promo}>
      <header className={clsx('container', styles.header)}>
        <Logo />
        <Menu menu={menuItems} isHeader setIsModalOpen={setIsModalOpen} />
      </header>

      <div className={styles.content}>
        <div className={styles.action}>
          <div className={styles.callToAction}>Участвуй в акции и выигрывай призы!</div>
          <Button
            className={styles.btn}
            onClick={() => {
              setIsModalOpen(true);
            }}
          >
            Участвовать
          </Button>
        </div>
      </div>
    </section>
  );
};
