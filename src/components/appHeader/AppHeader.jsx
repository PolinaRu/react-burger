import React from 'react';
import {Logo, Box, BurgerIcon, ListIcon, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './appHeader.module.css';

export default function AppHeader () {
  return (
      <header className={ styles.header }>
        <nav className={ styles.menu }>
          <div className={ styles.menu__item }>
            <BurgerIcon type="primary" />
            <p className="text text_type_main-default">
            Конструктор</p>
          </div>
          <div className={ styles.menu__item }>
            <ListIcon type="secondary" />
            <p className="text text_type_main-default text_color_inactive">
            Лента заказов</p>
          </div>
        </nav>
        <Logo />
        <div className={ styles.menu__item }>
          <ProfileIcon type="secondary" />
          <p className="text text_type_main-default text_color_inactive">
          Личный кабинет</p>
        </div>
      </header>
  );
}