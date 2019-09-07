import React from 'react'
import { 
  GridContainer,
  GridItem,
  Typography2
} from './mui/stylesMui'
import NumberFormat from 'react-number-format'
import { penniesToString } from '../../../utils'

const Subtotal = ({ shoppingCartSubtotal }) => 
  <GridContainer>
    <GridItem>
      <Typography2>
        Subtotal:
      </Typography2>
    </GridItem>
    <GridItem>
      <Typography2>
        <NumberFormat 
          value={penniesToString(shoppingCartSubtotal)} 
          displayType="text" 
          thousandSeparator={true} 
          prefix={'$'}
        />  
      </Typography2>
    </GridItem>
  </GridContainer> 

export default Subtotal
