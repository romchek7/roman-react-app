import React from "react";
import styles from './Profile.module.css';
import Logo from './Logo/Logo'
import Info from './Info/Info'
import Comments from "./Comments/Comments";
import CreateCommentContainer from "./CreateComment/CreateCommentContainer";

const Profile = (props) => {
    return (
        <div className={styles.main}>
            <Logo/>
            <Info/>
            <CreateCommentContainer store={props.store}
                                    dispatch={props.dispatch}
                                    newCommentText={props.profilePage.newCommentText}/>
            <Comments messagesArray={props.profilePage.commentsArray}/>
        </div>
    );
}

export default Profile;