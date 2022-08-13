import React from "react"
import Posts from "./Posts"
import {addPost} from "../../../redux/profilePageReducer"
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}

const PostsContainer = connect(mapStateToProps, {
    addPost
})(Posts)

export default PostsContainer