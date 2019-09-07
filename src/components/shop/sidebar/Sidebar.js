import React from 'react'
import { 
  List, 
  ListItemText1,
  ListItemText2,
  Hidden,
  Drawer
} from './mui/sidebarMui'

const drawer = 
  <List>
    <ListItemText1 primary="Placeholder Title"/>
    <ListItemText2 secondary="Category 1"/>
    <ListItemText2 secondary="Category 2"/>
    <ListItemText2 secondary="Category 3"/>
    <ListItemText2 secondary="Category 4"/>
    <ListItemText2 secondary="Category 5"/>
    <ListItemText2 secondary="Category 6"/>
    <ListItemText2 secondary="Category 7"/>
    <ListItemText2 secondary="Category 8"/>
    <ListItemText2 secondary="Category 9"/>
    <ListItemText2 secondary="Category 10"/>
    <ListItemText2 secondary="Category 11"/>
    <ListItemText2 secondary="Category 12"/>
  </List>

const Sidebar = () => 
  <Hidden>
    <Drawer>
      {drawer}
    </Drawer>
  </Hidden>

export default Sidebar