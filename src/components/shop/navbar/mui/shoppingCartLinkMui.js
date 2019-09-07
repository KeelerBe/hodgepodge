import React from 'react'
import GridMui from '@material-ui/core/Grid'
import TypographyMui from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon'

const styles = {
  Typography: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 500,
    letterSpacing: 0.5,
    marginRight: 5,
    paddingTop: 3
  },
  Icon: {
    marginRight: 20
  },
}

export const linkStyles = {
  style: {
    color: '#fff',
    textDecoration: 'none'
  }
}

export const gridHoverStyles = {
  animation: {
    '&:hover': {
      animation: 'pulse 0.5s'
    }
  }
}

export const GridContainer = ({ children, ...props }) =>
  <GridMui container 
    {...props}
  >
    {children}
  </GridMui>

export const Typography = ({ children }) =>
  <TypographyMui 
    style={styles.Typography}
    variant="subheading"
  >
    {children}
  </TypographyMui>

export const ShoppingCartIcon = () =>
  <Icon style={styles.Icon}>
    shopping_cart
  </Icon>

