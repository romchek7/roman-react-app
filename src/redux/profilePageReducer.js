import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST'
const UPDATE_POST = 'CHANGE-POST'
const SET_USERS_PROFILE = 'SET_USERS_PROFILE'

let initialState = {
    profile: null,
    postsArray: [
        {id: 1, message: 'comment 1', likes: 10},
        {id: 2, message: 'comment 2', likes: 20}
    ],
    newPostText: ""
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
        default:
            return state
    }
}

export let addPostCreator = () => ({type: ADD_POST})
export let updatePostCreator = (text) => ({type: UPDATE_POST, text: text})
export let setUsersProfile = (profile) => ({type: SET_USERS_PROFILE, profile})

export const getProfileThunk = (userId) => (dispatch) => {
    debugger
    profileAPI.getProfile(userId).then(data => {
        dispatch(setUsersProfile(data))
    })
}

export default profilePageReducer