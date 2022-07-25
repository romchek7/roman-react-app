import React from "react"
import style from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog"
import Messages from "./Messages/Messages";
import {addMessageCreator, updateMessageCreator} from "../../redux/dialogsPageReducer";

const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogsArray.map(d => <Dialog id={d.id} name={d.name}/>)
    let messagesElements = props.dialogsPage.messagesArray.map(m => <Messages id={m.id} message={m.message}/>)

    let onAddMessage = () => {
        props.addMessage()
    }

    let onUpdateMessage = (areaValue) => {
        let text = areaValue.target.value
        props.updateMessage(text)
    }

    return (
        <div className={style.main}>
            <div className={style.dialogs}>
                <div className={style.dialog}>
                    {dialogsElements}
                </div>
            </div>

            <div className={style.mainMessages}>
                <div className={style.userInfo}>
                        <span>
                            Dialog
                        </span>
                </div>
                <div className={style.messages}>
                    <div className={style.messageText}>
                        Message
                    </div>
                    {messagesElements}
                </div>
                <div className={style.addMessage}>
                    <textarea value={props.dialogsPage.newMessageBody}
                              placeholder='Write a message...'
                              onChange={onUpdateMessage}/>
                    <button onClick={onAddMessage}>Send
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs