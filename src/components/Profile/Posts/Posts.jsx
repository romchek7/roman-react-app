import React from "react"
import style from './Posts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {TextArea} from "../../common/FormValidationControl/FormValidationControl";
import {isRequired, maxLength, minLength} from "../../../validation/validators";
import {compose} from "redux";
import {connect} from "react-redux";
import {addPost} from "../../../redux/profilePageReducer";

const minLength10 = minLength(10)
const maxLength10000 = maxLength(10000)

let CreatePostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={style.createPost}>
                <Field placeholder='Create post...' component={TextArea} name={'newPostText'} validate={[isRequired,minLength10, maxLength10000]}/>
                <button>Create a new post</button>
            </div>
        </form>
    )
}

const CreatePostReduxForm = reduxForm({
    form: 'post'
})(CreatePostForm)

const Posts = (props) => {
    let postsElements = props.postsArray.map(p => <Post id={p.id} key={p.id} text={p.message} likes={p.likes}/>)

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

const mapStateToProps = (state) => {
    return {
        postsArray: state.profilePage.postsArray
    }
}

export default compose(
    connect(mapStateToProps, {addPost})
)(Posts)