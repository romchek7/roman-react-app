export const getProfileSelector = (state) => {
    return state.profilePage.profile
}

export const getStatusSelector = (state) => {
    return state.profilePage.status
}

export const getAuthUserId = (state) => {
    return state.auth.userId
}

export const getNeedUserId = (state) => {
    return state.profilePage.needUserId
}