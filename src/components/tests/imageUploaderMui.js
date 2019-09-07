import React from 'react'
import GridMui from '@material-ui/core/Grid'

const styles = {
  Input: {
    marginLeft: 'auto',
    marginRight: 'auto'
  },
}

export const Input = (props) =>
  <input 
    style={styles.Input}
    {...props}
  />

export const Img = (props) =>
  <img 
    style={styles.Img}
    alt=""
    height={150}
    width={150}
    {...props}
  />

export const GridContainer = ({ children }) =>
  <GridMui container
    direction="column-reverse"
    justify="flex-end"
    alignItems="flex-start"
  >
    {children}
  </GridMui>

export const GridItem = ({ children }) =>
  <GridMui item>
    {children}
  </GridMui>