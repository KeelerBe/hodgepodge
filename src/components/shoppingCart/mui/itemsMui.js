import React from 'react'
import GridMui from '@material-ui/core/Grid'
import DividerMui from '@material-ui/core/Divider'

const styles = {
  root: {
    minHeight: 330,
    marginBottom: 80,
  },
  Divider: {
    marginBottom: 20
  }
}

export const GridContainer = ({ children }) =>
  <div style={styles.root}>
    <GridMui container
      direction="column"
    >
      {children}
    </GridMui>
  </div>

export const Divider = () => 
  <DividerMui style={styles.Divider}/>