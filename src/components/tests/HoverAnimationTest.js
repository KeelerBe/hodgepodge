import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import TypographyMui from '@material-ui/core/Typography'

const styles = {
  typography: {
    marginTop: 50,
    marginLeft: 50
  }
}

export const Typography = withStyles({ 
  root: {
    '&:hover': {
      color: 'orange',
      animation: 'pulse 0.5s'
    }
  }
})(({ children, ...props }) => (
  <TypographyMui  
    style={styles.typography} 
    variant="title"
    {...props}
  >
    {children}
  </TypographyMui>
))

// const Test = () => 
//   <Typography>
//     Testing
//   </Typography>

// export default Test
