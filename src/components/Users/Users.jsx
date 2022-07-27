import React from "react"
import styles from './Users.module.css'
import userIcon from '../img/account.png'
import * as axios from 'axios'

class Users extends React.Component {
    constructor(props) {
        super(props);

        if (this.props.usersPage.users.length === 0) {
            axios
                .get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    this.props.setUsers(response.data.items)
                })
        }
    }

    render() {
        let usersElements = this.props.usersPage.users.map(u => (
            <div className={styles.user}>
                <div className={styles.userPhoto}>
                    <img src={u.photos.small != null ? u.photos.small : userIcon}/>
                </div>
                <div className={styles.userName}>
                    {u.name}
                </div>
                <div className={styles.followBtn}>
                    {u.followed
                        ? <button onClick={() => {
                            this.props.unFollowUser(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            this.props.followUser(u.id)
                        }}>Follow</button>
                    }
                </div>
            </div>
        ))

        return (
            <div className={styles.main}>
                <div className={styles.users}>
                    {usersElements}
                </div>
            </div>
        )
    }
}

export default Users