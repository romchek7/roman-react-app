import React from "react";
import x from './CrComment.module.css';

const CrComment = (props) => {
    let newComment = React.createRef();

    let addComment = () => {
        let text = newComment.current.value;

        props.addComment(text);
    }

    return (
        <div className={x.main}>
            <div className={x.content}>
                <textarea type="text" ref={newComment}></textarea>
                <div>
                    <button onClick={addComment}>
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CrComment;