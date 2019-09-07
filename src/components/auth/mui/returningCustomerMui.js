import React from 'react'
import GridMui from '@material-ui/core/Grid'
import TypographyMui from '@material-ui/core/Typography'
import ButtonMui from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'

const styles = {
	GridWrapper: {
		marginTop: 30
	},
	div: {
		marginTop: 10,
		marginBottom: 30
		// visibility: 'hidden'
	},
	Heading: {
		marginBottom: 20,
		fontSize: 20,
		letterSpacing: 1
	},
	ErrorMessage: {
		color: '#ff0000',
		textAlign: 'center',
		fontSize: 14,
		letterSpacing: 1,
		paddingLeft: 30
	},
	Button: {
		textTransform: 'none',
		letterSpacing: 1
	},
	Icon: {
		fontSize: 15,
		position: 'absolute',
		left: 705,
		top: 337
	}
}

export const linkStyles = {
	style: {
		marginLeft: 20,
		textDecoration: 'none'
	}
}

export const GridWrapper = ({ children }) => (
	<GridMui item style={styles.GridWrapper}>
		<GridMui container direction="column" alignItems="flex-start">
			{children}
		</GridMui>
	</GridMui>
)

export const GridContainer = ({ children }) => (
	<GridMui container>{children}</GridMui>
)

export const GridItem = ({ children }) => <GridMui item>{children}</GridMui>

export const Heading = ({ children }) => (
	<TypographyMui style={styles.Heading}>{children}</TypographyMui>
)

export const ErrorMessage = ({ children }) => (
	<GridMui item>
		<div style={styles.div}>
			<TypographyMui style={styles.ErrorMessage}>
				<Icon style={styles.Icon}>error_outline</Icon>
				{children}
			</TypographyMui>
		</div>
	</GridMui>
)

export const Button = ({ children, ...props }) => (
	<GridMui item>
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
