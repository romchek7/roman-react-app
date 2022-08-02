import React from 'react'
import {connect} from "react-redux"
import {
    followCreator,
    setCurrentPageCreator, setFetchingValueCreator,
    setTotalUsersCountCreator,
    setUsersCreator,
    unFollowCreator
} from "../../redux/usersPageReducer"
import UsersAPI from "./UsersAPI";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        pagesLimit: state.usersPage.pagesLimit,
        isFetching: state.usersPage.isFetching
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        followUser: (userId) => {
            dispatch(followCreator(userId))
        },
        unFollowUser: (userId) => {
            dispatch(unFollowCreator(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersCreator(users))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageCreator(currentPage))
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalUsersCountCreator(totalUsersCount))
        },
        setFetchingValue: (isFetching) => {
            dispatch(setFetchingValueCreator(isFetching))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI)

export default UsersContainer