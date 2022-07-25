import React from "react"
import styles from './Profile.module.css'
import Logo from './Logo/Logo'
import Info from './Info/Info'
import PostsContainer from "./Posts/PostsContainer";

const Profile = (props) => {
    return (
        <div className={styles.main}>
            <Logo/>
            <Info/>
            <PostsContainer store={props.store}/>
        </div>
    );
}

export default Profile;