import React from 'react'

import { 
  GridContainer
} from './mui/shoppingCartMui'
import ShoppingCartList from '../shoppingCart/ShoppingCartList'
import Summary from '../shoppingCart/Summary'

const ShoppingCart = ({ 
  shoppingCartItems, 
  shoppingCartSubtotal, 
  onTrashClick, 
  onQuantityChange }) => 
    <GridContainer>
      <ShoppingCartList 
        shoppingCartItems={shoppingCartItems}
        onTrashClick={onTrashClick}
        onQuantityChange={onQuantityChange}
      />
      <Summary shoppingCartSubtotal={shoppingCartSubtotal}/>
    </GridContainer>

export default ShoppingCart
