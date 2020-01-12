import React from 'react';
import style from './Navbar.module.css';


const Navbar = () => {
    return (
        <nav className={style.nav__profile}>
            <ul>
                <li><a href='#'>Профиль</a></li>
                <li><a href='#'>Сообщения</a></li>
                <li><a href='#'>Новости</a></li>
                <li><a href='#'>Музыка</a></li>
                <li><a href='#'>Настройки</a></li>
            </ul>
        </nav>
    )
}


export default Navbar;