import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Typography, 
  linkStyles 
} from './mui/logoLinkMui'

const LogoLink = () => 
  <Link {...linkStyles} to="/">
    <Typography>
      HodgePodge
    </Typography>
  </Link>

export default LogoLink