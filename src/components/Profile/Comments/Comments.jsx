import React from "react";
import x from './Comments.module.css';
import NewComm from "./NewComment/NewCom";

const Comments = () => {
    return (
        <div className={x.content}>
            <NewComm message="comment 1" likes="10"/>
            <NewComm message="comment 2" likes="20"/>
            <NewComm message="comment 3" likes="30"/>
        </div>
    );
}

export default Comments;