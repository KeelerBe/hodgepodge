import React from 'react'
import GridMui from '@material-ui/core/Grid'
import PaperMui from '@material-ui/core/Paper'
import TypographyMui from '@material-ui/core/Typography'

const styles = {
  div: {
    minHeight: 330,
    marginBottom: 80,
    marginLeft: 20,
    marginRight: 20
  },
  Paper: {
    width: 350,
    height: 350,
    marginTop: 60,
    padding: 15,
    position: 'relative'
  },
  Typography1: {
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

export const Typography1 = ({ children }) =>
  <TypographyMui 
    style={styles.Typography1}
    variant="headline"
  >
    {children}
  </TypographyMui>

export const GridContainer = ({ children }) => 
  <div style={styles.div}>
    <GridMui container
      direction="column"
    >
      {children}
    </GridMui>
  </div>