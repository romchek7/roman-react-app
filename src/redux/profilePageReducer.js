import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST'
const UPDATE_POST = 'CHANGE-POST'
const SET_USERS_PROFILE = 'SET_USERS_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'
const UPDATE_USER_STATUS_API = 'UPDATE_USER_STATUS'

let initialState = {
    profile: null,
    postsArray: [
        {id: 1, message: 'comment 1', likes: 10},
        {id: 2, message: 'comment 2', likes: 20}
    ],
    newPostText: "",
    status: ""
}

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 8,
                message: state.newPostText,
                likes: 0
            }
            return {
                ...state,
                postsArray: [...state.postsArray, newPost],
                newPostText: ''
            }
        case UPDATE_POST:
            return {
                ...state,
                newPostText: action.text
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
        default:
            return state
    }
}

export let addPostCreator = () => ({type: ADD_POST})
export let updatePostCreator = (text) => ({type: UPDATE_POST, text: text})
export let setUsersProfile = (profile) => ({type: SET_USERS_PROFILE, profile})
export let setUserStatus = (status) => ({type: SET_USER_STATUS, status})

export const getProfileThunk = (userId) => (dispatch) => {
    profileAPI.getProfile(userId).then(data => {
        dispatch(setUsersProfile(data))
    })
}

export const getUserStatusThunk = (userId) => (dispatch) => {
    profileAPI.getUserStatus(userId).then(response => {
        dispatch(setUserStatus(response.data))
    })
}

export const updateUserStatusThunk = (status) => (dispatch) => {
    profileAPI.updateUserStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setUserStatus(status))
        }
    })
}

export default profilePageReducer