import React from 'react'
import TypographyMui from '@material-ui/core/Typography'

const styles = {
  Div: {
    backgroundColor: '#f2f2f2',
    height: '100vh',
    width: '100vw',
  },
  Typography: {
    paddingTop: 50,
    paddingLeft: 190,
    fontSize: 40,
    fontWeight: 300,
    color: '#7f8c8d',
    letterSpacing: 1.5
  }
}

export const Div = ({ children }) =>
  <div style={styles.Div}>
    {children}
  </div>
 
export const Typography = ({ children }) =>
  <TypographyMui style={styles.Typography}>
    {children}
  </TypographyMui>