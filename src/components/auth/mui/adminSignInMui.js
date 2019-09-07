import React from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import PaperMui from '@material-ui/core/Paper'
import TypographyMui from '@material-ui/core/Typography'
import GridMui from '@material-ui/core/Grid'
import ButtonMui from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'
import { adminTheme } from '../../../styles/theme'

const styles = {
	div1: {
		height: '100vh',
		width: '100vw',
		paddingTop: 50
	},
	Paper: {
		backgroundColor: '#2c3e50',
		marginLeft: 'auto',
		marginRight: 'auto',
		height: 450,
		width: 600
	},
	div2: {
		marginTop: 20,
		marginBottom: 20,
		position: 'relative',
		textAlign: 'center',
		visibility: 'hidden'
	},
	WrapperDiv: {
		paddingTop: 40
	},
	Heading: {
		marginTop: 30,
		marginBottom: 30,
		color: '#fff',
		letterSpacing: 2,
		fontSize: 30,
		fontWeight: 300
	},
	ErrorMessage: {
		color: '#fff',
		fontSize: 14,
		letterSpacing: 1,
		paddingLeft: 30
	},
	Typography: {
		paddingLeft: 20,
		fontSize: 15,
		fontWeight: 400,
		color: '#fff',
		letterSpacing: 1
	},
	Icon: {
		color: '#fff',
		fontSize: 15,
		position: 'absolute',
		left: 55,
		top: 3
	},
	Input: {
		margin: 10,
		paddingLeft: 20,
		paddingRight: 20,
		borderRadius: 2,
		height: 50,
		width: 300,
		border: 'none',
		fontSize: 15,
		letterSpacing: 1
	},
	Button: {
		textTransform: 'none',
		letterSpacing: 1,
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 50,
		paddingRight: 50
	},
	buttonGrid: {
		textAlign: 'center'
	}
}

export const Paper = ({ children }) => (
	<MuiThemeProvider theme={adminTheme}>
		<div style={styles.div1}>
			<PaperMui style={styles.Paper}>{children}</PaperMui>
		</div>
	</MuiThemeProvider>
)

export const GridContainer = ({ children }) => (
	<GridMui container direction="column" justify="center" alignItems="center">
		{children}
	</GridMui>
)

export const WrapperDiv = ({ children }) => (
	<GridMui item>
		<div style={styles.WrapperDiv}>{children}</div>
	</GridMui>
)

export const Heading = ({ children }) => (
	<GridMui item>
		<TypographyMui style={styles.Heading}>{children}</TypographyMui>
	</GridMui>
)

export const ErrorMessage = ({ children }) => (
	<GridMui item>
		<div style={styles.div2}>
			<TypographyMui style={styles.ErrorMessage}>
				<Icon style={styles.Icon}>error_outline</Icon>
				{children}
			</TypographyMui>
		</div>
	</GridMui>
)

export const Typography = ({ children }) => (
	<TypographyMui style={styles.Typography}>{children}</TypographyMui>
)

export const Button = ({ children, ...props }) => (
	<GridMui item style={styles.buttonGrid}>
		<ButtonMui
			style={styles.Button}
			variant="raised"
			color="secondary"
			{...props}
		>
			{children}
		</ButtonMui>
	</GridMui>
)
