import React from 'react'
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles'
import TextFieldMui from '@material-ui/core/TextField'
import GridMui from '@material-ui/core/Grid'
import { adminTheme } from '../../../../styles/theme'
import NumberFormat from 'react-number-format'

const styles = {
	marginRight: {
		textAlign: 'right',
		paddingRight: 10
	},
	NumberField: {
		width: 140,
		height: 75
	}
}

const NumberField = withStyles(styles)(({ classes, ...props }) => (
	<MuiThemeProvider theme={adminTheme}>
		<TextFieldMui
			id="number-field"
			{...props}
			style={styles.NumberField}
			InputProps={{
				classes: {
					input: classes.marginRight
				}
			}}
		/>
	</MuiThemeProvider>
))

export const AvailableField = ({ field, form, disabled = false, ...props }) => {
	const { name } = field
	const { touched, errors, isSubmitting } = form

	return (
		<GridMui item>
			<NumberField
				{...props}
				{...field}
				type="number"
				label="Available"
				value={field.value || ''}
				error={touched[name] && !!errors[name]}
				helperText={
					touched[name] && errors[name] ? errors[name] : props.helperText
				}
				disabled={isSubmitting || disabled}
				autoComplete="off"
			/>
		</GridMui>
	)
}

export const PriceField = ({ field, form, disabled = false, ...props }) => {
	const { name } = field
	const { touched, errors, isSubmitting } = form

	return (
		<GridMui item>
			<NumberFormat
				{...props}
				{...field}
				value={field.value || ''}
				error={touched[name] && !!errors[name]}
				helperText={
					touched[name] && errors[name] ? errors[name] : props.helperText
				}
				disabled={isSubmitting || disabled}
				prefix="$"
				thousandSeparator
				fixedDecimalScale
				decimalScale={2}
				autoComplete="off"
				type="tel"
				label="Price"
				customInput={NumberField}
			/>
		</GridMui>
	)
}
