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

    getState() {
        return this._state
    },

    render() { },

    addComment() {
        let newComment = {
            id: 8,
            message: this._state.profilePage.newCommentText,
            likes: 0
        }

        this._state.profilePage.commentsArray.push(newComment);
        this._state.profilePage.newCommentText = ''
        this.render(this._state);
    },

    changeComment(text) {
        this._state.profilePage.newCommentText = text;
        this.render(this._state);
    },

    subscribe(observer) {
        this.render = observer
    }
}

export default store;