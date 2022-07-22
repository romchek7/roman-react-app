const ADD_MESSAGE = 'ADD-MESSAGE'
const CHANGE_MESSAGE = 'CHANGE-MESSAGE'

let initialState = {
    dialogsArray: [
        { id: 1, name: 'Dialog 1' },
        { id: 2, name: 'Dialog 2' },
        { id: 3, name: 'Dialog 3' },
        { id: 4, name: 'Dialog 4' },
        { id: 5, name: 'Dialog 5' },
        { id: 6, name: 'Dialog 6' },
        { id: 7, name: 'Dialog 7' },
        { id: 8, name: 'Dialog 8' },
        { id: 9, name: 'Dialog 9' },
        { id: 10, name: 'Dialog 10' }
    ],
    messagesArray: [
        { id: 1, message: 'Hello' },
        { id: 2, message: 'Hi' }
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

export let addNewMessageCreator = () => ({ type: ADD_MESSAGE })
export let changeMessageBodyCreator = (body) => ({ type: CHANGE_MESSAGE, body: body })

export default dialogsPageReducer