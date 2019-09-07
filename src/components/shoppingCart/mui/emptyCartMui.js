import React from 'react'
import TypographyMui from '@material-ui/core/Typography'

const styles = {
  Typography: {
    paddingTop: 50,
    color: '#aaa',
    letterSpacing: 1.5,
    fontWeight: 500
  }
}

export const Typography = ({ children }) =>
  <TypographyMui 
    style={styles.Typography}
    variant="title" 
    align="center"
  >
    {children}
  </TypographyMui>

