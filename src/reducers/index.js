import { clickReducer } from './clickReducer'
import { itemsListReducer } from './itemsListReducer'
import { otherReducer } from './otherReducer'
import { combineReducers } from 'redux'

export const Reducers = combineReducers({
  clickState: clickReducer,
  itemsListState: itemsListReducer,
  otherState: otherReducer
})