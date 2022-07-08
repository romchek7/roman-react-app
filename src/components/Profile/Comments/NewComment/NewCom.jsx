import React from "react";
import style from './NewComm.module.css';

const NewComm = (props) => {
    return (
        <div className={style.newComm}>
            <div className={style.logo}>
                <img src="https://cdn1.epicgames.com/salesEvent/salesEvent/PlagueTale1_1200x1600-98f9fd41d86634c1f82e4b5cbfc4e83f" />
            </div>
            <div className={style.comment}>
                <p>Message: {props.message}</p>
            </div>
            <div className={style.like}>
                <span>like: {props.likes}</span>
            </div>
        </div>
    );
}

export default NewComm;