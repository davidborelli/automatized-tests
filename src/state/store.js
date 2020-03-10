import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSagas from './sagas/sagas'
import rootReducer from './ducks/index'

const sagaMiddleware = createSagaMiddleware()

const initializeStore = initialState => {
  const composeEnhancers =
    (typeof window !== 'undefined' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose

  const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))

  const store = createStore(rootReducer, initialState, enhancer)

  sagaMiddleware.run(rootSagas)

  return store
}

export default initializeStore
