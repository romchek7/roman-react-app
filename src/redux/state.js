const ADD_POST = 'ADD-POST'
const CHANGE_COMMENT = 'CHANGE-COMMENT'

let store = {
    _state: {
        profilePage: {
            commentsArray: [
                { id: 1, message: 'comment 1', likes: 10 },
                { id: 2, message: 'comment 2', likes: 20 }
            ],
            newCommentText: ""
        },
        dialogsPage: {
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
            ]
        }
    },

    _render() { },

    getState() {
        return this._state
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newComment = {
                id: 8,
                message: this._state.profilePage.newCommentText,
                likes: 0
            }

            this._state.profilePage.commentsArray.push(newComment);
            this._state.profilePage.newCommentText = ''
            this._render(this._state);
        }
        else if (action.type === CHANGE_COMMENT) {
            this._state.profilePage.newCommentText = action.text;
            this._render(this._state);
        }
    }
    ,

    subscribe(observer) {
        this._render = observer
    }
}

export let addPostActionCreator = () => ({ type: ADD_POST })

export let changeCommentActionCreator = (text) => ({ type: CHANGE_COMMENT, text: text})

export default store;