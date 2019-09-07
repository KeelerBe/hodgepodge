import React from 'react'
import GridMui from '@material-ui/core/Grid'
import PaperMui from '@material-ui/core/Paper'
import IconMui from '@material-ui/core/Icon'

const styles = {
  Paper: {
    height: 280,
    width: 280,
    borderRadius: 20,
    backgroundColor: '#2c3e50'
  },
  Icon: {
    marginTop: 50,
    fontSize: 100,
    color: '#80cbc4'
  }
}

export const GridItem = ({ children }) =>
  <GridMui item>
    {children}
  </GridMui>

export const GridContainer = ({ children }) =>
  <GridMui container
    alignItems="center" 
    direction="column"
  >
    {children}
  </GridMui>

export const Paper = ({ children }) =>
  <PaperMui
    style={styles.Paper}
    elevation={1}
  >
    {children}
  </PaperMui>

export const Icon = ({ children }) =>
  <IconMui style={styles.Icon}>
    {children}
  </IconMui>