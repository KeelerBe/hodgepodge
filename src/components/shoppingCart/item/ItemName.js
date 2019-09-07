import React from 'react'
import {
  GridItem1,
  Typography1
} from './mui/itemStylesMui'

const ItemName = ({ name }) =>
  <GridItem1>
    <Typography1>
      {name}
    </Typography1>
  </GridItem1>

export default ItemName
