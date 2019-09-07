import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import GridMui from '@material-ui/core/Grid'

const drawerWidth = 240
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    marginLeft: drawerWidth
  },
})

export const GridContainer = withStyles(styles, { withTheme: true })(({ classes, children }) =>
  <main className={classes.content}>
    <div className={classes.toolbar}/>
    <div className={classes.root}>
      <GridMui container spacing={24}>
        {children}
      </GridMui>
    </div>
  </main>
)

export const GridItem = ({ children, ...props }) =>
  <GridMui item {...props}>
    {children}
  </GridMui>