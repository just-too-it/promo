import React, { useState } from 'react';

import { Footer } from 'components/Footer';
import { Prizes } from 'components/Prizes';
import { Promo } from 'components/Promo';
import { prizesItems } from 'components/Prizes/data';
import { Button } from 'components/ui/Button';
import { Modal } from 'components/Modal';
import { Form } from 'components/Form';
import { useAppSelector } from 'store/hooks';
import { SuccessReg } from 'components/SuccessReg';

import styles from './Home.module.scss';

export const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { regResponse } = useAppSelector((state) => state.reg);

  return (
    <div>
      <Promo setIsModalOpen={setIsModalOpen} />
      <div className="container">
        <Prizes prizes={prizesItems} />
        <Button className={styles['btn-mobile']} onClick={() => setIsModalOpen(true)}>
          участвовать
        </Button>
        <Button className={styles['btn-desktop']} onClick={() => setIsModalOpen(true)}>
          Загрузить чек
        </Button>
        <Footer />
        <Modal active={isModalOpen} setActive={setIsModalOpen} isCloseBtn={!!regResponse.result}>
          {!regResponse.result ? <Form /> : <SuccessReg />}
        </Modal>
      </div>
    </div>
  );
};
