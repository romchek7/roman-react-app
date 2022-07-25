const ADD_MESSAGE = 'ADD-MESSAGE'
const CHANGE_MESSAGE = 'CHANGE-MESSAGE'

let initialState = {
    dialogsArray: [
        {id: 1, name: 'Dialog 1'},
        {id: 2, name: 'Dialog 2'},
        {id: 3, name: 'Dialog 3'},
    ],
    messagesArray: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Hi'}
    ],
    newMessageBody: ""
}

const dialogsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 7,
                message: state.newMessageBody
            }
            state.messagesArray.push(newMessage)
            state.newMessageBody = ''
            return state
        case CHANGE_MESSAGE:
            state.newMessageBody = action.body
            return state
        default:
            return state
    }
}

export let addMessageCreator = () => ({type: ADD_MESSAGE})
export let updateMessageCreator = (body) => ({type: CHANGE_MESSAGE, body: body})

export default dialogsPageReducer