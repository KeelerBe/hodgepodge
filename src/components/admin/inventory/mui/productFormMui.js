import React from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import PaperMui from '@material-ui/core/Paper'
import TypographyMui from '@material-ui/core/Typography'
import GridMui from '@material-ui/core/Grid'
import ButtonMui from '@material-ui/core/Button'
import { adminTheme } from '../../../../styles/theme'

const styles = {
	Div: {
		width: '100vw',
		height: '100vh',
		backgroundColor: '#f2f2f2'
	},
	Wrapper: {
		marginLeft: 50,
		marginRight: 50
	},
	Paper: {
		height: 490,
		width: 670,
		position: 'absolute',
		left: 0,
		right: 0,
		top: 60,
		marginLeft: 'auto',
		marginRight: 'auto'
	},
	Typography: {
		marginTop: 25,
		marginLeft: 30,
		fontWeight: 500,
		letterSpacing: 1,
		color: '#2c3e50'
	},
	Button: {
		width: 100,
		marginTop: 30,
		letterSpacing: 1,
		textTransform: 'none'
	},
	GridContainer: {
		marginTop: 20,
		marginLeft: -20
	},
	Container: {
		width: 300
	},
	ButtonsContainer: {
		width: 300
	}
}

export const Div = ({ children }) => <div style={styles.Div}>{children}</div>

export const Wrapper = ({ children }) => (
	<div style={styles.Wrapper}>{children}</div>
)

export const Paper = ({ children }) => (
	<PaperMui style={styles.Paper}>{children}</PaperMui>
)

export const Typography = ({ children }) => (
	<TypographyMui style={styles.Typography} variant="headline">
		{children}
	</TypographyMui>
)

export const GridContainer = ({ children }) => (
	<GridMui container style={styles.GridContainer} direction="column">
		{children}
	</GridMui>
)

export const Container = ({ children }) => (
	<GridMui container style={styles.Container} justify="space-between">
		{children}
	</GridMui>
)

export const MainGridContainer = ({ children }) => (
	<GridMui container justify="space-between">
		{children}
	</GridMui>
)

export const GridItem = ({ children }) => <GridMui item>{children}</GridMui>

export const ButtonsContainer = ({ children }) => (
	<GridMui container style={styles.ButtonsContainer} justify="space-around">
		{children}
	</GridMui>
)

export const Button = ({ children, ...props }) => (
	<MuiThemeProvider theme={adminTheme}>
		<GridMui item>
			<ButtonMui
				style={styles.Button}
				variant="contained"
				color="primary"
				{...props}
			>
				{children}
			</ButtonMui>
		</GridMui>
	</MuiThemeProvider>
)
