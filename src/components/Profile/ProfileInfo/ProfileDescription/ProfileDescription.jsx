import React from 'react';
import style from './ProfileDescription.module.css';
import ProfileStatus from "./ProfileStatus/ProfileStatus";


const ProfileDescription = (props) => {
    console.log(props)
    return (

        <div className={style.description_block}>
            <div className={style.description_info_wrap}>
                <div className={style.description_top}>
                    <div className={style.description_top__profile_online}>Online</div>
                    <h1 className={style.description_name}>{`Иван Гриценко`}</h1>
                    <ProfileStatus aboutMe={props.profile.aboutMe}/>
                </div>

                <div className={style.description_info_short}>
                    <div className={style.description_info_row}>
                        <div className={style.label}>День рождения:</div>
                        <div className={style.labeled}>30 сентября</div>
                    </div>
                    <div className={style.description_info_row}>
                        <div className={style.label}>Город:</div>
                        <div className={style.labeled}>Москва</div>
                    </div>
                    <div className={style.description_info_row}>
                        <div className={style.label}>Семейное положение:</div>
                        <div className={style.labeled}>не женат</div>
                    </div>
                    <div className={style.description_info_row}>
                        <div className={style.label}>Образование:</div>
                        <div className={style.labeled}>РФЭИ '16</div>
                    </div>

                </div>

            </div>
        </div>


    )
}


export default ProfileDescription;