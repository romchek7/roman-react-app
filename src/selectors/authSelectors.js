export const getAuthSelector = (state) => {
    return state.auth.isAuth
}

export const getCaptcha = (state) => {
    return state.auth.captcha
}

export const getErrorOfAuthorization = (state) => {
    return state.auth.errorAuth
}