import React from "react"
import styles from '../Users.module.css'

const User = (props) => {
    let onFollowUser = (userId) => {
        props.followUser(userId)
    }

    let onUnfollowUser = (userId) => {
        props.unfollowUSer(userId)
    }

    return (
        <div className={styles.user}>
            <div className={styles.userPhoto}>
                <img src={props.userPhoto}/>
            </div>
            <div className={styles.userName}>
                {props.name}
            </div>
            <div className={styles.userLocation}>
                {props.city}, {props.country}
            </div>
            <div className={styles.followBtn}>
                {props.followed
                    ? <button onClick={() => {
                        props.unfollowUSer(props.id)
                    }}>Unfollow</button>
                    : <button onClick={() => {
                        props.followUser(props.id)
                    }}>Follow</button>
                }
            </div>
        </div>
    )
}

export default User