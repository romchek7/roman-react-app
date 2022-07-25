import React from "react"
import {addMessageCreator, updateMessageCreator} from "../../redux/dialogsPageReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState()

    let onAddMessage = () => {
        props.store.dispatch(addMessageCreator())
    }

    let onUpdateMessage = (text) => {
        props.store.dispatch(updateMessageCreator(text))
    }

    return (
        <Dialogs dialogsPage={state.dialogsPage} addMessage={onAddMessage} updateMessage={onUpdateMessage}/>
    )
}

export default DialogsContainer