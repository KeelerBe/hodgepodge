import React, { Fragment } from 'react'
import {
  GridItem,
  Paper,
  Typography1,
  GridContainer
} from './mui/summaryMui'
import CheckoutButton from './CheckoutButton'
import CreditsAvailable from './summary/CreditsAvailable'
import CreditsApplied from './summary/CreditsApplied'
import Purchases from './summary/Purchases'
import Subtotal from './summary/Subtotal'

const Summary = ({ shoppingCartSubtotal }) => 
  <Fragment>
    <GridItem>
    <Paper>
      <Typography1>
        Summary
      </Typography1>

      <GridContainer>
        <CreditsAvailable/>
        <CreditsApplied/>
        <Purchases shoppingCartSubtotal={shoppingCartSubtotal}/>
        <Subtotal shoppingCartSubtotal={shoppingCartSubtotal}/>
      </GridContainer>
      
      <CheckoutButton/>
    </Paper>
    </GridItem>
  </Fragment>

export default Summary