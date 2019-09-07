import React from 'react'
import TypographyMui from '@material-ui/core/Typography'

const styles = {
  Typography: {
    marginTop: 20,
    fontSize: 18,
    color: '#ecf0f1',
    letterSpacing: 1,
  }
}

export const linkStyles = {
  style: {
    textDecoration: 'none'
  },
}

export const typographyHoverStyles = {
  animate: {
    '&:hover': {
      animation: 'pulse 0.5s',
    }
  }
}

export const Typography = ({ children, ...props }) =>
  <TypographyMui 
    style={styles.Typography}
    {...props}
  >
    {children}
  </TypographyMui>