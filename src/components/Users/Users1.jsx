import React from 'react'
import style from './Users.module.css';
import * as axios from 'axios'
import userPhoto from './../../img/ava_defaul.png'

const Users = (props) => {
 
    if (props.users.length === 0) {

        axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then((response)=>{
            props.setUsers(response.data.items)
        } )
     
        

        // props.setUsers([{
        //     id: 1,
        //     fullName: 'Иван Гриценко',
        //     photoURL: 'https://sun9-38.userapi.com/c628726/v628726886/19e8c/tjsxKOsgnHQ.jpg',
        //     followed: false,
        //     status: 'Я здесь главный',
        //     location: {
        //         city: 'Москва',
        //         country: 'Россия'
        //     }
        // },
        // {
        //     id: 2,
        //     fullName: 'Наталья Бушманова',
        //     photoURL: 'https://instagram.fhel6-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p750x750/69951227_464234564434560_3995321654951886714_n.jpg?_nc_ht=instagram.fhel6-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=cmIcPdRzcDgAX-qBvTD&oh=a2c27cf963cc30814c22d0feb2551554&oe=5EB872B2',
        //     followed: false,
        //     status: 'статус1',
        //     location: {
        //         city: 'Москва',
        //         country: 'Россия'
        //     }
        // },
        // {
        //     id: 3,
        //     fullName: 'Людмила Гриценко',
        //     photoURL: 'https://instagram.fhel6-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/28158169_1862440653768701_7672163766619865088_n.jpg?_nc_ht=instagram.fhel6-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=2_G3a7qbyBEAX8SIW_n&oh=3dc5ebf1c29bf1a292177d2d9026841c&oe=5ED55FD6',
        //     followed: true,
        //     status: 'статус 2',
        //     location: {
        //         city: 'Хабаровск',
        //         country: 'Россия'
        //     }
        // }

        // ])

    }

    return (
        <div className={style.users_list_wrapper}>
            <div className={style.users_list}>
                {props.users.map((user) =>

                    <div className={style.user_row}>
                        <div className={style.user_photo}>
                            <img src={user.photos.small != null? user.photos.small: userPhoto}
                                alt="123" />
                        </div>
                        <div className={style.user_info}>
                            <span className={style.user_fullName}> {user.name}</span>
                            <span className={style.user_from}>{`user.location.country + ' - ' + user.location.city`}</span>
                            <div className={style.user_status}>{user.status}</div>

                            {user.followed
                                ? <div className={style.btn_follower}
                                    onClick={() => { props.unfollow(user.id) }}
                                > Отписаться</div>
                                : <div className={style.btn_follower}
                                    onClick={() => { props.follow(user.id) }}>
                                    Подписаться</div>}


                        </div>
                    </div>

                )}
            </div>
        </div>
    )

}


export default Users;