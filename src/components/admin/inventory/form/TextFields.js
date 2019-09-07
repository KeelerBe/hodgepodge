import React from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import TextFieldMui from '@material-ui/core/TextField'
import GridMui from '@material-ui/core/Grid'
import { adminTheme } from '../../../../styles/theme'

const styles = {
	ProductNameField: {
		width: 300,
		marginBottom: 10,
		height: 75
	},
	DescriptionField: {
		width: 300,
		height: 75
	}
}

const TextField = ({ field, form, disabled = false, ...props }) => {
	const { name } = field
	const { touched, errors, isSubmitting } = form

	return (
		<TextFieldMui
			{...props}
			{...field}
			value={field.value || ''}
			error={touched[name] && !!errors[name]}
			helperText={
				touched[name] && errors[name] ? errors[name] : props.helperText
			}
			disabled={isSubmitting || disabled}
			autoComplete="off"
		/>
	)
}

export const ProductNameField = ({ classes, ...props }) => (
	<MuiThemeProvider theme={adminTheme}>
		<GridMui item>
			<TextField
				style={styles.ProductNameField}
				label="Product Name"
				autoComplete="off"
				autoFocus
				{...props}
			/>
		</GridMui>
	</MuiThemeProvider>
)

export const DescriptionField = (props) => (
	<MuiThemeProvider theme={adminTheme}>
		<GridMui item>
			<TextField
				style={styles.DescriptionField}
				label="Description"
				autoComplete="off"
				multiline={true}
				rows={4}
				{...props}
			/>
		</GridMui>
	</MuiThemeProvider>
)
