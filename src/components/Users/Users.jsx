import React from 'react'
import style from './Users.module.css';
import userPhoto from './../../img/ava_default.png'

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

    return (

        <div className={style.users_list_wrapper}>
            <div className={style.users_list}>

                {
                    pages.length > 10
                        ?
                        pages.map((p, index) => {

                            if (index <= 9) {

                                return <span className={props.currentPage === p && style.selectedPage} onClick={(e) => { props.onPageChanged(p) }}> {p}</span>
                            }
                        })
                        :
                        null
                }


                {

                    props.users.map((user) =>

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