import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import InputMui from '@material-ui/core/Input';
import SearchIconMui from '@material-ui/icons/Search';

const styles = theme => ({
  search: {
    position: 'relative',
    borderRadius: 4,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 150,
      '&:focus': {
        width: 300,
      }
    },
  }
});

export const Div = withStyles(styles, { withTheme: true })(({ classes, children }) =>
  <div className={classes.search}>
    {children}
  </div>
)

export const SearchIcon = withStyles(styles, { withTheme: true })(({ classes }) => 
  <div className={classes.searchIcon}>
    <SearchIconMui/>
  </div>
)

export const Input = withStyles(styles, { withTheme: true })(({ classes, ...props }) =>
  <InputMui
    disableUnderline
    classes={{
      root: classes.inputRoot,
      input: classes.inputInput,
    }}
    {...props}
  />
)