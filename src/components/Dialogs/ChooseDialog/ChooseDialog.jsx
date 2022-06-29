import React from "react";
import style from './ChooseDialog.module.css';

const ChooseDialog = () => {
    return (
        <div className={style.main}>
            <div className={style.selectChat}>
                Select a chat to start chatting
            </div>
        </div>
    );
}

export default ChooseDialog;