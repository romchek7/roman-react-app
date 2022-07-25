import React from "react"
import Posts from "./Posts"
import {addPostCreator, updatePostCreator} from "../../../redux/profilePageReducer"

const PostsContainer = (props) => {
    let state = props.store.getState()

    let onAddPost = () => {
        props.store.dispatch(addPostCreator())
    }

    let onUpdatePost = (text) => {
        props.store.dispatch(updatePostCreator(text))
    }

    return (
        <Posts profilePage={state.profilePage} addPost={onAddPost} updatePost={onUpdatePost}/>
    )
}

export default PostsContainer