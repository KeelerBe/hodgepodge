import React from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import PaperMui from '@material-ui/core/Paper'
import TypographyMui from '@material-ui/core/Typography'
import GridMui from '@material-ui/core/Grid'
import ButtonMui from '@material-ui/core/Button'
import { mainTheme } from '../../../styles/theme'

const styles = {
	div: {
		height: '100vh',
		width: '100vw',
		paddingTop: 30
	},
	Paper: {
		backgroundColor: '#0078D7',
		marginLeft: 'auto',
		marginRight: 'auto',
		paddingBottom: 40,
		height: 'auto',
		width: 400
	},
	Typography: {
		marginTop: 30,
		marginBottom: 30,
		color: '#fff',
		letterSpacing: 2,
		fontSize: 30,
		fontWeight: 300
	},
	Button: {
		textTransform: 'none',
		letterSpacing: 1,
		marginTop: 10,
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 50,
		paddingRight: 50
	},
	buttonWrapper: {
		textAlign: 'center'
	},
	Div: {
		// display: 'none'
	}
}

export const Paper = ({ children }) => (
	<MuiThemeProvider theme={mainTheme}>
		<div style={styles.div}>
			<PaperMui style={styles.Paper}>
				<GridMui
					container
					direction="column"
					justify="center"
					alignItems="center"
				>
					{children}
				</GridMui>
			</PaperMui>
		</div>
	</MuiThemeProvider>
)

export const GridContainer = ({ children }) => (
	<GridMui container justify="center">
		{children}
	</GridMui>
)

export const GridItem = ({ children }) => <GridMui item>{children}</GridMui>

export const Typography = ({ children }) => (
	<TypographyMui style={styles.Typography}>{children}</TypographyMui>
)

export const Button = ({ children, ...props }) => (
	<GridMui item style={styles.buttonWrapper}>
		<ButtonMui
			style={styles.Button}
			variant="raised"
			color="primary"
			{...props}
		>
			{children}
		</ButtonMui>
	</GridMui>
)

export const Div = ({ children }) => <div style={styles.Div}>{children}</div>
