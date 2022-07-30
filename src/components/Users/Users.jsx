import React from "react"
import styles from './Users.module.css'
import userIcon from '../img/account.png'
import * as axios from 'axios'

class Users extends React.Component {
    componentDidMount() {
        if (this.props.usersPage.users.length === 0) {
            axios
                .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersPage.pageSize}&page=${this.props.usersPage.currentPage}`)
                .then(response => {
                    this.props.setUsers(response.data.items)
                    // this.props.setTotalUsersCount(response.data.totalCount)
                })
        }
    }

    onPageChanged(pageNumber) {
        this.props.setCurrentPage(pageNumber)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersPage.pageSize}&page=${pageNumber}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        let pagesElements = pages.map(p =>
            <div onClick={(e) => {
                this.onPageChanged(p)
            }}
                 className={this.props.currentPage === p ? styles.paginationNumberActive : styles.paginationNumber}>
                {p}
            </div>
        )

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

                    <div className={styles.paginationNumbers}>
                        {pagesElements}
                    </div>
                </div>
            </div>
        )
    }
}

export default Users