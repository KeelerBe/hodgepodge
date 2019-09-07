import React from 'react'
import { Link } from 'react-router-dom'
import {
  GridContainer,
  GridItem,
  Button,
  Typography,
  linkStyles
} from './mui/newCustomerMui'

const NewCustomer = () => 
  <GridContainer>
    <GridItem>
      <Typography>
        New customer?
      </Typography>
    </GridItem>
    <GridItem>
        <Link {...linkStyles} to="/signup">
          <Button>
            Register
          </Button>
        </Link>
      </GridItem>
  </GridContainer>

export default NewCustomer
