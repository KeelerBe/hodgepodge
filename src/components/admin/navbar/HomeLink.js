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
} from './mui/homeLinkMui'

const HomeLink = ({ classes }) => 
  <Link {...linkStyles} to="/">
    <GridContainer className={classes.animate}>
      <Typography>
        Go to HodgePodge.com
      </Typography>
      <StoreIcon />
    </GridContainer>
  </Link>


HomeLink.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(gridHoverStyles)(HomeLink)