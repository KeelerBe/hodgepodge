import React from 'react'
import { 
  GridContainer,
  GridItem,
  Typography1
} from './mui/stylesMui'
import NumberFormat from 'react-number-format'
import { penniesToString } from '../../../utils'

const Purchases = ({ shoppingCartSubtotal }) => 
  <GridContainer>
    <GridItem>
      <Typography1>
        Purchases:
      </Typography1>
    </GridItem>
    <GridItem>
      <Typography1>
        <NumberFormat 
          value={penniesToString(shoppingCartSubtotal)} 
          displayType="text" 
          thousandSeparator={true} 
          prefix={'$'}
        />  
      </Typography1>
    </GridItem>
  </GridContainer>

export default Purchases
