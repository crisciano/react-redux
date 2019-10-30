import { UPDATE_ITEMS } from '../actions/actionsTypes'

const initialState ={ 
  items : []
}

export const itemsListReducer = ( state = initialState, action) => {
  switch (action.type){
    case UPDATE_ITEMS:
      return {
        ...state,
        items: action.items
      }
    default: 
      return state;
  }
}