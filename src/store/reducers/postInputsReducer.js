import { initState } from '../initState'
import * as types from '../types/postTypes'

export const postInputsReducer = (state = initState, action) => {
  const { type, payload } = action
  switch (type) {
    case types.POST_TYPING:
      return { ...state, ...payload }
    case types.POST_CLEAR_INPUTS:
      return { ...payload }
    default:
      return state
  }
}