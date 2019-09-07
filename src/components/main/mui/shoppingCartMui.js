import React from 'react'
import GridMui from '@material-ui/core/Grid'

const styles = {
  GridContainer: {
    marginTop: 30,
    marginBottom: 20,
    paddingLeft: 20,
    paddingRight: 20
  }
}

export const GridContainer = ({ children }) =>
  <GridMui container 
    style={styles.GridContainer}
    justify="space-around"
  > 
    {children}
  </GridMui>


     