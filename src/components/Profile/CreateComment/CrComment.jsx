import React from "react";
import x from './CrComment.module.css';

const CrComment = () => {
    return (
        <div className={x.main}>
            <div className={x.content}>
                <input type="text" />
                <div>
                    <button>
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CrComment;