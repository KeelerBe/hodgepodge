import React from 'react'
import TypographyMui from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon'

const styles = {
  Typography: {
    fontSize: 17,
    fontWeight: 500,
    color: '#fff',
    letterSpacing: 0.5,
    marginRight: 7,
    paddingTop: 3
  }
}

export const userIconStyles = theme => ({
  UserIcon: {
    marginRight: 20,
    '&:hover': {
      color: '#fafafa',
      animation: 'swing 0.5s'
    }
  },
})

export const Typography = ({ children }) =>
  <TypographyMui 
    style={styles.Typography}
    variant="subheading"
  >
    {children}
  </TypographyMui>

export const UserIcon = (props) =>
  <Icon
    color="inherit"
    {...props}
    >
    account_circle
  </Icon>