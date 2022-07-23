import React from "react";
import {addPostActionCreator, changeCommentActionCreator} from "../../../redux/profilePageReducer";
import CreateComment from "./CreateComment";

const CreateCommentContainer = (props) => {
    let state = props.store.getState()

    let onAddComment = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onChangeComment = (text) => {
        props.store.dispatch(changeCommentActionCreator(text));
    }

    return (
        <CreateComment addComment={onAddComment}
                       changeComment={onChangeComment}
                       profilePage={state.profilePage}/>
    )
}

export default CreateCommentContainer