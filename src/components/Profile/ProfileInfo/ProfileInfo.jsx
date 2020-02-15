import React from 'react';
import style from './ProfileInfo.module.css';
import ProfileAvatar from './ProfileAvatar/ProfileAvatar';
import ProfileDescription from './ProfileDescription/ProfileDescription';
import Preloader from '../../common/Preloader/Preloader';


const ProfileInfo = (props) => {
if (!props.profile) {
    return <Preloader/>
}

    return (
        <div className ={style.description_block}>
          <ProfileAvatar photo={props.profile.photos.large} />
           <ProfileDescription/>

        </div>
    )
}


export default ProfileInfo;