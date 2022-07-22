import React from "react";
import style from './Messages.module.css'
import { addNewMessageCreator, changeMessageBodyCreator } from '../../../redux/dialogsPageReducer'

const Messages = (props) => {
    let myMessagesArray = props.messagesArray.map(m =>
        <div className={style.messageTextMe}>
            {m.message}
        </div>
    )

    let newMessage = React.createRef();

    let onSendMessage = () => {
        props.dispatch(addNewMessageCreator())
    }

    let onChangeMessageBody = () => {
        let body = newMessage.current.value
        props.dispatch(changeMessageBodyCreator(body))
    }

    return (
        <div className={style.main}>
            <div className={style.userInfo}>
                <span>
                    Dialog {props.id}
                </span>
            </div>
            <div className={style.messages}>
                <div className={style.messageText}>
                    Message {props.id}
                </div>
                {myMessagesArray}
            </div>
            <div className={style.addMessage}>
                <textarea
                    placeholder="Write a message..."
                    onChange={onChangeMessageBody}
                    type="text"
                    ref={newMessage}
                    value={props.newMessageBody}></textarea>
                <button onClick={onSendMessage}>Send</button>
            </div>
        </div>
    );
}

export default Messages;