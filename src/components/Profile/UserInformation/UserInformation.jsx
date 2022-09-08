import React, {useEffect, useMemo, useRef, useState} from "react"
import styles from './UserInformation.module.css'
import Preloader from "../../common/Preloader/Preloader"
import userLogo from '../../assets/images/account.png'
import setPhotoIcon from '../../assets/images/setPhotoIcon.png'
import setPhotoIcon2 from '../../assets/images/setPhotoIcon2.png'
import iconSettings from '../../assets/images/settings.svg'
import ProfileStatus from "./ProfileStatus"
import {useFormik} from 'formik';

const UpdateInfoForm = (props) => {
    const formik = useFormik({
        initialValues: {
            fullName: props.profile.fullName || '',
            lookingForAJobDescription: props.profile.lookingForAJobDescription || '',
            contacts: {
                github: props.profile.contacts.github || '',
                facebook: props.profile.contacts.facebook || '',
                instagram: props.profile.contacts.instagram || '',
                twitter: props.profile.contacts.twitter || '',
                website: props.profile.contacts.website || '',
                youtube: props.profile.contacts.youtube || ''
            },
            aboutMe: props.profile.aboutMe || ''
        },
        onSubmit: values => {
            props.updateUserInfoThunk({
                ...props.profile,
                fullName: values.fullName,
                aboutMe: values.aboutMe,
                lookingForAJobDescription: values.lookingForAJobDescription,
                contacts: {
                    github: values.contacts.github,
                    facebook: values.contacts.facebook,
                    instagram: values.contacts.instagram,
                    twitter: values.contacts.twitter,
                    website: values.contacts.website,
                    youtube: values.contacts.youtube
                }
            })
            props.onCloseFormToEditUserInfo()
        },
        validate: values => {
            let errors = {}

            if (!values.aboutMe) {
                errors.aboutMe = 'Required!'
            }

            if (!values.lookingForAJobDescription) {
                errors.lookingForAJobDescription = 'Required!'
            }

            return errors
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className={props.infoIsReadyToUpdate ? styles.active : styles.notActive}>
                <div className={styles.userInfoForm}>
                    <label htmlFor="fullName">Full Name</label>
                    <input id='fullName' name='fullName'
                           type='text' onChange={formik.handleChange}
                           value={formik.values.fullName}/>

                    <label htmlFor="lookingForAJobDescription">Looking for a job</label>
                    <input id='lookingForAJobDescription' name='lookingForAJobDescription'
                           type='text' onChange={formik.handleChange}
                           value={formik.values.lookingForAJobDescription}/>
                    <label htmlFor='lookingForAJobDescription'>
                        <div className={formik.errors.lookingForAJobDescription ? styles.active : styles.notActive}>
                            <p className={styles.errorText}>{formik.errors.lookingForAJobDescription}</p>
                        </div>
                    </label>

                    <label htmlFor="contacts.github">github</label>
                    <input id='contacts.github' name='contacts.github'
                           type='text' onChange={formik.handleChange}
                           value={formik.values.contacts.github}/>

                    <label htmlFor="contacts.facebook">facebook</label>
                    <input id='contacts.facebook' name='contacts.facebook'
                           type='text' onChange={formik.handleChange}
                           value={formik.values.contacts.facebook}/>

                    <label htmlFor="contacts.instagram">instagram</label>
                    <input id='contacts.instagram' name='contacts.instagram'
                           type='text' onChange={formik.handleChange}
                           value={formik.values.contacts.instagram}/>

                    <label htmlFor="contacts.twitter">twitter</label>
                    <input id='contacts.twitter' name='contacts.twitter'
                           type='text' onChange={formik.handleChange}
                           value={formik.values.contacts.twitter}/>

                    <label htmlFor="contacts.website">website</label>
                    <input id='contacts.website' name='contacts.website'
                           type='text' onChange={formik.handleChange}
                           value={formik.values.contacts.website}/>

                    <label htmlFor="contacts.youtube">youtube</label>
                    <input id='contacts.youtube' name='contacts.youtube'
                           type='text' onChange={formik.handleChange}
                           value={formik.values.contacts.youtube}/>

                    <label htmlFor="aboutMe">aboutMe</label>
                    <input id='aboutMe' name='aboutMe'
                           type='text' onChange={formik.handleChange}
                           value={formik.values.aboutMe}/>
                    <label htmlFor='aboutMe'>
                        <div className={formik.errors.aboutMe ? styles.active : styles.notActive}>
                            <p className={styles.errorText}>{formik.errors.aboutMe}</p>
                        </div>
                    </label>
                </div>
                <div>
                    <button onClick={(event) => {
                        event.preventDefault()
                        props.onCloseFormToEditUserInfo()
                    }}>Cancel
                    </button>
                    <button type='submit'>Save</button>
                </div>
            </div>
        </form>
    )
}

const UserInformation = (props) => {
    let [photoHover, setPhotoHover] = useState(false)
    let [photoIsReadyToUpdate, setPhotoIsReadyToUpdate] = useState(false)
    let [newMainPhoto, setNewMainPhoto] = useState(null)

    const myRef = useRef(null)
    const executeScroll = () => myRef.current.scrollIntoView({behavior: 'smooth'})

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

    let [infoIsReadyToUpdate, setInfoIsReadyToUpdate] = useState(false)

    const onOpenFormToEditUserInfo = () => {
        setInfoIsReadyToUpdate(true)
        executeScroll()
    }

    const onCloseFormToEditUserInfo = () => {
        setInfoIsReadyToUpdate(false)
        window.scrollTo({behavior: 'smooth', top: '0px'})
    }

    const returnTextInfoOfUser = (info) => {
        return <p className={info !== null ? styles.active : styles.notActive}>{info}</p>
    }

    return (
        !props.profile
            ? <Preloader/>
            : <div className={styles.main}>
                <div className={styles.userInfo}>
                    <div className={styles.userPhoto}>
                        <img src={props.profile.photos.large === null ? userLogo : props.profile.photos.large}/>
                        <div
                            className={props.profile.userId === props.authUserId ? styles.setNewPhotoParent : styles.notActive}>
                            <label htmlFor='inputUserPhoto' className={styles.setNewPhoto}>
                                <img onMouseOver={() => {
                                    setPhotoHover(true)
                                }} onMouseOut={() => {
                                    setPhotoHover(false)
                                }} src={!photoHover ? setPhotoIcon : setPhotoIcon2}/>
                                <input id={'inputUserPhoto'} type='file' onChange={onMainPhotoSelected}/>
                            </label>
                        </div>
                        <button
                            className={photoIsReadyToUpdate && props.profile.userId === props.authUserId ? styles.saveBtn : styles.notActive}
                            onClick={onUpdateMainPhoto}>Save new photo
                        </button>
                    </div>
                </div>
                <div className={styles.userInfo}>
                    <div className={styles.userTextInfo}>
                        <div className={styles.userNameLogOut}>
                            <p>{props.profile.fullName}</p>
                            <button onClick={props.logOutUser}
                                    className={props.authUserId === props.profile.userId ? styles.active : styles.notActive}>Logout
                            </button>
                        </div>
                        <ProfileStatus authUserId={props.authUserId} userId={props.profile.userId}
                                       status={props.status} updateUserStatusThunk={props.updateUserStatusThunk}/>
                        <button className={props.authUserId === props.profile.userId ? styles.active : styles.notActive}
                                onClick={onOpenFormToEditUserInfo}>
                            <img src={iconSettings}/>
                        </button>
                        {returnTextInfoOfUser(props.profile.lookingForAJobDescription)}
                        {returnTextInfoOfUser(props.profile.aboutMe)}
                        {returnTextInfoOfUser(props.profile.contacts.github)}
                        {returnTextInfoOfUser(props.profile.contacts.facebook)}
                        {returnTextInfoOfUser(props.profile.contacts.instagram)}
                        {returnTextInfoOfUser(props.profile.contacts.twitter)}
                        {returnTextInfoOfUser(props.profile.contacts.website)}
                        {returnTextInfoOfUser(props.profile.contacts.youtube)}
                        <div ref={myRef}>
                            <UpdateInfoForm infoIsReadyToUpdate={infoIsReadyToUpdate}
                                            onCloseFormToEditUserInfo={onCloseFormToEditUserInfo}
                                            updateUserInfoThunk={props.updateUserInfoThunk}
                                            profile={props.profile}
                                            apiQueryMessage={props.apiQueryMessage}/>
                        </div>
                        {props.apiQueryMessage !== ''
                            ? <div className={styles.errorApi}>
                                Error: {props.apiQueryMessage}
                            </div>
                            : null}
                    </div>
                </div>
            </div>
    )
}

export default React.memo(UserInformation)