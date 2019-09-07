import React from 'react'
import { connect } from 'react-redux'

import * as actionCreators from '../actions/shoppingCart'
import ShoppingCart from '../components/main/ShoppingCart'

const ShoppingCartContainer = ({ 
  shoppingCartItems, 
  shoppingCartSubtotal, 
  removeFromCart, 
  updateQuantityPriceTotal }) => {

  return (
    <ShoppingCart
      shoppingCartItems={shoppingCartItems}
      shoppingCartSubtotal={shoppingCartSubtotal}
      onTrashClick={removeFromCart}
      onQuantityChange={updateQuantityPriceTotal}
    />
  )
}

const mapStateToProps = ({ shoppingCart }) => {
  return {
    shoppingCartItems: shoppingCart.items,
    shoppingCartSubtotal: shoppingCart.subtotal
  }
}

export default connect(mapStateToProps, actionCreators)(ShoppingCartContainer)