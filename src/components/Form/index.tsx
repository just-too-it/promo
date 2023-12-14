import React, { Fragment, useEffect } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { Button } from 'components/ui/Button';
import { Input } from 'components/ui/Input';
import { InputCheckbox } from 'components/ui/InputCheckbox';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { RegByEmailParams } from 'services/reg/reg.service';
import { Loader } from 'components/ui/Loader';
import { postRegByEmail } from 'store/action-creators/reg';

import styles from './Form.module.scss';

export const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const dispatch = useAppDispatch();
  const { status, regResponse } = useAppSelector((state) => state.reg);

  const onSubmit = (data: FieldValues) => {
    const params: RegByEmailParams = {
      email: data.email,
      name: data.name,
      phone: data.phone,
      assent: data.assent,
    };
    dispatch(postRegByEmail(params));
  };

  useEffect(() => {
    if (regResponse?.result) {
      reset();
    }
  }, [regResponse.result]);

  return (
    <>
      <h1 className={styles.title}>регистрация</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <Input
          label="ФИО"
          placeholder="Введите ФИО"
          setting={{
            ...register('name', {
              required: 'Поле обязательно для заполнения',
              pattern: {
                value: /^[а-яё -]+$/i,
                message: 'Допускаются символы кириллицы и дефис.',
              },
            }),
          }}
          errorMessage={errors?.name?.message?.toString() || regResponse?.error?.name?.join()}
        />

        <Input
          label="E-mail"
          placeholder="Введите e-mail"
          type="email"
          setting={{
            ...register('email', {
              required: 'Поле обязательно для заполнения',
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: 'Неверный формат ввода поля',
              },
            }),
          }}
          errorMessage={errors?.email?.message?.toString() || regResponse?.error?.login?.join()}
        />

        <Input
          label="Телефон"
          placeholder="+7"
          type="tel"
          setting={{
            ...register('phone', {
              required: 'Поле обязательно для заполнения',
              pattern: {
                value: /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/,
                message: 'Неверный формат ввода поля',
              },
            }),
          }}
          errorMessage={errors?.phone?.message?.toString() || regResponse?.error?.phone?.join()}
        />

        <InputCheckbox
          label={
            <Fragment>
              Я согласен с <Link to="#">правилами акции</Link>, <Link to="#">пользовательским соглашением</Link> и с{' '}
              <Link to="#">положением о конфиденциальности</Link>
            </Fragment>
          }
          setting={{
            ...register('assent', {
              required: 'Поле обязательно для заполнения',
            }),
          }}
          errorMessage={errors?.assent?.message?.toString() || regResponse?.error?.rules1?.join()}
        />

        <Button type="submit" className={styles.btn}>
          {status === 'loading' ? <Loader /> : 'Зарегистрироваться'}
        </Button>
        <p className={styles.authorization}>
          Есть аккаунт? <Link to="#">Авторизуйся</Link>
        </p>
      </form>
    </>
  );
};
