const initialState ={ 
  items : []
}

export const itemsListReducer = ( state = initialState, action) => {
  switch (action.type){
    case 'LIST_ITEMS':
      return {
        ...state,
        items: action.items
      }
    default: 
      return state;
  }
}