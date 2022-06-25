import React from "react";
import x from './Profile.module.css';
import Logo from './Logo/Logo'
import Info from './Info/Info'
import CrComment from './CreateComment/CrComment'
import Comments from "./Comments/Comments";

const Profile = () => {
    return (
        <div className={x.content}>
            <div className={x.main}>
                <Logo />
                <Info />
                <CrComment />
                <Comments />
            </div>
        </div>
    );
}

export default Profile;