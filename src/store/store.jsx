import { initState } from './initState'
import { rootReducer } from './reducers/rootReducer'
import { legacy_createStore as createStore } from 'redux'
//import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(
  rootReducer,
  initState
)

export default store;