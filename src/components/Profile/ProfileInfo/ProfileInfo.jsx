import React from 'react';
import style from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div className={style.img__profile}>
                <img src="https://million-wallpapers.ru/wallpapers/5/25/336904166940081/exagons.jpg" alt="" />
            </div>
            <div className={style.description}>
                ava + description
            </div>

        </div>
    )
}


export default ProfileInfo;