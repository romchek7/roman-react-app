import React from 'react'
import {connect} from "react-redux";
import Users from "./Users";
import {followCreator, setUsersCreator, unFollowCreator} from "../../redux/usersPageReducer";

let mapStateToProps = (state) => {
    return {
        usersPage: state.usersPage
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
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer