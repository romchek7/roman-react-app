import React from 'react'
import {connect} from "react-redux"
import {
    follow,
    setCurrentPage, setFetchingValue,
    setTotalUsersCount,
    setUsers,
    unFollow
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

const UsersContainer = connect(mapStateToProps, {
    follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, setFetchingValue
})(UsersAPI)

export default UsersContainer