import React from "react"
import styles from './Users.module.css'
import User from "./User/User";
import * as axios from 'axios'

const Users = (props) => {

    if (props.usersPage.users.length === 0) {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                props.setUsers(response.data.items)
            })
    }

    let usersElements = props.usersPage.users.map(u => <User id={u.id}
                                                             name={u.name}
                                                             city={'u.location.city'}
                                                             country={'u.location.country'}
                                                             userPhoto={u.photos.small}
                                                             status={u.status}
                                                             followed={u.followed}
                                                             followUser={props.followUser}
                                                             unfollowUSer={props.unFollowUser}/>
    )

    return (
        <div className={styles.main}>
            <div className={styles.users}>
                {usersElements}
            </div>
        </div>
    )
}

export default Users