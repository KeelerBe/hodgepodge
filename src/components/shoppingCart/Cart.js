import React from 'react'
import EmptyCart from './EmptyCart'
import Items from './Items'

const Cart = ({ 
  shoppingCartItems, 
  onTrashClick, 
  onQuantityChange }) => {
    
  if (shoppingCartItems.length === 0) {
    return <EmptyCart/>
  }

  return (
    <Items
      shoppingCartItems={shoppingCartItems}
      onTrashClick={onTrashClick}
      onQuantityChange={onQuantityChange}
    />
  )
}

export default Cart