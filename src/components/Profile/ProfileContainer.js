import React from "react"
import {
    getProfileThunk,
    getUserStatusThunk,
    setUsersProfile,
    updateUserStatusThunk
} from "../../redux/profilePageReducer";
import {getAuthUserId, getNeedUserId, getProfileSelector, getStatusSelector} from '../../selectors/profileSelectors'
import {connect} from "react-redux";
import Profile from "./Profile";
import {useParams} from "react-router-dom"
import {compose} from "redux";
import {withAuthUserRedirect} from "../../hoc/withAuthUserRedirect";
import {logOutUser} from "../../redux/auth-reducer";

const withRouter = WrappedComponent => props => {
    const params = useParams();
    return <WrappedComponent {...props} params={params}/>
}

class ProfileContainer extends React.Component {
    state = {
        newId: this.props.params.userId
    }

    getUserProfile() {
        let userId = this.props.params.userId;
        if (!userId) {
            userId = this.props.authUserId;
        }
        this.props.getProfileThunk(userId)
        this.props.getUserStatusThunk(userId)
    }

    componentDidMount() {
        this.getUserProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevState.newId !== this.props.params.userId) {
            this.getUserProfile()
            this.setState({
                newId: this.props.params.userId
            })
        }
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     logOutUser={this.props.logOutUser}
                     updateUserStatusThunk={this.props.updateUserStatusThunk}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: getProfileSelector(state),
        status: getStatusSelector(state),
        authUserId: getAuthUserId(state),
        needUserId: getNeedUserId(state)
    }
}

export default compose(
    connect(mapStateToProps, {setUsersProfile, getProfileThunk, getUserStatusThunk, updateUserStatusThunk, logOutUser}),
    withRouter,
    withAuthUserRedirect
)(ProfileContainer)