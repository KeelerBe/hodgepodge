import React from 'react'
import { Link } from 'react-router-dom'
import {
  GridItem,
  Button,
  linkStyles
} from './mui/storeForgetPasswordLinkMui'

const StoreForgetPasswordLink = () => 
  <GridItem>
    <Link {...linkStyles} to="/pw-forget">
      <Button>
        Forgot password?
      </Button>
    </Link>
  </GridItem>

export default StoreForgetPasswordLink
