import React from 'react'
import GridMui from '@material-ui/core/Grid'
import PaperMui from '@material-ui/core/Paper'
import TypographyMui from '@material-ui/core/Typography'

const styles = {
  Paper: {
    width: 750,
    minHeight: 590,
    marginTop: 60,
    padding: 15,
    position: 'relative'
  },
  Typography: {
    marginTop: 20,
    marginBottom: 50,
    marginLeft: 20,
    color: '#333',
    fontSize: 30,
    fontWeight: 500,
    letterSpacing: 1,
  }
}

export const GridItem = ({ children }) => 
  <GridMui item>
    {children}
  </GridMui>

export const Paper = ({ children }) =>
  <PaperMui style={styles.Paper}>
    {children}
  </PaperMui>

export const Typography = ({ children }) =>
  <TypographyMui 
    style={styles.Typography}
    variant="headline"
  >
    {children}
  </TypographyMui>