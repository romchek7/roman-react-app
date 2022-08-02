import React from 'react'
import {connect} from "react-redux"
import {
    followCreator,
    setCurrentPage,
    setTotalUsersCount,
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
        pagesLimit: state.usersPage.pagesLimit
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
            dispatch(setCurrentPage(currentPage))
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalUsersCount(totalUsersCount))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI)

export default UsersContainer