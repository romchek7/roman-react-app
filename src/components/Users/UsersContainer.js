import React from 'react'
import {connect} from "react-redux"
import {
    follow, unFollow,
    setCurrentPage, setDisabledButtonValue,
    getUsersThunk, followUserThunk, unfollowUserThunk
} from "../../redux/usersPageReducer"
import Preloader from "../common/Preloader/Preloader";
import Users from "./Users";
import {compose} from "redux";
import {withAuthUserRedirect} from "../../hoc/withAuthUserRedirect";
import {
    getCurrentPageSelector, getDisabledSubscribeButtonSelector, getIsFetchingSelector, getPagesLimitSelector,
    getTotalUsersCountSelector,
    getUsersPageSizeSelector,
    getUsersSelector
} from "../../selectors/usersSelectors";

class UsersContainer extends React.Component {
    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
        }
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.getUsersThunk(pageNumber, this.props.pageSize)
        window.scrollTo({behavior: 'smooth', top: '0px'})
    }

    onFollowUser = (userId) => {
        this.props.followUserThunk(userId)
    }

    onUnfollowUser = (userId) => {
        this.props.unfollowUserThunk(userId)
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
)(UsersContainer)