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
                    this.props.setTotalUsersCount(response.data.totalCount)
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
        window.scrollTo({behavior: 'smooth', top: '0px'})
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = () => {
            let start = Math.floor((this.props.usersPage.currentPage - 1) / this.props.usersPage.pagesLimit) * this.props.usersPage.pagesLimit
            return new Array(this.props.usersPage.pagesLimit).fill().map((_, idx) => start + idx + 1)
        }

        let pagesElements = pages().map(p =>
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
                        <div
                            className={this.props.currentPage > this.props.usersPage.pagesLimit ? styles.paginationNumber : styles.paginationNumberHold}
                            onClick={() => {
                                this.onPageChanged(1)
                            }}>
                            First page
                        </div>
                        <div
                            onClick={() => {
                                this.onPageChanged(this.props.currentPage - 1)
                            }}
                            className={this.props.currentPage > 1 ? styles.paginationNumber : styles.paginationNumberHold}>
                            Previous
                        </div>
                        {pagesElements}
                        <div
                            onClick={() => {
                                this.onPageChanged(this.props.currentPage + 1)
                            }}
                            className={this.props.currentPage === pagesCount ? styles.paginationNumberHold : styles.paginationNumber}>
                            Next
                        </div>
                        <div
                            className={this.props.currentPage <= (pagesCount - this.props.usersPage.pagesLimit) ? styles.paginationNumber : styles.paginationNumberHold}
                            onClick={() => {
                                this.onPageChanged(pagesCount)
                            }}>
                            Last page
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Users