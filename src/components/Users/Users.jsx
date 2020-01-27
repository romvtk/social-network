import React from 'react'
import style from './Users.module.css';
import * as axios from 'axios'
import userPhoto from './../../img/ava_defaul.png'


class Users extends React.Component {


componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
    .then((response) => {
        this.props.setUsers(response.data.items)
    })
}

render() {
    return (
        <div className={style.users_list_wrapper}>
            <div className={style.users_list}>
                {this.props.users.map((user) =>

                    <div key={user.id} className={style.user_row}>
                        <div className={style.user_photo}>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto}
                                alt="123" />
                        </div>
                        <div className={style.user_info}>
                            <span className={style.user_fullName}> {user.name}</span>
                            <span className={style.user_from}>{`user.location.country + ' - ' + user.location.city`}</span>
                            <div className={style.user_status}>{user.status}</div>

                            {user.followed
                                ? <div className={style.btn_follower}
                                    onClick={() => { this.props.unfollow(user.id) }}
                                > Отписаться</div>
                                : <div className={style.btn_follower}
                                    onClick={() => { this.props.follow(user.id) }}>
                                    Подписаться</div>}


                        </div>
                    </div>

                )}
            </div>
        </div>
    )
}
}

export default Users;