import React from 'react'
import Navbar from "./Navbar"
import {connect} from "react-redux";
import {getAuthSelector} from "../../selectors/authSelectors";

class NavbarContainer extends React.Component {
    render() {
        return <Navbar {...this.props}/>
    }
}

let mapStateToProps = (state) => ({
        isAuth: getAuthSelector(state)
    }
)

export default connect(mapStateToProps, null)(NavbarContainer)