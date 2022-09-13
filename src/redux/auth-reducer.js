import {authUserAPI} from "../api/api"
import {stopSubmit} from "redux-form"

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'
const GET_CAPTCHA = 'GET_CAPTCHA'
const GET_AUTH_ERROR = 'GET_AUTH_ERROR'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captcha: null,
    errorAuth: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data,
            }
        case GET_CAPTCHA:
            return {
                ...state,
                captcha: action.captcha
            }
        case GET_AUTH_ERROR:
            return {
                ...state,
                errorAuth: action.errorAuth
            }
        default:
            return state
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_AUTH_USER_DATA,
    data: {userId, email, login, isAuth}
})

export const getCaptcha = (captcha) => ({
    type: GET_CAPTCHA,
    captcha
})

export const getAuthError = (errorAuth) => ({
    type: GET_AUTH_ERROR,
    errorAuth
})

export const getAuthUserData = () => async (dispatch) => {
    const response = await authUserAPI.getAuthUser()

    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const logInUser = (email, password, rememberMe, captcha = null) => async (dispatch) => {
    const response = await authUserAPI.logIn(email, password, rememberMe, captcha)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaThunk())
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Invalid login or password'
        dispatch(getAuthError(message))
    }
}

export const logOutUser = () => async (dispatch) => {
    const response = await authUserAPI.logOut()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export const getCaptchaThunk = () => async (dispatch) => {
    const response = await authUserAPI.getCaptcha()
    dispatch(getCaptcha(response.data.url))
}

export default authReducer