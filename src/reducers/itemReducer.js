import { 
  ADD_TO_CART,
  UPDATE_QUANTITY_PRICE_TOTAL 
} from '../actions/types'

const INITIAL_ACTION = null

export default (state = INITIAL_ACTION, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        id: action.id,
        name: action.name,
        price: action.price,
        total: action.price,
        quantity: 1
      }

    case UPDATE_QUANTITY_PRICE_TOTAL:
      if (state.id !== action.id) {
        return state
      }

     return {
        ...state,
        quantity: action.quantity,
        total: state.price * action.quantity
      }

    default:
      return state
  }
}