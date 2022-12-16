import { combineReducers } from 'redux'
import { postInputsReducer } from './postInputsReducer'
import { postsReducer } from './postsReducer'
import { articlesReducer } from './articlesReducer'

export const rootReducer = combineReducers({
  posts: postsReducer,
  postInputs: postInputsReducer,
  articles: articlesReducer
})