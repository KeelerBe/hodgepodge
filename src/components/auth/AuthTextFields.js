import React from 'react'
import {
	Div,
	GridItem,
	Input1,
	Input2,
	TextError,
	Typography
} from './mui/authTextFieldsMui'

const AuthTextField = ({ field, form, disabled = false, ...props }) => {
	const { isSubmitting } = form

	return (
		<GridItem>
			<Input1
				{...props}
				{...field}
				value={field.value || ''}
				disabled={isSubmitting || disabled}
				autoComplete="off"
			/>
		</GridItem>
	)
}

const AuthTextFieldWithStyles = ({
	field,
	form,
	disabled = false,
	...props
}) => {
	const { isSubmitting } = form

	return (
		<GridItem>
			<Input2
				{...props}
				{...field}
				value={field.value || ''}
				disabled={isSubmitting || disabled}
				autoComplete="off"
				// style={styles.Input}
			/>
		</GridItem>
	)
}

const AuthTextFieldWithError = ({
	field,
	form,
	disabled = false,
	label,
	...props
}) => {
	const { name } = field
	const { touched, errors, isSubmitting } = form
	const helperText =
		touched[name] && errors[name] ? errors[name] : props.helperText

	return (
		<GridItem>
			<Div>
				<Typography>{label}</Typography>
				<Input1
					{...props}
					{...field}
					value={field.value || ''}
					disabled={isSubmitting || disabled}
					autoComplete="off"
				/>
				<TextError>{helperText}</TextError>
			</Div>
		</GridItem>
	)
}

export { AuthTextField, AuthTextFieldWithStyles, AuthTextFieldWithError }
