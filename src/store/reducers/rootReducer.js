import { combineReducers } from 'redux'
import { postInputsReducer } from './postInputsReducer'
import { postsReducer } from './postsReducer'

export const rootReducer = combineReducers({
  posts: postsReducer,
  postInputs: postInputsReducer,
})