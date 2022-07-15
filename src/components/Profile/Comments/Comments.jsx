import React from "react";
import styles from './Comments.module.css';
import NewComm from "./NewComment/NewCom";

const Comments = (props) => {
    let messagesElements = props.messagesArray.map(message => <NewComm message={message.message} likes={message.likes} />);

    return (
        <div className={styles.content}>
            {messagesElements}
        </div>
    );
}

export default Comments;