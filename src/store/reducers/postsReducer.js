import { initState } from '../initState'
import * as types from '../types/postTypes'

export const postsReducer = (state = initState, action) => {
  const { type, payload } = action
  switch (type) {
    case types.SET_ALL_POSTS:
      return payload
    case types.SET_POST:
      return [...state, payload]
    case types.ADD_LIKE:
      return state.filter((item) => item.myId === payload.myId ? item.likes += 1 : item)
    case types.REMOVE_POST:
      return state.filter((item) => item.myId !== payload.myId)
    default:
      return state
  }
}