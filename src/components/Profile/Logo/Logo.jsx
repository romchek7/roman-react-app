import React from "react";
import x from './Logo.module.css'
import Preloader from "../../common/Preloader/Preloader";

const Logo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    debugger
    return (
        <div className={x.main}>
            <div className={x.image}>
                <img
                    src={props.profile.photos.large}/>
            </div>
            <div className={x.status}>
                <p>
                    {props.profile.aboutMe}
                </p>
            </div>
        </div>
    );
}

export default Logo;