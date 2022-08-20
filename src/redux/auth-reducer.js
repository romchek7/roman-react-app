import {authUserAPI} from "../api/api"
import {stopSubmit} from "redux-form"

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data,
            }
        default:
            return state
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_AUTH_USER_DATA, data: {userId, email, login, isAuth}})

export const getAuthUserData = () => (dispatch) => {
    return authUserAPI.getAuthUser().then(data => {
        if (data.resultCode === 0) {
            let {id, login, email} = data.data
            dispatch(setAuthUserData(id, email, login, true))
        }
    })
}

export const logInUser = (email, password, rememberMe) => (dispatch) => {
    authUserAPI.logIn(email, password, rememberMe).then(data => {
        if (data.resultCode === 0 ) {
            dispatch(getAuthUserData())
        }
        else {
            let message = data.messages.length > 0 ? data.messages[0] : 'Invalid login or password'
            dispatch(stopSubmit('login', {_error: message}))
        }
    })
}

export const logOutUser = () => (dispatch) => {
    authUserAPI.logOut().then(data => {
        if (data.resultCode === 0 ) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    })
}

export default authReducer