import React from "react";
import * as axios from "axios";
import Users from "./Users";

class UsersAPI extends React.Component {
    componentDidMount() {
        if (this.props.users.length === 0) {
            axios
                .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
                .then(response => {
                    this.props.setUsers(response.data.items)
                    this.props.setTotalUsersCount(response.data.totalCount)
                })
        }
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
        window.scrollTo({behavior: 'smooth', top: '0px'})
    }

    render() {
        return <Users onPageChanged={this.onPageChanged}
                      totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      pagesLimit={this.props.pagesLimit}
                      followUser={this.props.followUser}
                      unFollowUser={this.props.unFollowUser}
                      users={this.props.users}
        />
    }
}

export default UsersAPI