import React from 'react'
import {
  GridContainer,
  Divider
} from './mui/itemsMui'
import ItemsHeading from './items/ItemsHeading'
import Item from './Item'

const Items = ({ 
  shoppingCartItems, 
  onTrashClick, 
  onQuantityChange }) => 
    <GridContainer>
      <ItemsHeading/>
      <Divider/>
      {
        shoppingCartItems.map(item => (
          <Item 
            key={item.id}
            {...item}
            onTrashClick={() => onTrashClick(item.id)}
            onQuantityChange={onQuantityChange}
          />
        ))
      }
    </GridContainer>

export default Items