import React, {useEffect} from "react"
import styles from './Profile.module.css'
import UserInformation from './UserInformation/UserInformation'
import {getAuthUserId, getNeedUserId, getProfileSelector, getStatusSelector} from "../../selectors/profileSelectors";
import {compose} from "redux";
import {connect} from "react-redux";
import {
    getProfileThunk,
    getUserStatusThunk,
    setUsersProfile, updateUserMainPhoto,
    updateUserStatusThunk
} from "../../redux/profilePageReducer";
import {logOutUser} from "../../redux/auth-reducer";
import {withAuthUserRedirect} from "../../hoc/withAuthUserRedirect";
import {useParams} from "react-router-dom";
import Posts from "./Posts/Posts";

const Profile = (props) => {
    const params = useParams();

    useEffect(() => {
        getUserProfile()
    }, [params.userId])

    const getUserProfile = () => {
        let userId = params.userId;
        if (!userId) {
            userId = props.authUserId;
        }
        props.getProfileThunk(userId)
        props.getUserStatusThunk(userId)
    }

    return (
        <div className={styles.main}>
            <UserInformation profile={props.profile}
                             status={props.status}
                             authUserId={props.authUserId}
                             logOutUser={props.logOutUser}
                             updateUserMainPhoto={props.updateUserMainPhoto}
                             updateUserStatusThunk={props.updateUserStatusThunk}/>
            <Posts/>
        </div>
    );
}

let mapStateToProps = (state) => {
    return {
        profile: getProfileSelector(state),
        status: getStatusSelector(state),
        authUserId: getAuthUserId(state),
        needUserId: getNeedUserId(state)
    }
}

export default compose(
    connect(mapStateToProps, {
        setUsersProfile, getProfileThunk, getUserStatusThunk, updateUserMainPhoto,
        updateUserStatusThunk, logOutUser}),
    withAuthUserRedirect
)(Profile)