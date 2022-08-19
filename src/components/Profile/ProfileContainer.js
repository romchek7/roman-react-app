import React from "react"
import {
    getProfileThunk,
    getUserStatusThunk,
    setUsersProfile,
    updateUserStatusThunk
} from "../../redux/profilePageReducer";
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
    componentDidMount() {
        let userId = this.props.params.userId;
        if (!userId) {
            userId = this.props.authUserId;
        }
        this.props.getProfileThunk(userId)
        this.props.getUserStatusThunk(userId)
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
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authUserId: state.auth.userId
    }
}

export default compose(
    connect(mapStateToProps, {setUsersProfile, getProfileThunk, getUserStatusThunk, updateUserStatusThunk, logOutUser}),
    withRouter,
    withAuthUserRedirect
)(ProfileContainer)