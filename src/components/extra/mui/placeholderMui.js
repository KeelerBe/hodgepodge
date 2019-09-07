import React from 'react'
import GridMui from '@material-ui/core/Grid'
import PaperMui from '@material-ui/core/Paper'
import TypographyMui from '@material-ui/core/Typography'
import Background from '../../../assets/images/leo-fosdal-113874-unsplash.jpg'

const styles = {
  div: {
    height: '100vh',
    width: '100%vw',
    backgroundImage:  `url(${Background})`,
    backgroundSize: 'cover',
    paddingTop: 150
  },
  Paper: {
    margin: 'auto',
    height: 280,
    width: 430,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.5)'
  },
  Typography1: {
    color: '#433e44',
    fontSize: 40,
    fontWeight: 300,
    letterSpacing: 5,
    textAlign: 'center',
    paddingTop: 55
  },
  Typography2: {
    color: '#433e44',
    fontSize: 40,
    fontWeight: 300,
    letterSpacing: 5,
    textAlign: 'center',
  },
  Typography3: {
    color: '#433e44',
    letterSpacing: 1,
    cursor: 'pointer',
    paddingTop: 30
  }
}

export const typography2HoverStyles = {
  animate: {
    '&:hover': {
      animation: 'pulse 0.5s',
    }
  }
}

export const Paper = ({ children }) =>
  <div style={styles.div}>
    <PaperMui
      style={styles.Paper}
      elevation={0}
    >
      {children}
    </PaperMui>
  </div>

export const GridContainer = ({ children }) =>
  <GridMui container
    justify="center" 
    alignContent="center" 
    direction="column"
  >
    {children}
  </GridMui>

export const GridItem = ({ children }) =>
  <GridMui item>
    {children}
  </GridMui>

export const Typography1 = ({ children }) =>
  <TypographyMui style={styles.Typography1}>
    {children}
  </TypographyMui>

export const Typography2 = ({ children }) =>
  <TypographyMui style={styles.Typography2}>
    {children}
  </TypographyMui>

export const Typography3 = ({ children, ...props }) =>
  <TypographyMui 
    style={styles.Typography3}
    align="center"
    {...props}
  >
    {children}
  </TypographyMui>