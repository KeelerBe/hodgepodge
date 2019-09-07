import { combineReducers } from 'redux'
import productsReducer from './productsReducer'
import shoppingCartReducer from './shoppingCartReducer'
import authUserReducer from './authUserReducer'

export default combineReducers({
  products: productsReducer,
  shoppingCart: shoppingCartReducer,
  authUser: authUserReducer
})