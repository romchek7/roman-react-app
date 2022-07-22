const ADD_POST = 'ADD-POST'
const CHANGE_COMMENT = 'CHANGE-COMMENT'

const profilePageReducer = (state, action) => {
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

export let addPostActionCreator = () => ({ type: ADD_POST })
export let changeCommentActionCreator = (text) => ({ type: CHANGE_COMMENT, text: text })

export default profilePageReducer