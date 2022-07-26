import React from "react"
import styles from './Users.module.css'
import User from "./User/User";

const Users = (props) => {

    if (props.usersPage.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                userPhoto: 'https://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png',
                userName: 'User 1',
                location: {
                    country: 'Ukraine',
                    city: 'Lviv'
                },
                followed: true
            },
            {
                id: 2,
                userPhoto: 'http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png',
                userName: 'User 2',
                location: {
                    country: 'Poland',
                    city: 'Lodz'
                },
                followed: false
            },
            {
                id: 3,
                userPhoto: 'http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png',
                userName: 'User 3',
                location: {
                    country: 'Ukraine',
                    city: 'Chop'
                },
                followed: true
            }
        ])
    }

    let usersElements = props.usersPage.users.map(u => <User id={u.id}
                                                             name={u.userName}
                                                             city={u.location.city}
                                                             country={u.location.country}
                                                             userPhoto={u.userPhoto}
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