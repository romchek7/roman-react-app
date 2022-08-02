import React from "react";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersAPI extends React.Component {
    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.setFetchingValue(true)
            axios
                .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
                .then(response => {
                    this.props.setUsers(response.data.items)
                    this.props.setTotalUsersCount(response.data.totalCount)
                    this.props.setFetchingValue(false)
                })
        }
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setFetchingValue(true)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setFetchingValue(false)
            })
        window.scrollTo({behavior: 'smooth', top: '0px'})
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : <Users onPageChanged={this.onPageChanged}
                                                           totalUsersCount={this.props.totalUsersCount}
                                                           pageSize={this.props.pageSize}
                                                           currentPage={this.props.currentPage}
                                                           pagesLimit={this.props.pagesLimit}
                                                           followUser={this.props.followUser}
                                                           unFollowUser={this.props.unFollowUser}
                                                           users={this.props.users}/>}
        </>
    }
}

export default UsersAPI