import React from 'react'
import GridMui from '@material-ui/core/Grid'

const styles = {
	GridContainer: {
		marginRight: -15,
		paddingTop: 25
	}
}

export const GridContainer = ({ children }) => (
	<GridMui
		container
		style={styles.GridContainer}
		direction="column-reverse"
		justify="flex-end"
		alignItems="flex-start"
	>
		{children}
	</GridMui>
)

export const GridItem = ({ children }) => <GridMui item>{children}</GridMui>
