import React from "react";
import style from './Dialog.module.css'
import { NavLink } from "react-router-dom";

const Dialog = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <NavLink to={path} className={({ isActive }) => isActive ? style.active : style.notActive}>
            <div className={style.dialog}>
                <div className={style.userLogo}>
                    <div className={style.logo}>
                        {props.id}
                    </div>
                </div>
                <div className={style.chatName}>
                    {props.name}
                </div>
            </div>
        </NavLink>

    );
}

export default Dialog;