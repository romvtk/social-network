import React from 'react';
import style from './ProfileInfo.module.css';
import ProfileAvatar from './ProfileAvatar/ProfileAvatar';
import ProfileDescription from './ProfileDescription/ProfileDescription';


const ProfileInfo = () => {
    return (
        <div className ={style.description_block}>
          <ProfileAvatar/>
           <ProfileDescription/>

        </div>
    )
}


export default ProfileInfo;