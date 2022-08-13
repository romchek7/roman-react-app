import React from "react"
import style from './Posts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";

let CreatePostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={style.createPost}>
                <Field placeholder='Create post...' component={'textarea'} name={'newPostText'}/>
                <button>Create a new post</button>
            </div>
        </form>
    )
}

const CreatePostReduxForm = reduxForm({
    form: 'post'
})(CreatePostForm)

const Posts = (props) => {
    let postsElements = props.profilePage.postsArray.map(p => <Post id={p.id} text={p.message} likes={p.likes}/>)

    let onSubmit = (formData) => {
        props.addPost(formData.newPostText)
    }

    return (
        <div className={style.main}>
            <CreatePostReduxForm onSubmit={onSubmit}/>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default Posts