import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
    return (
        <div className={style.post}>
            <img src="https://i.pinimg.com/736x/78/9c/4f/789c4f143d30fa4d41e682558d5b3023--animals-in-clothes-animal-heads.jpg" alt="" />
            <span >{props.message}</span>
            <div className="like">{`likes:  ` + props.like}</div>
        </div>
    )
}


export default Post;