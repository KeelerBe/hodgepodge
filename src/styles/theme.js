import { createMuiTheme } from '@material-ui/core/styles'

const mainTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#c2185b',
      // dark: '#af1956',
      // light: '#d81e6a'
    },
    secondary: {
      main: '#0078D7',
      // dark: '#0873BC',
      contrastText: '#fff'
    }
  }
})

const adminTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#2c3e50',
      dark: '#24333f',
      light: '#405a70'
    },
    secondary: {
      main: '#80cbc4',
      dark: '#77b7af',
      contrastText: '#2c3e50'
    }
  }
})

export {
  mainTheme,
  adminTheme
}