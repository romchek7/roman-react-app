import React from "react";
import x from './Profile.module.css';
import Logo from './Logo/Logo'
import Info from './Info/Info'
import CrComment from './CreateComment/CrComment'
import Comments from "./Comments/Comments";

const Profile = (props) => {
    return (
        <div className={x.main}>
            <Logo />
            <Info />
            <CrComment />
            <Comments messagesArray={props.messagesArray} />
        </div>
    );
}

export default Profile;