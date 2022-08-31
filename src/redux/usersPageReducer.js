import {followUnfollowAPI, usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const SET_FETCHING_VALUE = 'SET_FETCHING_VALUE'
const SET_DISABLED_VALUE = 'SET_DISABLED_VALUE'

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 40,
    currentPage: 1,
    pagesLimit: 5,
    isFetching: false,
    disabledSubscribeButton: []
}

const usersUpdate = (users, id, userId, followedValue) => {
    return users.map(u => {
        if (u[id] === userId) {
            return {...u, followed: followedValue}
        }
        return u
    })
}

let usersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: usersUpdate(state.users, "id", action.userId, true)
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: usersUpdate(state.users, "id", action.userId, false)
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        }
        case SET_FETCHING_VALUE: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case SET_DISABLED_VALUE: {
            return {
                ...state,
                disabledSubscribeButton: action.disabled
                    ? [...state.disabledSubscribeButton, action.userId]
                    : [...state.disabledSubscribeButton.filter(id => id !== action.userId)]
            }
        }
        default:
            return state
    }
}

export let follow = (userId) => ({type: FOLLOW, userId})
export let unFollow = (userId) => ({type: UNFOLLOW, userId})
export let setUsers = (users) => ({type: SET_USERS, users})
export let setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export let setTotalUsersCount = (totalUsersCount) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount: totalUsersCount
})
export let setFetchingValue = (isFetching) => ({type: SET_FETCHING_VALUE, isFetching})
export let setDisabledButtonValue = (disabled, userId) => ({type: SET_DISABLED_VALUE, disabled, userId})

export const getUsersThunk = (currentPage, pageSize) => async (dispatch) => {
    dispatch(setFetchingValue(true))
    const response = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(setUsers(response.data.items))
    dispatch(setTotalUsersCount(response.data.totalCount))
    dispatch(setFetchingValue(false))
}

const followUnfollowUser = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(setDisabledButtonValue(true, userId))
    let response = await apiMethod(userId)
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
        dispatch(setDisabledButtonValue(false, userId))
    }
}

export const followUserThunk = (userId) => async (dispatch) => {
    return followUnfollowUser(dispatch, userId, followUnfollowAPI.followUser, follow)
}

export const unfollowUserThunk = (userId) => async (dispatch) => {
    return followUnfollowUser(dispatch, userId, followUnfollowAPI.unfollowUser, unFollow)
}

export default usersPageReducer