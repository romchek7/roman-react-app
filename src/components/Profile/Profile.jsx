import React from "react"
import styles from './Profile.module.css'
import UserInformation from './UserInformation/UserInformation'
import PostsContainer from "./Posts/PostsContainer";

const Profile = (props) => {
    return (
        <div className={styles.main}>
            <UserInformation profile={props.profile}/>
            <PostsContainer/>
        </div>
    );
}

export default Profile;