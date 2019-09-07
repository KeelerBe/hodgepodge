import React from 'react'
import TypographyMui from '@material-ui/core/Typography'

const styles = {
  Div: {
    paddingTop: 120,
    backgroundColor: '#f2f2f2',
    height: '100vh',
    width: '100vw'
  },
  Typography: {
    fontSize: 40,
    fontWeight: 500,
    color: '#7f8c8d',
    letterSpacing: 1.5
  }
}

export const Div = ({ children }) =>
  <div style={styles.Div}>
    {children}
  </div>

export const Typography = ({ children }) =>
  <TypographyMui 
    style={styles.Typography} 
    align="center"
  >
    {children}
  </TypographyMui>

