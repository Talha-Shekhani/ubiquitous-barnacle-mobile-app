import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { dishes } from './dishes'
import { comments } from './comments'
import { promotions } from './promotions'
import { leaders } from './leaders'
import { favorites } from './favorite'
import { patient } from './patient'
import { persistStore, persistCombineReducers } from 'redux-persist'
import { AsyncStorage } from 'react-native'

export const configureStore = () => {
    const config = {
        key: 'root',
        storage: AsyncStorage,
        debug: true
    }

    const store = createStore(
        persistCombineReducers(config, {
            patient,
        }),
        compose(
            applyMiddleware(thunk, logger)
            // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()            
        )
    )
    const persistor = persistStore(store)
    return { persistor, store }
}