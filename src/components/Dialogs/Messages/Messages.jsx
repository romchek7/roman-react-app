import React from "react";
import style from './Messages.module.css'

const Messages = (props) => {
    return (
        <div className={style.messages}>
            <div className={style.message}>Message {props.id}</div>
        </div>
    );
}

export default Messages;