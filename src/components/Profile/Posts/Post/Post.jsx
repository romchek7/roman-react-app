import React from "react"
import style from '../Posts.module.css'

const Post = (props) => {
    return (
        <div className={style.post}>
            <div className={style.profileIcon}>
                <div className={style.iconItem}>
                    {props.id}
                </div>
            </div>
            <div className={style.postBody}>{props.text}</div>
            <div className={style.likes}>Likes: {props.likes}</div>
        </div>
    )
}

export default Post