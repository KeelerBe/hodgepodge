import React from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import BadgeMui from '@material-ui/core/Badge'
import { mainTheme } from '../../../../styles/theme'

const styles = {
  Badge: {
    fontWeight: 500,
    right: 16
  }
}

export const Badge = (props) =>
  <MuiThemeProvider theme={mainTheme}>
    <BadgeMui 
      style={styles.Badge}
      color="secondary"
      {...props}
    />
  </MuiThemeProvider>



