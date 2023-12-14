import React, { FC, useState } from 'react';
import clsx from 'clsx';

import { Button } from 'components/ui/Button';
import { MenuProps } from 'components/Menu/Menu.types';
import { ReactComponent as BurgerIcon } from 'assets/images/burger.svg';
import { ReactComponent as CloseIcon } from 'assets/images/close.svg';

import styles from './Menu.module.scss';

export const Menu: FC<MenuProps> = ({ menu, className, isHeader, setIsModalOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleBurger = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLogin = () => {
    setIsModalOpen?.(true);
    setIsMenuOpen(false);
  };

  const handleScroll = (id: string) => {
    const ref = document.getElementById(id);
    if (ref) {
      ref.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={clsx(styles.nav, className)}>
      {isHeader && (
        <button className={styles.open} onClick={handleBurger}>
          <BurgerIcon />
        </button>
      )}

      <ul
        className={clsx(
          styles.menu,
          isMenuOpen && styles.menuHeader_opened,
          isHeader ? styles.menuHeader : styles.menuFooter
        )}
      >
        {menu.map((item) => (
          <li key={item.id}>
            <button className={styles.item} onClick={() => handleScroll(item.href)}>
              {item.label}
            </button>
          </li>
        ))}
        {isHeader && (
          <li>
            <Button className={clsx(styles.item, styles.itemLogin)} onClick={handleLogin}>
              Личный кабинет
            </Button>
          </li>
        )}
      </ul>
      <button className={clsx(styles.close, isMenuOpen && styles.close_opened)} onClick={handleBurger}>
        <CloseIcon width={20} height={20} />
      </button>
    </nav>
  );
};
