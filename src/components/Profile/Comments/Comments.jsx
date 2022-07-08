import React from "react";
import x from './Comments.module.css';
import NewComm from "./NewComment/NewCom";

const Comments = () => {
    let messagesArray = [
        { message: 'comment 1', likes: 10 },
        { message: 'comment 2', likes: 20 },
        { message: 'comment 1', likes: 10 },
        { message: 'comment 2', likes: 20 },
        { message: 'comment 1', likes: 10 },
        { message: 'comment 2', likes: 20 },
        { message: 'comment 3', likes: 30 }
    ];

    let messagesElements = messagesArray.map(m => <NewComm message={m.message} likes={m.likes} />);

    return (
        <div className={x.content}>
            {messagesElements}
        </div>
    );
}

export default Comments;