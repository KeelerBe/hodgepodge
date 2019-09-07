import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_QUANTITY_PRICE_TOTAL
} from '../actions/types'
import item from './itemReducer'

const INITIAL_STATE = {
  subtotal: 0,
  items: []
}

const calculateSubtotal = arr => {
  return arr.reduce((sum, item) => sum + item.total, 0)
}

export default (state = INITIAL_STATE, action) => {

  switch(action.type) {
    case ADD_TO_CART: {
      if (state.items.find(item => item.id === action.id)) {
        return state
      }

      // add new item to items before getting subtotal
      const newItems = [
        ...state.items,
        item(undefined, action)
      ]

      return { 
        items: newItems,
        subtotal: calculateSubtotal(newItems)
      }
    }
    
    case REMOVE_FROM_CART: {
      const newItems = state.items.filter(item => 
        item.id !== action.id 
      )
      
      return {
        items: newItems,
        subtotal: calculateSubtotal(newItems)
      }
    }

    case UPDATE_QUANTITY_PRICE_TOTAL: {
      const newItems = state.items.map(i => 
        item(i, action)
      )
      
      return {
        items: newItems,
        subtotal: calculateSubtotal(newItems)
      }
    }

    default: 
      return state
  }
}
