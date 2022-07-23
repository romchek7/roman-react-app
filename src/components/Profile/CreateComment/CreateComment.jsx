import React from "react";
import styles from './CreateComment.module.css';
import {addPostActionCreator, changeCommentActionCreator} from '../../../redux/profilePageReducer'

const CrComment = (props) => {
    let newComment = React.createRef();

    let onAddComment = () => {
        props.addComment()
        // props.dispatch(addPostActionCreator());
    }

    let onChangeComment = () => {
        let text = newComment.current.value;
        props.changeComment(text)
        // props.dispatch(changeCommentActionCreator(text));
    }

    return (
        <div className={styles.main}>
            <div className={styles.content}>
                <textarea onChange={onChangeComment} type="text" ref={newComment}
                          value={props.profilePage.newCommentText}></textarea>
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