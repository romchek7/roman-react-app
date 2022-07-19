import React from "react";
import styles from './Comments.module.css';
import NewComment from "./NewComment/NewComment";

const Comments = (props) => {
    let messagesElements = props.messagesArray.map(message => <NewComment message={message.message} likes={message.likes} />);

    return (
        <div className={styles.content}>
            {messagesElements}
        </div>
    );
}

export default Comments;