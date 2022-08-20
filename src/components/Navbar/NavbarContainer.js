import React from 'react'
import Navbar from "./Navbar"
import {connect} from "react-redux";

class NavbarContainer extends React.Component {
    render() {
        return <Navbar {...this.props}/>
    }
}

let mapStateToProps = (state) => ({
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
)

export default connect(mapStateToProps, null)(NavbarContainer)