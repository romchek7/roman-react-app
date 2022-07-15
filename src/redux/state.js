let render = () => {}

let state = {
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
}

export let addComment = () => {
    let newComment = {
        id: 8,
        message: state.profilePage.newCommentText,
        likes: 0
    }

    state.profilePage.commentsArray.push(newComment);
    state.profilePage.newCommentText = ''
    render(state);
}

export let changeComment = (text) => {
    state.profilePage.newCommentText = text;
    render(state);
}

export const subscribe = (observer) => {
    render = observer
}

export default state;