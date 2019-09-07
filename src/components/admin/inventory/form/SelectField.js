import React from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import {
	FormControl,
	InputLabel,
	Select,
	FormHelperText,
	MenuItem,
	Grid
} from '@material-ui/core'
import { adminTheme } from '../../../../styles/theme'

const styles = {
	SelectField: {
		width: 300
	},
	FormHelperText: {
		color: '#f44336'
	},
	div: {
		height: 75
	}
}

const SelectField = ({ field, form, disabled = false, ...props }) => {
	const { name } = field
	const { touched, errors, isSubmitting } = form
	const helperText =
		touched[name] && errors[name] ? errors[name] : props.helperText

	return (
		<MuiThemeProvider theme={adminTheme}>
			<Grid item>
				<div style={styles.div}>
					<FormControl error={touched[name] && !!errors[name]}>
						<InputLabel htmlFor="category">Category</InputLabel>
						<Select
							{...props}
							{...field}
							value={field.value || ''}
							disabled={isSubmitting || disabled}
							inputProps={{
								id: 'category'
							}}
							style={styles.SelectField}
						>
							<MenuItem value="">
								<em>None</em>
							</MenuItem>
							<MenuItem value={10}>Ten</MenuItem>
							<MenuItem value={20}>Twenty</MenuItem>
							<MenuItem value={30}>Thirty</MenuItem>
						</Select>
						<FormHelperText style={styles.FormHelperText}>
							{helperText}
						</FormHelperText>
					</FormControl>
				</div>
			</Grid>
		</MuiThemeProvider>
	)
}

export default SelectField
