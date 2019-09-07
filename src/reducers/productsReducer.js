import {
  ADD_NEW_PRODUCT, 
  SET_PRODUCTS
} from '../actions/types'
import product from './productReducer'

const INITIAL_STATE = []

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return [
        ...action.products
      ]
    case ADD_NEW_PRODUCT: {
      console.log(state)
      return [
        ...state,
        product(undefined, action)
      ]
    }
    default: 
      return state
  }
}