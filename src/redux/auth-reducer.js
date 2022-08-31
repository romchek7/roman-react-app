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

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_AUTH_USER_DATA,
    data: {userId, email, login, isAuth}
})

export const getAuthUserData = () => async (dispatch) => {
    const response = await authUserAPI.getAuthUser()

    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const logInUser = (email, password, rememberMe) => async (dispatch) => {
    const response = await authUserAPI.logIn(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Invalid login or password'
        dispatch(stopSubmit('login', {_error: message}))
    }
}

export const logOutUser = () => async (dispatch) => {
    const response = await authUserAPI.logOut()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export default authReducer