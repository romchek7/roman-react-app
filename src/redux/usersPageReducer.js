const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const SET_FETCHING_VALUE = 'SET_FETCHING_VALUE'
const SET_DISABLED_VALUE = 'SET_DISABLED_VALUE'

let initialState = {
    users: [],
    pageSize: 4,
    totalUsersCount: 40,
    currentPage: 1,
    pagesLimit: 5,
    isFetching: false,
    disabledSubscribeButton: []
}

let usersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
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

export default usersPageReducer