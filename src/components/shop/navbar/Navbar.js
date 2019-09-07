import React from 'react'
import LogoLink from './LogoLink'
import SearchBar from './SearchBar'
import AdminLinkContainer from '../../../containers/AdminLinkContainer'
import ShoppingCartLink from './ShoppingCartLink'
import UserLink from './UserLink'
import {
  AppBar,
  Toolbar,
  Div,
  GridContainer
} from './mui/navbarMui'

const Navbar = ({ classes }) =>
  <AppBar>
    <Toolbar>
      <LogoLink/>
      <SearchBar/>
      <Div/>
      <GridContainer>
        <UserLink/>
        <AdminLinkContainer/>
        <ShoppingCartLink/>
      </GridContainer>
      
      {/* <div className={classes.sectionMobile}>
        <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
          <MoreIcon />
        </IconButton>
      </div> */}

    </Toolbar>
  </AppBar>

export default Navbar