export const getUsersSelector = (state) => {
    return state.usersPage.users
}

export const getUsersPageSizeSelector = (state) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCountSelector = (state) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPageSelector = (state) => {
    return state.usersPage.currentPage
}

export const getPagesLimitSelector = (state) => {
    return state.usersPage.pagesLimit
}

export const getIsFetchingSelector = (state) => {
    return state.usersPage.isFetching
}

export const getDisabledSubscribeButtonSelector = (state) => {
    return state.usersPage.disabledSubscribeButton
}