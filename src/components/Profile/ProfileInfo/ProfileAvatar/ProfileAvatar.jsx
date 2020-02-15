import React from 'react';
import style from './ProfileAvatar.module.css';


const ProfileAvatar = (props) => {
    return (

        <div className={style.profile__avatar}>
         
                <img src={props.photo} alt="" />
                <div className={style.page_actions_wide}>
                    <div className={style.page_action_left}><a href="#">Редактировать</a></div>
                    <div className={style.page_action_right}><div></div></div>
                </div>
         
        </div>


    )
}


export default ProfileAvatar;