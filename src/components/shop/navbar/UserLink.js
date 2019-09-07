import React, { Fragment, Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Menu, MenuItem } from '@material-ui/core/'
import {
  Typography,
  UserIcon,
  userIconStyles
} from './mui/userLinkMui'

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
          Hello, Keels!
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






// import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import { withStyles } from '@material-ui/core/styles'
// import classNames from 'classnames'
// import { Manager, Target, Popper } from 'react-popper'
// import { 
//   Icon,
//   Paper,
//   Typography,
//   Button,
//   Portal,
//   ClickAwayListener,
//   Collapse,
//   MenuList,
//   MenuItem
// } from '@material-ui/core'

// const styles = theme => ({
//   root: {
//     display: 'flex',
//   },
//   paper: {
//     marginRight: theme.spacing.unit * 2,
//   },
//   popperClose: {
//     pointerEvents: 'none',
//   },
//   text: {
//     marginRight: 8,
//     fontSize: 17,
//     color: '#fff',
//     textTransform: 'none',
//     letterSpacing: 1.5,
//     fontWeight: 500,
//     cursor: 'default'
//   },
//   icon: {
//     color: '#fff',
//     fontSize: 25,
//   },
//   button: {
//     marginRight: 7,
//     marginLeft: 7,
//     paddingLeft: 7,
//     paddingRight: 3
//   }
// })

// class UserLink extends Component {
//   state = {
//     open: false,
//   }

//   handleToggle = () => {
//     this.setState(state => ({ open: !state.open }))
//   }

//   handleClose = event => {
//     if (this.target2.contains(event.target)) {
//       return
//     }

//     this.setState({ open: false })
//   }

//   render() {
//     const { classes } = this.props
//     const { open } = this.state

//     return (
//       <Manager>
//         <Target>
//           <div
//             ref={node => {
//               this.target2 = node
//             }}
//           >
//             <Button
//               className={classes.button}
//               aria-owns={open ? 'menu-list-collapse' : null}
//               aria-haspopup="true"
//               onClick={this.handleToggle}
//             >
//               <Typography className={classes.text}>Sign in</Typography>
//               <Icon className={classes.icon}>
//                 person
//               </Icon>
//             </Button>
//           </div>
//         </Target>
//         <Portal>
//           <Popper
//             style={{ zIndex: 1500 }}
//             placement="bottom"
//             eventsEnabled={open}
//             className={classNames({ [classes.popperClose]: !open })}
//           >
//             <ClickAwayListener onClickAway={this.handleClose}>
//               <Collapse in={open} id="menu-list-collapse" style={{ transformOrigin: '0 0 0' }}>
//                 <Paper style={{ margin: 3 }}>
//                   <MenuList role="menu">
//                     <MenuItem onClick={this.handleClose}>Profile</MenuItem>
//                     <MenuItem onClick={this.handleClose}>My account</MenuItem>
//                     <MenuItem onClick={this.handleClose}>Logout</MenuItem>
//                   </MenuList>
//                 </Paper>
//               </Collapse>
//             </ClickAwayListener>
//           </Popper>
//         </Portal>
//       </Manager>
//     )
//   }
// }

// UserLink.propTypes = {
//   classes: PropTypes.object.isRequired
// }

// export default withStyles(styles)(UserLink)

