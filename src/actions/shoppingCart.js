// import database from '../firebase/firebase'
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_QUANTITY_PRICE_TOTAL
} from './types'

export const addToCart = ({ id, name, price }) => ({
  type: ADD_TO_CART,
  id,
  name,
  price
})

// export const startAddToCart = () => {
//   return dispatch => {
//     console.log(database)
//     dispatch(addToCart)
//   }
// }

export const removeFromCart = id => ({
  type: REMOVE_FROM_CART,
  id
})

export const updateQuantityPriceTotal = (id, quantity) => ({
  type: UPDATE_QUANTITY_PRICE_TOTAL,
  id,
  quantity
})