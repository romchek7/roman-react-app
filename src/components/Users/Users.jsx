import React, {useEffect, useMemo, useState} from "react"
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
import Pagination from "../common/Pagination/Pagination";

let Users = React.memo(({users, pageSize, totalUsersCount, currentPage, pagesLimit, isFetching, disabledSubscribeButton,
                            follow,
                            unFollow,
                            setCurrentPage,
                            setDisabledButtonValue,
                            getUsersThunk,
                            followUserThunk,
                            unfollowUserThunk}) => {
    useEffect(() => {
        getUsersThunk(currentPage, pageSize)
    }, [users.length])

    const onPageChanged = (pageNumber) => {
        setCurrentPage(pageNumber)
        getUsersThunk(pageNumber, pageSize)
        window.scrollTo({behavior: 'smooth', top: '0px'})
    }

    const onFollowUser = (userId) => {
        followUserThunk(userId)
    }

    const onUnfollowUser = (userId) => {
        unfollowUserThunk(userId)
    }

    const usersElements = users.map(u => (
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
                    ? <button disabled={disabledSubscribeButton.some(id => id === u.id)}
                              onClick={() => {
                                  onUnfollowUser(u.id)
                              }}>Unfollow</button>
                    : <button disabled={disabledSubscribeButton.some(id => id === u.id)}
                              onClick={() => {
                                  onFollowUser(u.id)
                              }}>Follow</button>
                }
            </div>
        </div>
    ))

    return (
        isFetching
                ? <Preloader/>
                : <div className={styles.main}>
                    <div className={styles.users}>
                        {usersElements}
                        <Pagination onPageChanged={onPageChanged} currentPage={currentPage} pagesLimit={pagesLimit}
                                    totalItemsCount={totalUsersCount} pageSize={pageSize}/>
                    </div>
                </div>
    )
})

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