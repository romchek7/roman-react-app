import React from "react";
import styles from './Profile.module.css';
import Logo from './Logo/Logo'
import Info from './Info/Info'
import CreateComment from './CreateComment/CreateComment'
import Comments from "./Comments/Comments";

const Profile = (props) => {
    return (
        <div className={styles.main}>
            <Logo />
            <Info />
            <CreateComment dispatch={props.dispatch} newCommentText={props.profilePage.newCommentText}/>
            <Comments messagesArray={props.profilePage.commentsArray} />
        </div>
    );
}

export default Profile;