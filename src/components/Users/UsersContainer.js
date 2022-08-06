import React from 'react'
import {connect} from "react-redux"
import {
    follow,
    setCurrentPage, setFetchingValue,
    setTotalUsersCount,
    setUsers,
    unFollow
} from "../../redux/usersPageReducer"
import Preloader from "../common/Preloader/Preloader";
import Users from "./Users";
import {followUnfollowAPI, usersAPI} from "../../api/api";

class UsersAPI extends React.Component {
    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.setFetchingValue(true)
            usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
                this.props.setFetchingValue(false)
            })
        }
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setFetchingValue(true)
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.setUsers(data.items)
            this.props.setFetchingValue(false)
        })
        window.scrollTo({behavior: 'smooth', top: '0px'})
    }

    onFollowUser = (userId) => {
        followUnfollowAPI.followUser(userId).then(data => {
            if (data.resultCode === 0) {
                this.props.follow(userId)
            }
        })
    }

    onUnfollowUser = (userId) => {
        followUnfollowAPI.unfollowUser(userId).then(data => {
            if (data.resultCode === 0) {
                this.props.unFollow(userId)
            }
        })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : <Users onPageChanged={this.onPageChanged}
                                                           onFollowUser={this.onFollowUser}
                                                           onUnfollowUser={this.onUnfollowUser}
                                                           totalUsersCount={this.props.totalUsersCount}
                                                           pageSize={this.props.pageSize}
                                                           currentPage={this.props.currentPage}
                                                           pagesLimit={this.props.pagesLimit}
                                                           users={this.props.users}/>}
        </>
    }
}

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