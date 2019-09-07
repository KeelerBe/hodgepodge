import React from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  linkStyles
} from './mui/adminForgetPasswordLinkMui'

const AdminForgetPasswordLink = () => 
  <Link {...linkStyles} to="/pw-forget">
    <Button>
      Forgot password?
    </Button>
  </Link>

export default AdminForgetPasswordLink
