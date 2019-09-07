import React from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  linkStyles
} from './mui/adminSignUpLinkMui'

const AdminSignUpLink = () => 
  <Link {...linkStyles} to="/admin-signup">
    <Button>
      Sign up
    </Button>
  </Link>

export default AdminSignUpLink
