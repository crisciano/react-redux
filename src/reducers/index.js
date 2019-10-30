import { combineReducers } from 'redux'
// reducers list
import { clickReducer } from './clickReducer'
import { itemsListReducer } from './itemsListReducer'

export const Reducers = combineReducers({
  clickState: clickReducer,
  itemsListState: itemsListReducer
})