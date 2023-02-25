import React from 'react';
import {Logo, } from '@ya.praktikum/react-developer-burger-ui-components';

export default function AppHeader () {
  return (
      <header className="App-header">
        <nav className='menu'>
        <div className="menu__item"></div>
        <div className="menu__item"></div>
        </nav>
        <Logo />
        <div className="menu__item"></div>
      </header>
  );
}