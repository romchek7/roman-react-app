import React from "react"
import {setUsersProfile} from "../../redux/profilePageReducer";
import {connect} from "react-redux";
import axios from "axios";
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
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUsersProfile(response.data)
            })
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

export default connect(mapStateToProps, {setUsersProfile})(WithUrlDataContainerComponent)