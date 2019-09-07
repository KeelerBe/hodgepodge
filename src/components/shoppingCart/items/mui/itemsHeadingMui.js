import React from 'react'
import GridMui from '@material-ui/core/Grid'

export const GridItem = ({ children }) =>
  <GridMui item>
    {children}
  </GridMui>

export const GridContainer = ({ children }) =>
  <GridMui container>
    {children}
  </GridMui>