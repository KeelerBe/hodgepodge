import React from 'react'
import GridMui from '@material-ui/core/Grid'
import TypographyMui from '@material-ui/core/Typography'

const styles = {
  Typography: {
    color: '#666',
    fontSize: 20,
    letterSpacing: 1,
    marginLeft: 20,
    marginRight: 20,
  }
}

export const GridItem1 = ({ children }) =>
  <GridMui item 
    xs={5}
  >
    {children}
  </GridMui>

export const GridItem2 = ({ children }) =>
  <GridMui item 
    xs={3}
  >
    {children}
  </GridMui>

export const GridItem3 = ({ children }) =>
  <GridMui item 
    xs={1}
  >
    {children}
  </GridMui>

export const Typography = ({ children }) =>
  <TypographyMui
    variant="title" 
    style={styles.Typography}
  >
    {children}
  </TypographyMui>





