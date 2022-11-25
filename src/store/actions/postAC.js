import * as types from '../types/postTypes'

export const setPost = (data) => {
  return { type: types.SET_POST, payload: data }
}


export const removePost = (data) => {
  return { type: types.REMOVE_POST, payload: data }
}

export const addLikePost = (data) => {
  return { type: types.ADD_LIKE, payload: data }
}


export const postTyping = (data) => {
  return { type: types.POST_TYPING, payload: data }
}

export const clearInputPost = (data) => {
  return { type: types.POST_CLEAR_INPUTS, payload: data }
}