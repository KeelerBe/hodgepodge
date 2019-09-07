import React from 'react'
import {
  GridItem4,
  DeleteIcon
} from './mui/itemStylesMui'

const ItemRemove = ({ onTrashClick }) => 
  <GridItem4>
    <DeleteIcon onClick={onTrashClick}/>
  </GridItem4>

export default ItemRemove
