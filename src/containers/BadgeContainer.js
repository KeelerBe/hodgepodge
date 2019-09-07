import React from 'react'
import { connect } from 'react-redux'

import ShoppingCartBadge from '../components/shop/navbar/ShoppingCartBadge'

const BadgeContainer = ({ shoppingCartItems }) => (
  <ShoppingCartBadge
    numOfItems={shoppingCartItems.length}
  />
)

const mapStateToProps = ({ shoppingCart }) => {
  return {
    shoppingCartItems: shoppingCart.items
  }
}

export default connect(mapStateToProps)(BadgeContainer)
