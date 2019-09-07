import React from 'react'
import ButtonMui from '@material-ui/core/Button'

const styles = {
  Button: {
    marginLeft: 5,
    color: '#fff',
    textTransform: 'none',
    letterSpacing: 1,
  },
}

export const linkStyles = {
  style: {
    textDecoration: 'none',
  },
}

export const Button = ({ children }) =>
  <ButtonMui style={styles.Button}>
    {children}
  </ButtonMui>

