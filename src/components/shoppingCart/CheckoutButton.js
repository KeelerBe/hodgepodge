import React from 'react'
import { Link } from 'react-router-dom'
import {
  Div,
  EnabledButton,
  DisabledButton,
  linkStyles
} from './mui/checkoutButtonMui'

const renderEnabledButton = () => 
  <Link {...linkStyles} to="/payments">
    <EnabledButton>
      Checkout
    </EnabledButton>
  </Link>

const renderDisabledButton = () => 
  <DisabledButton>
    Checkout
  </DisabledButton>


const CheckoutButton = () => 
  <Div>
    { 
      true
        ? renderEnabledButton()
        : renderDisabledButton()
    }
  </Div>

export default CheckoutButton