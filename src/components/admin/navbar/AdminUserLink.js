import React, { Fragment, Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Menu, MenuItem } from '@material-ui/core/'
import {
  Typography,
  UserIcon,
  userIconStyles
} from './mui/adminUserLinkMui'

class UserLink extends Component {
  state = {
    anchorEl: null
  }

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleMenuClose = () => {
    this.setState({ anchorEl: null })
    this.handleMobileMenuClose()
  }

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget })
  }

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null })
  }

  render() {
    const { anchorEl } = this.state
    const { classes } = this.props
    const isMenuOpen = Boolean(anchorEl)

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleClose}>Profile</MenuItem>
        <MenuItem onClick={this.handleClose}>My account</MenuItem>
        <MenuItem onClick={this.handleClose}>Sign Out</MenuItem>
      </Menu>
    )
    
    return (
      <Fragment>
        <Typography>
          Toys R Us
        </Typography>
        <UserIcon
          className={classes.UserIcon}
          aria-owns={isMenuOpen ? 'material-appbar' : null}
          aria-haspopup="true"
          onClick={this.handleProfileMenuOpen}
        />
        {renderMenu}
      </Fragment>
    )
  }
}

export default withStyles(userIconStyles, { withTheme: true })(UserLink)