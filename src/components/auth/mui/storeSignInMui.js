import React from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import PaperMui from '@material-ui/core/Paper'
import GridMui from '@material-ui/core/Grid'
import TypographyMui from '@material-ui/core/Typography'
import { mainTheme } from '../../../styles/theme'

const styles = {
	rootDiv: {
		backgroundColor: '#fafafa',
		height: '100vh',
		width: '100vw',
		paddingTop: 100
	},
	titleDiv: {
		width: 800,
		marginLeft: 'auto',
		marginRight: 'auto'
	},
	Typography: {
		paddingLeft: 25,
		marginBottom: 10,
		fontSize: 25,
		fontWeight: 500,
		letterSpacing: 1
	},
	Paper: {
		backgroundColor: '#e9e9e9',
		height: 320,
		width: 800,
		marginLeft: 'auto',
		marginRight: 'auto'
	}
}

export const Div = ({ children }) => (
	<MuiThemeProvider theme={mainTheme}>
		<div style={styles.rootDiv}>{children}</div>
	</MuiThemeProvider>
)

export const Paper = ({ children }) => (
	<PaperMui style={styles.Paper} elevation={0}>
		<GridMui container justify="space-around">
			{children}
		</GridMui>
	</PaperMui>
)

export const Typography = ({ children }) => (
	<div style={styles.titleDiv}>
		<TypographyMui style={styles.Typography}>{children}</TypographyMui>
	</div>
)
