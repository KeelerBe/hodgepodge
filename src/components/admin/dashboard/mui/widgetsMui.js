import React from 'react'
import GridMui from '@material-ui/core/Grid'

const styles = {
  div: {
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  GridContainer: {
    marginTop: 60
  }
}

export const GridContainer = ({ children }) =>
  <div style={styles.div}>
    <GridMui container
      style={styles.GridContainer}
      justify="space-around"
    >
      {children}
    </GridMui>
  </div>
