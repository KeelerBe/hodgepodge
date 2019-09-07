import React from 'react'
import GridMui from '@material-ui/core/Grid'
import ButtonMui from '@material-ui/core/Button'

const styles = {
  Button: {
    textTransform: 'none',
    letterSpacing: 1,
  },
}

export const linkStyles = {
  style: {
    marginLeft: 20,
    textDecoration: 'none'
  },
}

export const GridItem = ({ children }) =>
  <GridMui item>
    {children}
  </GridMui>

export const Button = ({ children }) =>
  <ButtonMui style={styles.Button}>
    {children}
  </ButtonMui>