import React from 'react';
import {Logo, Box, BurgerIcon, ListIcon, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components';

export default function AppHeader () {
  return (
      <header className="header p-4">
        <nav className='menu'>
          <div className="menu__item p-5">
            <BurgerIcon type="primary" />
            <p className="text text_type_main-default">
            Конструктор</p>
          </div>
          <div className="menu__item p-5">
            <ListIcon type="primary" />
            <p className="text text_type_main-default">
            Лента заказов</p>
          </div>
        </nav>
        <Logo />
        <div className="menu__item p-5">
          <ProfileIcon type="primary" />
          <p className="text text_type_main-default">
          Личный кабинет</p>
        </div>
      </header>
  );
}