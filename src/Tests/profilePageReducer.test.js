import React from "react"
import profilePageReducer, {addPost, deletePost, setUsersProfile} from ".././redux/profilePageReducer"

let state = {
    profile: null,
    postsArray: [
        {id: 1, message: 'comment 1', likes: 10},
        {id: 2, message: 'comment 2', likes: 20}
    ],
    profiles: [
        {
            userId: 1,
            lookingForAJob: '',
            lookingForAJobDescription: '',
            fullName: 'test1',
            contacts: {
                github: ''
            },
            photos: {
                small: '',
                large: ''
            }
        },
        {
            userId: 2,
            lookingForAJob: '',
            lookingForAJobDescription: '',
            fullName: 'test2',
            contacts: {
                github: ''
            },
            photos: {
                small: '',
                large: ''
            }
        }
    ]
}

it('length of posts should be incremented', () => {
    // test data
    let action = addPost('Hello, I am here.')

    // action
    let newState = profilePageReducer(state, action)

    // expectation
    expect(newState.postsArray.length).toBe(3)
})

it('after deleting length of messages should be decrement', () => {
    // test data
    let action = deletePost(2)

    // action
    let newState = profilePageReducer(state, action)

    // expectation
    expect(newState.postsArray.length).toBe(1)
})

it('after deleting length of messages should not be decrement', () => {
    // test data
    let action = deletePost(5)

    // action
    let newState = profilePageReducer(state, action)

    // expectation
    expect(newState.postsArray.length).toBe(1)
})

it('profile should be equal to state profiles user 0', () => {
    // test data
    let action = setUsersProfile(state.profiles[0])

    // action
    let newState = profilePageReducer(state, action)

    // expectation
    expect(newState.profile).toEqual(state.profiles[0])
})

it('profile should not be equal to state profiles user 0', () => {
    // test data
    let action = setUsersProfile(state.profiles[1])

    // action
    let newState = profilePageReducer(state, action)

    // expectation
    expect(newState.profile).toEqual(state.profiles[0])
})