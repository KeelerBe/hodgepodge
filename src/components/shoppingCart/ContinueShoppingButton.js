import React from 'react'
import { Link } from 'react-router-dom'
import {
  Div, 
  Button, 
  linkStyles
} from './mui/continueShoppingButtonMui'

const ContinueShoppingButton = () => (
  <Div>
    <Link {...linkStyles} to="/">
      <Button>
        Continue Shopping
      </Button>
    </Link>
  </Div>
)

export default ContinueShoppingButton