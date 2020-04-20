import { createStore } from 'redux'
import { asyncReducer } from './reducers'

export const store = createStore(asyncReducer)