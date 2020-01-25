import React from 'react';
import style from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div className ={style.description_block}>
            <div className={style.img__profile}>
            ava
            </div>
            <div className={style.description}>
                description
            </div>

        </div>
    )
}


export default ProfileInfo;