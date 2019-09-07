import React from 'react'
import AppBarMui from '@material-ui/core/AppBar'
import ToolbarMui from '@material-ui/core/Toolbar'
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles'
import GridMui from '@material-ui/core/Grid'
import { adminTheme } from '../../../../styles/theme'

const styles = {
  root: {
    width: '100%',
  },
  Div: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
 
}

const sectionDesktopStyles = theme => ({
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  }
})

export const AppBar = ({ children }) => 
  <MuiThemeProvider theme={adminTheme}>
    <div style={styles.root}>
      <AppBarMui position="fixed">
        {children}
      </AppBarMui>
    </div>
  </MuiThemeProvider>

export const Toolbar = ({ children }) =>
  <ToolbarMui>
    {children}
  </ToolbarMui>

export const Div = () =>
  <div style={styles.Div}/>

export const GridContainer = withStyles(sectionDesktopStyles)(({ classes, children }) =>
  <div className={classes.sectionDesktop}>
    <GridMui container 
      alignItems="center"
    >
      {children}
    </GridMui>
  </div>
)

