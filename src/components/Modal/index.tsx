import React, { FC, useEffect } from 'react';
import clsx from 'clsx';

import { ReactComponent as CloseIcon } from 'assets/images/close.svg';
import { useAppDispatch } from 'store/hooks';
import { resetRegResponse } from 'store/entities/regSlice';
import { Button } from 'components/ui/Button';

import styles from './Modal.module.scss';

interface ModalProps {
  active: boolean;
  setActive: (x: boolean) => void;
  children: React.ReactNode;
  isCloseBtn?: boolean;
}
export const Modal: FC<ModalProps> = ({ active, setActive, children, isCloseBtn }) => {
  const dispatch = useAppDispatch();

  const onClose = () => {
    setActive(false);
  };

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
       if (event.key === 'Escape') {
        setActive(false);
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  useEffect(() => {
    if (!active) {
      dispatch(resetRegResponse());
    }
  }, [active]);



  return (
    <div className={clsx(styles.modal, active && styles.active)} onClick={onClose}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        {children}
        <button className={styles.close} onClick={onClose}>
          <CloseIcon width={20} height={20} />
        </button>
        {isCloseBtn && (
          <Button className={styles.button} onClick={onClose} type="button">
            Закрыть окно
          </Button>
        )}
      </div>
    </div>
  );
};
