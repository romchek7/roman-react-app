import React from "react"
import style from '../Dialogs.module.css'

const Messages = (props) => {
    return (
        <div className={style.messageTextMe}>
            {props.message}
        </div>
    )
}

export default Messages;