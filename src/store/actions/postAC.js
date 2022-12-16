import * as postTypes from '../types/postTypes'

export const setAllPosts = (data) => {
  return { type: postTypes.SET_ALL_POSTS, payload: data }
}

export const setPost = (data) => {
  return { type: postTypes.SET_POST, payload: data }
}

export const removePost = ({ myId }) => {
  console.log('REMOVE_POST', myId)
  return { type: 'REMOVE_POST', payload: { myId } } 
}

export const addLikePost = ({ myId }) => {
  return { type: 'ADD_LIKE', payload: { myId } }
}

export const postTyping = (data) => {
  return { type: postTypes.POST_TYPING, payload: data } 
}

export const submitPost = (inputs) => async (dispatch, getState) => {
  dispatch(setPost(
    {
      myId: Math.round(Math.random() * 99),
      title: inputs.title,
      text: inputs.text,
      likes: 0,
      check: inputs.check
    }))
}

export const typingPost = (event) => {
  return {
    type: postTypes.POST_TYPING,
    payload: { [event.target.name]: event.target.value, check: event.target.checked }
  }
}

export const clearInputPost = () => {
  return {
    type: postTypes.POST_CLEAR_INPUTS,
    payload: { title: '', text: '', check: false }
  }
}