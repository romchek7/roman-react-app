import React, {useState} from "react"
import styles from './UserInformation.module.css'
import Preloader from "../../common/Preloader/Preloader"
import userLogo from '../../assets/images/account.png'
import setPhotoIcon from '../../assets/images/setPhotoIcon.png'
import setPhotoIcon2 from '../../assets/images/setPhotoIcon2.png'
import ProfileStatus from "./ProfileStatus"

const UserInformation = (props) => {
    let [photoHover, setPhotoHover] = useState(false)
    let [photoIsReadyToUpdate, setPhotoIsReadyToUpdate] = useState(false)
    let [newMainPhoto, setNewMainPhoto] = useState(null)

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length > 0) {
            setPhotoIsReadyToUpdate(true)
            setNewMainPhoto(e.target.files[0])
        }
    }

    const onUpdateMainPhoto = () => {
        if (photoIsReadyToUpdate && newMainPhoto !== null) {
            props.updateUserMainPhoto(newMainPhoto)
            setPhotoIsReadyToUpdate(false)
            setNewMainPhoto(null)
        }
    }

    return (
        !props.profile
            ? <Preloader/>
            : <div className={styles.main}>
            <div className={styles.userInfo}>
                <div className={styles.userPhoto}>
                    <img src={props.profile.photos.large === null ? userLogo : props.profile.photos.large}/>
                    <div className={props.profile.userId === props.authUserId ? styles.setNewPhotoParent : styles.notActive}>
                        <label htmlFor='inputUserPhoto' className={styles.setNewPhoto}>
                            <img onMouseOver={() => {setPhotoHover(true)}} onMouseOut={() => {setPhotoHover(false)}} src={!photoHover ? setPhotoIcon : setPhotoIcon2}/>
                            <input id={'inputUserPhoto'} type='file' onChange={onMainPhotoSelected}/>
                        </label>
                    </div>
                    <button className={photoIsReadyToUpdate && props.profile.userId === props.authUserId ? styles.saveBtn : styles.notActive} onClick={onUpdateMainPhoto}>Save new photo</button>
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