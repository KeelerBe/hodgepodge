import React from 'react'
import TypographyMui from '@material-ui/core/Typography'
import GridMui from '@material-ui/core/Grid'

const styles = {
	Input1: {
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
	Input2: {
		marginRight: 0,
		marginTop: 5,
		marginBottom: 5,
		paddingLeft: 20,
		paddingRight: 20,
		borderRadius: 2,
		height: 40,
		width: 280,
		border: 'none',
		fontSize: 13,
		letterSpacing: 0.5
	},
	TextError: {
		color: '#fff',
		fontSize: 13,
		marginLeft: 12,
		marginTop: -5,
		fontStyle: 'italic'
		// visibility: 'hidden'
	},
	Typography: {
		color: '#fff',
		marginLeft: 12,
		marginBottom: -10,
		letterSpacing: 1,
		fontSize: 15
	},
	Div: {
		height: 115
	}
}

export const Div = ({ children }) => <div style={styles.Div}>{children}</div>

export const GridItem = ({ children }) => <GridMui item>{children}</GridMui>

export const TextError = ({ children }) => (
	<TypographyMui style={styles.TextError}>{children}</TypographyMui>
)

export const Typography = ({ children }) => (
	<TypographyMui style={styles.Typography}>{children}</TypographyMui>
)

export const Input1 = ({ children, ...props }) => (
	<input style={styles.Input1} {...props} />
)

export const Input2 = ({ children, ...props }) => (
	<input style={styles.Input2} {...props} />
)
