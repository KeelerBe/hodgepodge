import React from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import ButtonMui from '@material-ui/core/Button'
import { mainTheme } from '../../../styles/theme'

const styles = {
  Div: {
    position: 'absolute',
    left: 116,
    bottom: 20
  },
  Button: {
    textTransform: 'none',
    letterSpacing: 1.5
  }
}

export const linkStyles = {
  style: {
    textDecoration: 'none'
  }
}

export const Div = ({ children }) =>
  <MuiThemeProvider theme={mainTheme}>
    <div style={styles.Div}>
      {children}
    </div>
  </MuiThemeProvider>


export const EnabledButton = ({ children }) =>
  <ButtonMui
    style={styles.Button}
    variant="raised" 
    color="secondary"
  >
    {children}
  </ButtonMui>

export const DisabledButton = ({ children }) =>
  <ButtonMui
    style={styles.Button}
    variant="raised" 
    disabled
  >
    {children}
  </ButtonMui>
