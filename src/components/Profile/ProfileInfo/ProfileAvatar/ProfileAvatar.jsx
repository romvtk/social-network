import React from 'react';
import style from './ProfileAvatar.module.css';


const ProfileAvatar = () => {
    return (

        <div className={style.profile__avatar}>
         
                <img src="https://sun9-69.userapi.com/c845417/v845417544/16cabc/FUIZ-Cmlsgk.jpg?ava=1" alt="" />
                <div className={style.page_actions_wide}>
                    <div className={style.page_action_left}><a href="#">Редактировать</a></div>
                    <div className={style.page_action_right}><div></div></div>
                </div>
         
        </div>


    )
}


export default ProfileAvatar;