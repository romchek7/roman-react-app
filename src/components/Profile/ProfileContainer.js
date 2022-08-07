import React from "react"
import {getProfileThunk, setUsersProfile} from "../../redux/profilePageReducer";
import {connect} from "react-redux";
import Profile from "./Profile";
import {useParams} from "react-router-dom"

const withRouter = WrappedComponent => props => {
    const params = useParams();
    return (
        <WrappedComponent
            {...props}
            params={params}
        />
    )
}

class ProfileAPI extends React.Component {
    componentDidMount() {
        let userId = this.props.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getProfileThunk(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileAPI);

export default connect(mapStateToProps, {setUsersProfile, getProfileThunk})(WithUrlDataContainerComponent)