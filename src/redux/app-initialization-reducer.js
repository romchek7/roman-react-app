import {getAuthUserData} from "./auth-reducer";

const APP_INITIALIZATION = 'APP_INITIALIZATION'

let initialState = {
    initialized: false
}

const appInitializationReducer = (state = initialState, action) => {
    switch (action.type) {
        case APP_INITIALIZATION:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

const appInitializationCreator = () => ({type: APP_INITIALIZATION})

export const appInitializeThunk = () => (dispatch) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise]).then(() => {
        dispatch(appInitializationCreator())
    })
}

export default appInitializationReducer