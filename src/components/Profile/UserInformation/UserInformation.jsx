import React from "react";
import styles from './UserInformation.module.css'
import Preloader from "../../common/Preloader/Preloader";
import userLogo from '../../assets/images/account.png'
import ProfileStatus from "./ProfileStatus";

const UserInformation = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={styles.main}>
            <div className={styles.userInfo}>
                <div className={styles.userPhoto}>
                    <img src={props.profile.photos.large === null ? userLogo : props.profile.photos.large}/>
                </div>
            </div>
            <div className={styles.userInfo}>
                <div className={styles.userTextInfo}>
                    <p>{props.profile.fullName}</p>
                    <p>{props.profile.aboutMe}</p>
                    <p>{props.profile.lookingForAJobDescription}</p>
                    <ProfileStatus status={props.status} updateUserStatusThunk={props.updateUserStatusThunk}/>
                </div>
            </div>
        </div>
    );
}

export default UserInformation;