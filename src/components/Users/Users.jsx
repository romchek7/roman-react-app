import React, {useEffect} from "react"
import styles from './Users.module.css'
import userIcon from '../assets/images/account.png'
import {NavLink} from "react-router-dom";
import {compose} from "redux";
import {connect} from "react-redux";
import {
    follow,
    followUserThunk,
    getUsersThunk,
    setCurrentPage,
    setDisabledButtonValue,
    unFollow, unfollowUserThunk
} from "../../redux/usersPageReducer";
import {withAuthUserRedirect} from "../../hoc/withAuthUserRedirect";
import {
    getCurrentPageSelector, getDisabledSubscribeButtonSelector, getIsFetchingSelector, getPagesLimitSelector,
    getTotalUsersCountSelector,
    getUsersPageSizeSelector,
    getUsersSelector
} from "../../selectors/usersSelectors";
import Preloader from "../common/Preloader/Preloader";

let Users = (props) => {
    useEffect(() => {
        props.getUsersThunk(props.currentPage, props.pageSize)
    }, [props.users.length])

    const onPageChanged = (pageNumber) => {
        props.setCurrentPage(pageNumber)
        props.getUsersThunk(pageNumber, props.pageSize)
        window.scrollTo({behavior: 'smooth', top: '0px'})
    }

    const onFollowUser = (userId) => {
        props.followUserThunk(userId)
    }

    const onUnfollowUser = (userId) => {
        props.unfollowUserThunk(userId)
    }

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = () => {
        let start = Math.floor((props.currentPage - 1) / props.pagesLimit) * props.pagesLimit
        return new Array(props.pagesLimit).fill().map((_, idx) => start + idx + 1)
    }

    let pagesElements = pages().map(p =>
        <div onClick={(e) => {
            onPageChanged(p)
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
                    ? <button disabled={props.disabledSubscribeButton.some(id => id === u.id)}
                              onClick={() => {
                                  onUnfollowUser(u.id)
                              }}>Unfollow</button>
                    : <button disabled={props.disabledSubscribeButton.some(id => id === u.id)}
                              onClick={() => {
                                  onFollowUser(u.id)
                              }}>Follow</button>
                }
            </div>
        </div>
    ))

    return (
        props.isFetching
                ? <Preloader/>
                : <div className={styles.main}>
                    <div className={styles.users}>
                        {usersElements}
                        <div className={styles.paginationNumbers}>
                            <div
                                className={props.currentPage > props.pagesLimit ? styles.paginationNumber : styles.paginationNumberHold}
                                onClick={() => {
                                    onPageChanged(1)
                                }}>
                                First page
                            </div>
                            <div
                                onClick={() => {
                                    onPageChanged(props.currentPage - 1)
                                }}
                                className={props.currentPage > 1 ? styles.paginationNumber : styles.paginationNumberHold}>
                                Previous
                            </div>
                            {pagesElements}
                            <div
                                onClick={() => {
                                    onPageChanged(props.currentPage + 1)
                                }}
                                className={props.currentPage === pagesCount ? styles.paginationNumberHold : styles.paginationNumber}>
                                Next
                            </div>
                            <div
                                className={props.currentPage <= (pagesCount - props.pagesLimit) ? styles.paginationNumber : styles.paginationNumberHold}
                                onClick={() => {
                                    onPageChanged(pagesCount)
                                }}>
                                Last page
                            </div>
                        </div>
                    </div>
                </div>
    )
}

let mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
        pageSize: getUsersPageSizeSelector(state),
        totalUsersCount: getTotalUsersCountSelector(state),
        currentPage: getCurrentPageSelector(state),
        pagesLimit: getPagesLimitSelector(state),
        isFetching: getIsFetchingSelector(state),
        disabledSubscribeButton: getDisabledSubscribeButtonSelector(state)
    }
}

export default compose(
    connect(mapStateToProps, {
        follow,
        unFollow,
        setCurrentPage,
        setDisabledButtonValue,
        getUsersThunk,
        followUserThunk,
        unfollowUserThunk
    }),
    withAuthUserRedirect
)(Users)