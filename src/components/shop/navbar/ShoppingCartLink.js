import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import { 
  GridContainer, 
  Typography,
  ShoppingCartIcon,
  linkStyles,
  gridHoverStyles 
} from './mui/shoppingCartLinkMui'
import BadgeContainer from '../../../containers/BadgeContainer'

const ShoppingCartLink = ({ classes }) => 
  <Link {...linkStyles} to="/shopping-cart">
    <GridContainer className={classes.animation}>
      <Typography>
        Cart
      </Typography>
      <ShoppingCartIcon/>
      <BadgeContainer/>
    </GridContainer>
  </Link>

ShoppingCartLink.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(gridHoverStyles)(ShoppingCartLink)