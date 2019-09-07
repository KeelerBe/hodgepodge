import React from 'react'
import GridMui from '@material-ui/core/Grid'
import TypographyMui from '@material-ui/core/Typography'
import Input from '@material-ui/core/Input'
import Icon from '@material-ui/core/Icon'

const styles = {
  GridItem1: {
    marginLeft: 20
  },
  GridItem2: {
    marginLeft: 25,
    maxWidth: '21.5%'
  },
  GridItem3: {
    paddingLeft: 0
  },
  GridItem4: {
    position: 'absolute',
    right: 15,
    color: '#ccc'
  },
  NumberInput: {
    width: 31,
  },
  Typography1: {
    fontWeight: 500,
    letterSpacing: 1
  }
}

export const GridItem1 = ({ children }) =>
  <GridMui item 
    style={styles.GridItem1}
    xs={5} 
  >
    {children}
  </GridMui>

export const GridItem2 = ({ children }) =>
  <GridMui  item
    style={styles.GridItem2}
    xs={3} 
  >
    {children}
  </GridMui>

export const GridItem3 = ({ children }) =>
  <GridMui item
    style={styles.GridItem3}
    xs={3} 
  >
    {children}
  </GridMui>

export const GridItem4 = ({ children }) =>
  <GridMui item
    style={styles.GridItem4}
    xs={1} 
  >
    {children}
  </GridMui>

export const Typography1 = ({ children }) =>
  <TypographyMui
    style={styles.Typography1}
    variant="subheading" 
  >
    {children}
  </TypographyMui>

export const Typography2 = ({ children }) =>
  <TypographyMui
    variant="subheading" 
  >
    {children}
  </TypographyMui>

export const NumberInput = (props) =>
  <Input
    style={styles.NumberInput}
    inputProps={{min: 1}}
    // disableUnderline
    {...props}
  />

export const DeleteIcon = (props) => 
  <Icon {...props}>
    delete
  </Icon>
