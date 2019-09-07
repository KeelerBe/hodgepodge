import React from 'react'
import {
  GridItem,
  GridContainer
} from './mui/itemMui'
import ItemName from './item/ItemName'
import ItemQuantity from './item/ItemQuantity'
import ItemPrice from './item/ItemPrice'
import ItemRemove from './item/ItemRemove'

const Item = ({ name, total, onTrashClick }) =>
  <GridItem>
    <GridContainer>
      <ItemName name={name}/>
      <ItemQuantity/>
      <ItemPrice total={total}/>
      <ItemRemove onClick={onTrashClick}/>
    </GridContainer>
  </GridItem>

export default Item