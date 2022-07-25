import React from "react"
import style from './Posts.module.css'
import Post from "./Post/Post";

const Posts = (props) => {
    let postsElements = props.profilePage.postsArray.map(p => <Post id={p.id} text={p.message} likes={p.likes}/>)

    let onAddPost = () => {
        props.addPost()
    }

    let onUpdatePost = (areaValue) => {
        let text = areaValue.target.value
        props.updatePost(text)
    }

    return (
        <div className={style.main}>
            <div className={style.createPost}>
                <textarea placeholder='Create post...' onChange={onUpdatePost}
                          value={props.profilePage.newPostText}/>
                <button onClick={onAddPost}>
                    Create a new post
                </button>
            </div>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default Posts