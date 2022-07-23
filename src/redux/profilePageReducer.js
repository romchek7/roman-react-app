const ADD_POST = 'ADD-POST'
const CHANGE_COMMENT = 'CHANGE-COMMENT'

let initialState = {
    commentsArray: [
        {id: 1, message: 'comment 1', likes: 10},
        {id: 2, message: 'comment 2', likes: 20}
    ],
    newCommentText: ""
}

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newComment = {
                id: 8,
                message: state.newCommentText,
                likes: 0
            }
            state.commentsArray.push(newComment)
            state.newCommentText = ''
            return state
        case CHANGE_COMMENT:
            state.newCommentText = action.text
            return state
        default:
            return state
    }
}

export let addPostActionCreator = () => ({type: ADD_POST})
export let changeCommentActionCreator = (text) => ({type: CHANGE_COMMENT, text: text})

export default profilePageReducer