import React from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import ButtonMui from '@material-ui/core/Button'
import { adminTheme } from '../../../../../styles/theme'

const styles = {
  div: {
    marginTop: 50,
    textAlign: 'center'
  },
  Button: {
    letterSpacing: 1,
    textTransform: 'none',
    position: 'absolute',
    top: 580,
    left: 0,
    right: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 170
  }
}

export const Button = ({ children }) =>
  <MuiThemeProvider theme={adminTheme}>
    <div style={styles.div}>
      <ButtonMui 
        style={styles.Button} 
        variant="raised" 
        color="secondary"
      >
        {children}
      </ButtonMui>
    </div>
  </MuiThemeProvider>