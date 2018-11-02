import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from 'reducers'
import thunk from 'redux-thunk'
import DevTools from '../devTools'
import logger from '../middleware/logger'


const enhancer = compose(
  applyMiddleware(thunk, logger),
  DevTools.instrument(),
)

export default function configureStore(initialstate) {
  return createStore(rootReducer, initialstate, enhancer)
}
