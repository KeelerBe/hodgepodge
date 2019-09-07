import React from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import ButtonMui from '@material-ui/core/Button'
import GridMui from '@material-ui/core/Grid'
import { adminTheme } from '../../../../../styles/theme'

const styles = {
	Button: {
		width: 100,
		marginTop: 30,
		letterSpacing: 1,
		textTransform: 'none'
	}
}

export const Button = (props) => (
	<MuiThemeProvider theme={adminTheme}>
		<GridMui item>
			<ButtonMui
				style={styles.Button}
				variant="outlined"
				color="primary"
				{...props}
			>
				Cancel
			</ButtonMui>
		</GridMui>
	</MuiThemeProvider>
)
