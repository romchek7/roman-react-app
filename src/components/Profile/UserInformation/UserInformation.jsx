import React from "react"
import styles from './UserInformation.module.css'
import Preloader from "../../common/Preloader/Preloader"
import userLogo from '../../assets/images/account.png'
import ProfileStatus from "./ProfileStatus"

const UserInformation = (props) => {
    return (
        !props.profile
            ? <Preloader/>
            : <div className={styles.main}>
            <div className={styles.userInfo}>
                <div className={styles.userPhoto}>
                    <img src={props.profile.photos.large === null ? userLogo : props.profile.photos.large}/>
                </div>
            </div>
            <div className={styles.userInfo}>
                <div className={styles.userTextInfo}>
                    <div className={styles.userNameLogOut}>
                        <p>{props.profile.fullName}</p>
                        <button onClick={props.logOutUser} className={props.authUserId === props.profile.userId ? styles.active : styles.notActive}>Logout</button>
                    </div>
                    <p>{props.profile.aboutMe}</p>
                    <p>{props.profile.lookingForAJobDescription}</p>
                    <ProfileStatus authUserId={props.authUserId} userId={props.profile.userId}
                        status={props.status} updateUserStatusThunk={props.updateUserStatusThunk}/>
                </div>
            </div>
        </div>
    )
}

export default React.memo(UserInformation)