import React from 'react'
import GridMui from '@material-ui/core/Grid'

const styles = {
  GridItem: {
    marginTop: 20,
  },
  GridContainer: {
    position: 'relative',
    maxHeight: 30
  },
}

export const GridItem = ({ children }) =>
  <GridMui item
    style={styles.GridItem}
  >
    {children}
  </GridMui>

export const GridContainer = ({ children }) =>
  <GridMui container
    style={styles.GridContainer}
  >
    {children}
  </GridMui>