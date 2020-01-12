import React from 'react';
import style from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';


const Dialogs = () => {
    return (
        <div className={style.dialogs__wrapper}>
            <div className={style.dialogs}>
                <div className={style.dialog}>
                    <NavLink 
                        to='/dialogs/1'>
                        Дмитрий
                    </NavLink>
                </div>
                <div
                    className={style.dialog}>
                    <NavLink 
                        to='/dialogs/2'>
                        Мария
                    </NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink 
                        to='/dialogs/3'>
                        Виктория
                    </NavLink>
                </div>
            </div>
            <div className={style.messages}>
                <div className={style.message}>Первое сообщение</div>
                <div className={style.message}>Второе сообщение</div>
                <div className={style.message}>Третие сообщение</div>
            </div>
        </div>
    )
}


export default Dialogs;