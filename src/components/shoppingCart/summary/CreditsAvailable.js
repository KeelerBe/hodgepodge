import React from 'react'
import { 
  GridContainer,
  GridItem,
  Typography1
} from './mui/stylesMui'

const CreditsAvailable = () => 
    <GridContainer>
      <GridItem>
        <Typography1>
          Credits available:
        </Typography1>
      </GridItem>
      <GridItem>
        <Typography1>
          0
        </Typography1>
      </GridItem>
    </GridContainer>

export default CreditsAvailable
