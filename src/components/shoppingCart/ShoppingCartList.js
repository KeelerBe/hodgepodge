import React from 'react'
import {
  GridItem,
  Paper,
  Typography
} from './mui/shoppingCartListMui'
import Cart from '../shoppingCart/Cart'
import ContinueShoppingButton from './ContinueShoppingButton'

const ShoppingCartList = ({ shoppingCartItems, onTrashClick, onQuantityChange }) => 
  <GridItem>
    <Paper>
      <Typography>
        Shopping Cart
      </Typography>
      <Cart
        shoppingCartItems={shoppingCartItems}
        onTrashClick={onTrashClick}
        onQuantityChange={onQuantityChange}
      />
      <ContinueShoppingButton/>  
    </Paper> 
  </GridItem>

export default ShoppingCartList
