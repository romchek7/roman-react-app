import React from "react";
import x from './Info.module.css'

const Info = (props) => {
    return (
        <div className={x.main}>
            <div className={x.personalInfo}>
                {props.profile.fullName}
            </div>
        </div>
    );
}

export default Info;