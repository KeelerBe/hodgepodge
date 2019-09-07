import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import ListMui from '@material-ui/core/List'
import ListItemTextMui from '@material-ui/core/ListItemText'
import HiddenMui from '@material-ui/core/Hidden'
import DrawerMui from '@material-ui/core/Drawer'

const drawerWidth = 240
const styles1 = theme => ({
  drawerPaper: {
    height: 'auto',
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'fixed',
      top: 64,
      zIndex: 1000,
      flexGrow: 1
    },
  }
})

const styles2 = {
  List: {
    marginBottom: 40
  },
  ListItem1: {
    marginLeft: 20,
    marginTop: 40,
    marginBottom: 20
  },
  ListItem2: {
    marginLeft: 20,
    marginBottom: 5
  }
}

export const List = ({ children }) =>
  <div>
    <Divider/>
      <ListMui style={styles2.List}>
        {children}
      </ListMui>
    <Divider/>
  </div>

export const ListItemText1 = ({ children, ...props }) =>
  <ListItemTextMui
    style={styles2.ListItem1}
    {...props}
  />

export const ListItemText2 = ({ children, ...props }) =>
  <ListItemTextMui
    style={styles2.ListItem2}
    {...props}
  />

export const Hidden = ({ children }) =>
  <HiddenMui smDown implementation="css">
    {children}
  </HiddenMui>

export const Drawer = withStyles(styles1, { withTheme: true })(({ classes, children }) =>
  <DrawerMui 
    variant="permanent" 
    open
    classes={{
      paper: classes.drawerPaper,
    }}
  >
    {children}
  </DrawerMui>
)
