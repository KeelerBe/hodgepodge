import React from 'react'
import GridMui from '@material-ui/core/Grid'
import TypographyMui from '@material-ui/core/Typography'

const styles = {
  Typography2: {
    marginTop: 20,
    fontWeight: 500,
    fontSize: 20,
    letterSpacing: 1
  }
}

export const GridContainer = ({ children }) =>
  <GridMui container 
    justify="space-between"
  >
    {children}
  </GridMui>

export const GridItem = ({ children }) =>
  <GridMui item>
    {children}
  </GridMui>

export const Typography1 = ({ children }) =>
  <TypographyMui variant="subheading">
    {children}
  </TypographyMui>

export const Typography2 = ({ children }) =>
  <TypographyMui 
    style={styles.Typography2}
    variant="subheading"
  >
    {children}
  </TypographyMui>