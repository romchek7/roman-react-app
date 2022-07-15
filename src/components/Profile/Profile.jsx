import React from "react";
import styles from './Profile.module.css';
import Logo from './Logo/Logo'
import Info from './Info/Info'
import CrComment from './CreateComment/CrComment'
import Comments from "./Comments/Comments";

const Profile = (props) => {
    return (
        <div className={styles.main}>
            <Logo />
            <Info />
            <CrComment addComment={props.addComment} changeComment={props.changeComment} newCommentText={props.profilePage.newCommentText}/>
            <Comments messagesArray={props.profilePage.commentsArray} />
        </div>
    );
}

export default Profile;