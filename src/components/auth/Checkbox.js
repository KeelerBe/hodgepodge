import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { FormControlLabel, Grid } from '@material-ui/core'
import CheckboxMui from '@material-ui/core/Checkbox'

const styles = {
	div: {
		paddingTop: 10,
		marginBottom: 15,
		textAlign: 'center'
	},
	checkbox: {
		color: '#fafafa'
		// paddingLeft: 20
	},
	checked: {
		'&$checked': {
			color: '#fafafa'
		}
	},
	label: {
		color: '#fafafa',
		fontSize: 15,
		letterSpacing: 1
	}
}

const Checkbox = withStyles(styles)(
	({
		classes,
		field,
		form: { isSubmitting },
		disabled = false,
		label,
		checkedColor,
		...props
	}) => {
		return (
			<Grid item>
				<div style={styles.div}>
					<FormControlLabel
						classes={{
							label: classes.label
						}}
						control={
							<CheckboxMui
								{...field}
								{...props}
								disabled={isSubmitting || disabled}
								checked={field.value ? 'checked' : ''}
								value={field.value ? 'checked' : ''}
								classes={{
									root: classes.checkbox,
									checked: classes.checked
								}}
							/>
						}
						label={label}
					/>
				</div>
			</Grid>
		)
	}
)

export default Checkbox
