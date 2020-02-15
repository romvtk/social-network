import React from 'react';
import style from './Navbar.module.css';
import { NavLink } from 'react-router-dom';


const Navbar = () => {


    return (
        <nav className={style.nav}>

            <div className={style.item} >
                <NavLink  
                  
                  isActive={(_, location) =>location.pathname === '/profile'}
                  activeClassName={style.active}
                    to="/profile">
                    Профиль
                </NavLink>
            </div>

            <div className={style.item}>
                <NavLink  
                   isActive={(_, location) => location.pathname === '/dialogs'}
                   activeClassName={style.active}
                  
                    to="/dialogs">
                    Сообщения
                </NavLink>
            </div>

            <div className={style.item}>
                <NavLink  
                    to='/news'
                    isActive={(_, location) => location.pathname === '/news'}
                    activeClassName={style.active}>
                    Новости
                </NavLink>
            </div>

            <div className={style.item}>
                <NavLink  
                    to='/music'
                    isActive={(_, location) => location.pathname === '/music'}
                    activeClassName={style.active}>
                    Музыка
                </NavLink>
            </div>

            <div className={style.item}>
                <NavLink  
                    to='/users'
                    isActive={(_, location) => location.pathname === '/users'}
                    activeClassName={style.active}>
                    Пользователи
                </NavLink>
            </div>

            <div className={style.item}>
                <NavLink  
                    to='/settings'
                    isActive={(_, location) => location.pathname === '/settings'}
                    activeClassName={style.active}>
                    Настройки
                </NavLink>
            </div>
        </nav>
    )
}


export default Navbar;