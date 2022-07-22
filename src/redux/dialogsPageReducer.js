const ADD_MESSAGE = 'ADD-MESSAGE'
const CHANGE_MESSAGE = 'CHANGE-MESSAGE'

const dialogsPageReducer = (state, action) => {
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