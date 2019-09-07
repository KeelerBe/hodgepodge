import React from 'react'
import GridMui from '@material-ui/core/Grid'
import ButtonMui from '@material-ui/core/Button'
import TypographyMui from '@material-ui/core/Typography'

const styles = {
  wrapper: {
    marginTop: 30
  },
  Button: {
    textTransform: 'none',
    letterSpacing: 1,
  },
  Typography: {
    marginBottom: 20,
    fontSize: 20,
    letterSpacing: 1
  },
}

export const linkStyles = {
  style: {
    textDecoration: 'none'
  },
}

export const GridContainer = ({ children }) =>
  <GridMui item
    style={styles.wrapper}
  >
    <GridMui container
      direction="column" 
      alignItems="flex-start"
    >
      {children}
    </GridMui>
  </GridMui>

export const GridItem = ({ children }) =>
  <GridMui item>
    {children}
  </GridMui>

export const Typography = ({ children }) =>
  <TypographyMui style={styles.Typography}>
    {children}
  </TypographyMui>

export const Button = ({ children }) =>
  <ButtonMui 
    style={styles.Button}
    variant="raised" 
    color="secondary"
  >
    {children}
  </ButtonMui>