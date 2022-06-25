import React from "react";
import x from './NewComm.module.css';

const NewComm = (props) => {
    return (
        <div className={x.newComm}>
            <img src="https://cdn1.epicgames.com/salesEvent/salesEvent/PlagueTale1_1200x1600-98f9fd41d86634c1f82e4b5cbfc4e83f" />
            <p>Message: {props.message}</p>
            <span>like: {props.likes}</span>
        </div>
    );
}

export default NewComm;