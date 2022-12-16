import { initState } from './initState'
import { rootReducer } from './reducers/rootReducer'
import { legacy_createStore as createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  initState,
  composeWithDevTools(applyMiddleware(thunk))
)

const persistor = persistStore(store);
export default persistor;


