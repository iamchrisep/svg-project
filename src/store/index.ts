import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '../reducers'
import watcher from '../sagas/watchers'

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

const composeEnhancers = composeWithDevTools({
    trace: true,
    traceLimit: 20
})

function configureStore () {
    const store = createStore(
        rootReducer,
        undefined,
        process.env.NODE_ENV !== 'production'
            ? composeEnhancers(
                applyMiddleware(...middleware)
            )
            : applyMiddleware(...middleware)
    )
    sagaMiddleware.run(watcher)
    return store
}

export const store = configureStore()
