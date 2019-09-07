import React from 'react'
import {
  AppBar,
  Toolbar,
  Div,
  GridContainer
} from './mui/adminNavbarMui'
import AdminLogo from './AdminLogo'
import AdminUserLink from './AdminUserLink'
import HomeLink from './HomeLink'

const AdminNavbar = ({ classes }) =>
  <AppBar>
    <Toolbar>
      <AdminLogo/>
      <Div/>
      <GridContainer>
        <HomeLink/>
        <AdminUserLink/>
      </GridContainer>
      
      {/* <div className={classes.sectionMobile}>
        <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
          <MoreIcon />
        </IconButton>
      </div> */}

    </Toolbar>
  </AppBar>

export default AdminNavbar