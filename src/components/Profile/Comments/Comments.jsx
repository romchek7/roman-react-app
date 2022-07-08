import React from "react";
import x from './Comments.module.css';
import NewComm from "./NewComment/NewCom";

const Comments = (props) => {
    let messagesElements = props.messagesArray.map(m => <NewComm message={m.message} likes={m.likes} />);

    return (
        <div className={x.content}>
            {messagesElements}
        </div>
    );
}

export default Comments;