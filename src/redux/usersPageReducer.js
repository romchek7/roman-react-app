const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const SET_FETCHING_VALUE = 'SET_FETCHING_VALUE'

let initialState = {
    users: [],
    pageSize: 4,
    totalUsersCount: 40,
    currentPage: 1,
    pagesLimit: 5,
    isFetching: false
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
        default:
            return state
    }
}

export let followCreator = (userId) => ({type: FOLLOW, userId: userId})
export let unFollowCreator = (userId) => ({type: UNFOLLOW, userId: userId})
export let setUsersCreator = (users) => ({type: SET_USERS, users: users})
export let setCurrentPageCreator = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage})
export let setTotalUsersCountCreator = (totalUsersCount) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount: totalUsersCount
})
export let setFetchingValueCreator = (isFetching) => ({type: SET_FETCHING_VALUE, isFetching: isFetching})

export default usersPageReducer