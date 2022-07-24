import React from "react";
import {addPostActionCreator, changeCommentActionCreator} from "../../../redux/profilePageReducer";
import CreateComment from "./CreateComment";
import StoreContext from "../../../StoreContext";

const CreateCommentContainer = () => {
    return <StoreContext.Consumer>
        {
            store => {
                let state = store.getState()

                let onAddComment = () => {
                    store.dispatch(addPostActionCreator());
                }

                let onChangeComment = (text) => {
                    store.dispatch(changeCommentActionCreator(text));
                }

                return <CreateComment addComment={onAddComment}
                                      changeComment={onChangeComment}
                                      profilePage={state.profilePage}/>
            }
        }
    </StoreContext.Consumer>
    // <CreateComment addComment={onAddComment}
    //                changeComment={onChangeComment}
    //                profilePage={state.profilePage}/>
}

export default CreateCommentContainer