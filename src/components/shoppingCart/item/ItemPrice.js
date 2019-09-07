import React from 'react'
import {
  GridItem3,
  Typography2
} from './mui/itemStylesMui'
import NumberFormat from 'react-number-format'
import { penniesToString } from '../../../utils'

const ItemPrice = ({ total }) => 
  <GridItem3>
    <Typography2>
      <NumberFormat 
        value={penniesToString(total)} 
        displayType="text" 
        thousandSeparator={true} 
        prefix={'$'}
      />   
    </Typography2>
  </GridItem3>

export default ItemPrice
