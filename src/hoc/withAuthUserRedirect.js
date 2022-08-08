import React from "react"
import {connect} from "react-redux"
import {Navigate} from "react-router-dom"

let mapStateToPropsRedirect = (state) => ({
    isAuth: state.auth.isAuth
})

export const withAuthUserRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) {
                return <Navigate replace to={'/login'}/>
            }

            return <Component {...this.props}/>
        }
    }

    return connect(mapStateToPropsRedirect)(RedirectComponent)
}