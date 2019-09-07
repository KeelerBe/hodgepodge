import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { 
  GridContainer,
  StoreIcon, 
  Typography,
  linkStyles, 
  gridHoverStyles 
} from './mui/adminLinkMui'

const AdminLink = ({ classes, pathName }) => 
  <Link {...linkStyles} to={pathName}>
    <GridContainer className={classes.animate}>
      <Typography>
        Merchants
      </Typography>
      <StoreIcon />
    </GridContainer>
  </Link>


AdminLink.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(gridHoverStyles)(AdminLink)