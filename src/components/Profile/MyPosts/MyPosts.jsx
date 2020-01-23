import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
    let postsElements = props.posts
        .map(post => <Post
            message={post.message}
            like={post.likesCount} />)

    let newPostElement = React.createRef();

    let onAddPost = () => {
         props.addPost();
        

    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)

    }

    return (

        <div className={style.posts__wrapper}>
            <h3>My posts</h3>
            <div className={style.myPostSend}>
                <div className={style.MyPost__text}>
                    <textarea
                        onChange={onPostChange}
                        ref={newPostElement}
                        required
                        cols="25"
                        rows="3"
                        value={props.newPostText} />

                </div>
                <div className={style.btn}>
                    <button onClick={onAddPost
                    }>Добавить пост</button>
                </div>

            </div>

            <div className={style.posts}>
                {postsElements}
            </div>
        </div>

    )
}


export default MyPosts;