import { UPDATE_ITEMS }  from '../actions/actionsTypes'

export const clickButton = value =>({
  type: 'CLICK_UPDATE_VALUE',
  newValue: value
})

export const listItems = value =>({
  type: UPDATE_ITEMS,
  items: value
})