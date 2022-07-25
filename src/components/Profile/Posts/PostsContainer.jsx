import React from "react"
import Posts from "./Posts"
import {addPostCreator, updatePostCreator} from "../../../redux/profilePageReducer"
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostCreator())
        },
        updatePost: (text) => {
            dispatch(updatePostCreator(text))
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer