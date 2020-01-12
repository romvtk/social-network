import React from 'react';
import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div>
            <div className={style.img__profile}>
                <img src="https://million-wallpapers.ru/wallpapers/5/25/336904166940081/exagons.jpg" alt="" />
            </div>
            <div>
                ava + description
        </div>
            <MyPosts />
        </div>
    )
}


export default Profile;