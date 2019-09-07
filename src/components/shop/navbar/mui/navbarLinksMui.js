import React from 'react'
import GridMui from '@material-ui/core/Grid'

const styles = {
  GridItem2: {
    marginLeft: 55
  },
  GridItem3: {
    paddingTop: 20
  }
}

export const GridContainer1 = ({ children }) =>
  <GridMui container justify="space-between">
    {children}
  </GridMui>

export const GridContainer2 = ({ children }) =>
  <GridMui container>
    {children}
  </GridMui>

export const GridContainer3 = ({ children }) =>
  <GridMui container alignItems="flex-start">
    {children}
  </GridMui>

export const GridItem1 = ({ children }) =>
  <GridMui item>
    {children}
  </GridMui>

export const GridItem2 = ({ children }) =>
  <GridMui item style={styles.GridItem2}>
    {children}
  </GridMui>

export const GridItem3 = ({ children }) =>
  <GridMui item style={styles.GridItem3}>
    {children}
  </GridMui>