import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
        	<img src='https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/images/2018/08/nasa-logo-web-rgb.png?itok=Iczdwajo&fc=50,50' />
        </header>
    );
}

export default Header;