import React from "react"
import styles from './Users.module.css'
import userIcon from '../assets/images/account.png'
import {NavLink} from "react-router-dom";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = () => {
        let start = Math.floor((props.currentPage - 1) / props.pagesLimit) * props.pagesLimit
        return new Array(props.pagesLimit).fill().map((_, idx) => start + idx + 1)
    }

    let pagesElements = pages().map(p =>
        <div onClick={(e) => {
            props.onPageChanged(p)
        }}
             className={props.currentPage === p ? styles.paginationNumberActive : styles.paginationNumber}>
            {p}
        </div>
    )

    let usersElements = props.users.map(u => (
        <div className={styles.user}>
            <div className={styles.userPhoto}>
                <NavLink to={'/profile/' + u.id}>
                    <img src={u.photos.small != null ? u.photos.small : userIcon}/>
                </NavLink>
            </div>
            <div className={styles.userName}>
                {u.name}
            </div>
            <div className={styles.followBtn}>
                {u.followed
                    ? <button onClick={() => {
                        props.unFollowUser(u.id)
                    }}>Unfollow</button>
                    : <button onClick={() => {
                        props.followUser(u.id)
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
                        className={props.currentPage > props.pagesLimit ? styles.paginationNumber : styles.paginationNumberHold}
                        onClick={() => {
                            props.onPageChanged(1)
                        }}>
                        First page
                    </div>
                    <div
                        onClick={() => {
                            props.onPageChanged(props.currentPage - 1)
                        }}
                        className={props.currentPage > 1 ? styles.paginationNumber : styles.paginationNumberHold}>
                        Previous
                    </div>
                    {pagesElements}
                    <div
                        onClick={() => {
                            props.onPageChanged(props.currentPage + 1)
                        }}
                        className={props.currentPage === pagesCount ? styles.paginationNumberHold : styles.paginationNumber}>
                        Next
                    </div>
                    <div
                        className={props.currentPage <= (pagesCount - props.pagesLimit) ? styles.paginationNumber : styles.paginationNumberHold}
                        onClick={() => {
                            props.onPageChanged(pagesCount)
                        }}>
                        Last page
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Users