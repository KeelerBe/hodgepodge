import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import TypographyMui from '@material-ui/core/Typography'

const styles = theme => ({
  Typography: {
    letterSpacing: 1,
    marginLeft: 10,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
})

export const Typography = withStyles(styles, { withTheme: true })(({ classes, children }) =>
  <TypographyMui
    className={classes.Typography}
    variant="title"
    color="inherit" 
    noWrap 
  >
    {children}
  </TypographyMui>
)

