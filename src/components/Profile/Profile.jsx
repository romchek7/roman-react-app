import React from "react"
import styles from './Profile.module.css'
import Logo from './Logo/Logo'
import Info from './Info/Info'
import PostsContainer from "./Posts/PostsContainer";

const Profile = (props) => {
    return (
        <div className={styles.main}>
            <Logo profile={props.profile}/>
            <Info profile={props.profile}/>
            <PostsContainer/>
        </div>
    );
}

export default Profile;