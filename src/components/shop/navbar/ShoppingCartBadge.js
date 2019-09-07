import React from 'react'
import {
  Badge
} from './mui/shoppingCartBadgeMui'

const ShoppingCartBadge = ({ numOfItems }) =>  
  <Badge badgeContent={numOfItems}/>

export default ShoppingCartBadge