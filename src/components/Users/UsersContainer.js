import React from 'react'
import {connect} from "react-redux"
import {
    follow,
    setCurrentPage, setDisabledButtonValue, setFetchingValue,
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
        this.props.setDisabledButtonValue(true, userId)
        followUnfollowAPI.followUser(userId).then(data => {
            if (data.resultCode === 0) {
                this.props.follow(userId)
                this.props.setDisabledButtonValue(false, userId)
            }
        })
    }

    onUnfollowUser = (userId) => {
        this.props.setDisabledButtonValue(true, userId)
        followUnfollowAPI.unfollowUser(userId).then(data => {
            if (data.resultCode === 0) {
                this.props.unFollow(userId)
                this.props.setDisabledButtonValue(false, userId)
            }
        })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : <Users onPageChanged={this.onPageChanged}
                                                           onFollowUser={this.onFollowUser}
                                                           onUnfollowUser={this.onUnfollowUser}
                                                           disabledSubscribeButton={this.props.disabledSubscribeButton}
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
        isFetching: state.usersPage.isFetching,
        disabledSubscribeButton: state.usersPage.disabledSubscribeButton
    }
}

const UsersContainer = connect(mapStateToProps, {
    follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, setFetchingValue, setDisabledButtonValue
})(UsersAPI)

export default UsersContainer