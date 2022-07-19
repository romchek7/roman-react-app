import React from "react";
import styles from './CreateComment.module.css';

const CrComment = (props) => {
    let newComment = React.createRef();

    let onAddComment = () => {
        props.dispatch({ type: 'ADD-POST' });
    }

    let onChangeComment = () => {
        let text = newComment.current.value;
        props.dispatch({ type: 'CHANGE-COMMENT', text: text});
    }

    return (
        <div className={styles.main}>
            <div className={styles.content}>
                <textarea onChange={onChangeComment} type="text" ref={newComment} value={props.newCommentText}></textarea>
                <div>
                    <button onClick={onAddComment}>
                        Post
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CrComment;