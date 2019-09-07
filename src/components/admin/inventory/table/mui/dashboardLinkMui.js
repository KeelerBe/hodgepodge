import React from 'react'
import TypographyMui from '@material-ui/core/Typography'

const styles = {
  Typography: {
    paddingTop: 20,
    marginLeft: 20,
    fontSize: 18,
    color: '#433e44',
    letterSpacing: 1,
    cursor: 'pointer',
  },
  div: {
    width: 250
  }
}

export const typographyHoverStyles = {
  animate: {
    '&:hover': {
      animation: 'pulse 0.5s',
    }
  }
}

export const Typography = ({ children, ...props }) => 
  <div style={styles.div}>
    <TypographyMui
      style={styles.Typography}
      {...props}
    >
      {children}
    </TypographyMui>
  </div>

