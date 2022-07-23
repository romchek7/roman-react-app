import React from "react";
import {addNewMessageCreator, changeMessageBodyCreator} from "../../../redux/dialogsPageReducer";
import Messages from "./Messages";

const MessagesContainer = (props) => {
    let state = props.store.getState()

    let onSendMessage = () => {
        props.store.dispatch(addNewMessageCreator())
    }

    let onChangeMessageBody = (text) => {
        props.store.dispatch(changeMessageBodyCreator(text))
    }

    return (
        <Messages
            addNewMessage={onSendMessage}
            changeMessage={onChangeMessageBody}
            dialogsPage={state.dialogsPage}
            id={props.id}/>
    )
}

export default MessagesContainer