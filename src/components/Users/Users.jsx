import React from 'react'
import style from './Users.module.css';
import userPhoto from './../../img/ava_default.png'
import {NavLink} from 'react-router-dom';

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={style.users_list_wrapper}>
            <div className={style.users_list}>
                {pages.length > 10 ?
                    pages.map((p, i) => {

                        if (i <= 9) {
                            return <span key={i} className={props.currentPage === p && style.selectedPage}
                                         onClick={(e) => {
                                             props.onPageChanged(p)
                                         }}> {p}</span>
                        }
                    }) :
                    null
                }
                {
                    props.users.map((user) =>

                        <div key={user.id} className={style.user_row}>
                            {console.log(user)}
                            <div className={style.user_photo}>
                                <NavLink to={'/profile/' + user.id}>
                                    <img src={user.photos.small != null ? user.photos.small : userPhoto}
                                         alt="123"/>
                                </NavLink>
                            </div>
                            <div className={style.user_info}>
                                <span className={style.user_fullName}> {user.name}</span>
                                <span
                                    className={style.user_from}>{`user.location.country + ' - ' + user.location.city`}</span>
                                <div className={style.user_status}>{user.status}</div>

                                {user.followed
                                    ? <div disabled={props.followingInProgress.some(id => id === user.id)}
                                           className={style.btn_follower} onClick={() => {
                                        props.unfollow(user.id)
                                    }}> Отписаться</div>
                                    : <div disabled={props.followingInProgress.some(id => id === user.id)}
                                           className={style.btn_follower} onClick={() => {
                                        props.follow(user.id)
                                    }}> Подписаться</div>}

                            </div>
                        </div>
                    )}
            </div>
        </div>
    )
}

export default Users;