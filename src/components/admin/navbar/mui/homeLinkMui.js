import React from 'react'
import TypographyMui from '@material-ui/core/Typography'
import GridMui from '@material-ui/core/Grid'
import Icon from '@material-ui/core/Icon'

const styles = {
  Icon: {
    marginRight: 20,
  },
  Typography: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 500,
    letterSpacing: 0.5,
    marginRight: 5,
    paddingTop: 3
  },
  Tooltip: {
    right: 200
  }
}

export const linkStyles = {
  style: {
    color: '#fff',
    textDecoration: 'none',
  }
}

export const gridHoverStyles = {
  animate: {
    '&:hover': {
      animation: 'pulse 0.5s',
    }
  }
}

export const GridContainer = ({ children, ...props }) =>
  <GridMui container
    {...props}
  >
    {children}
  </GridMui>

export const StoreIcon = () => 
  <Icon style={styles.Icon}>
    store
  </Icon>

export const Typography = ({ children }) => 
  <TypographyMui  
    style={styles.Typography}
    variant="subheading"
  >
    {children}
  </TypographyMui>
