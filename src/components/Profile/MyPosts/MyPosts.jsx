import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (

        <div>
            My posts
            <div>  <textarea name="" id="" cols="25" rows="3"></textarea> <button>Добавить пост</button></div>
       
            <div className={style.posts}>
              <Post message = 'Привет, как поживаешь?' like = '12'/>
              <Post message = 'Всё здорово' like = '34'/>
            </div>
        </div>

    )
}


export default MyPosts;