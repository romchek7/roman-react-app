import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST'
const DELETE_POST = 'DELETE_POST'
const SET_USERS_PROFILE = 'SET_USERS_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'
const SET_USER_MAIN_PHOTO = 'SET_USER_MAIN_PHOTO'
const UPDATE_USER_INFO = 'UPDATE_USER_INFO'
const SET_API_QUERY_MESSAGE = 'SET_API_QUERY_MESSAGE'

let initialState = {
    profile: null,
    postsArray: [
        {id: 1, message: 'comment 1', likes: 10},
        {id: 2, message: 'comment 2', likes: 20}
    ],
    status: '',
    apiQueryMessage: ''
}

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 8,
                message: action.newPostText,
                likes: 0
            }
            return {
                ...state,
                postsArray: [...state.postsArray, newPost],
            }
        case DELETE_POST:
            return {
                ...state,
                postsArray: state.postsArray.filter(p => p.id !== action.postId)
            }
        case SET_USERS_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            }
        case SET_USER_MAIN_PHOTO:
            return {
                ...state,
                profile: {...state.profile, photos: action.photo}
            }
        case UPDATE_USER_INFO:
            return {
                ...state,
                profile: action.profile
            }
        case SET_API_QUERY_MESSAGE:
            return {
                ...state,
                apiQueryMessage: action.apiQueryMessage
            }
        default:
            return state
    }
}

export let addPost = (newPostText) => ({type: ADD_POST, newPostText})
export let deletePost = (postId) => ({type: DELETE_POST, postId})
export let setUsersProfile = (profile) => ({type: SET_USERS_PROFILE, profile})
export let setUserStatus = (status) => ({type: SET_USER_STATUS, status})
export let setUserMainPhoto = (photo) => ({type: SET_USER_MAIN_PHOTO, photo})
export let updateUserInfo = (profile) => ({type: UPDATE_USER_INFO, profile})
export let setApiQueryMessage = (apiQueryMessage) => ({type: SET_API_QUERY_MESSAGE, apiQueryMessage})

export const getProfileThunk = (userId) => async (dispatch) => {
    const response = await profileAPI.getProfile(userId)
    if (response.status === 200) {
        dispatch(setUsersProfile(response.data))
    }
}

export const getUserStatusThunk = (userId) => async (dispatch) => {
    const response = await profileAPI.getUserStatus(userId)
    dispatch(setUserStatus(response.data))
}

export const updateUserStatusThunk = (status) => async (dispatch) => {
    const response = await profileAPI.updateUserStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status))
    }
}

export const updateUserMainPhoto = (photo) => async (dispatch) => {
    const response = await profileAPI.updateUserMainPhoto(photo)
    if (response.data.resultCode === 0 ) {
        dispatch(setUserMainPhoto(response.data.data.photos))
    }
}

export const updateUserInfoThunk = (profile) => async (dispatch) => {
    const response = await profileAPI.updateUserInfo(profile)
    if (response.data.resultCode === 0) {
        dispatch(updateUserInfo(profile))
        dispatch(getProfileThunk(profile.userId))
    }
    if (response.data.resultCode === 1) {
        dispatch(setApiQueryMessage(response.data.messages[0]))
    }
}

export default profilePageReducer