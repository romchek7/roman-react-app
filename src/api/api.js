import React from 'react'
import * as axios from "axios"

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "b3102f96-42ab-48b4-b67a-5b8bfb9599ed"
    },
    baseURL: `https://social-network.samuraijs.com/api/1.0/`
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`).then(response => {
            return response.data
        })
    }
}

export const followUnfollowAPI = {
    followUser(userId = 2) {
        return instance.post(`follow/${userId}`).then(response => {
            return response.data
        })
    },

    unfollowUser(userId = 2) {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    }
}

export const profileAPI = {
    getProfile(userId = 2) {
        return instance.get(`profile/${userId}`).then(response => {
            return response.data
        })
    }
}