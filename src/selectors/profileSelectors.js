export const getProfileSelector = (state) => {
    return state.profilePage.profile
}

export const getStatusSelector = (state) => {
    return state.profilePage.status
}

export const getAuthUserId = (state) => {
    return state.auth.userId
}

export const getApiQueryMessage = (state) => {
    return state.profilePage.apiQueryMessage
}