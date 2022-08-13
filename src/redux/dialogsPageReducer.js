const ADD_MESSAGE = 'ADD-MESSAGE'

let initialState = {
    dialogsArray: [
        {id: 1, name: 'Dialog 1'},
        {id: 2, name: 'Dialog 2'},
        {id: 3, name: 'Dialog 3'},
    ],
    messagesArray: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Hi'}
    ]
}

const dialogsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 7,
                message: action.message
            }
            return {
                ...state,
                messagesArray: [...state.messagesArray, newMessage],
            }
        default:
            return state
    }
}

export let addMessage = (message) => ({type: ADD_MESSAGE, message})

export default dialogsPageReducer