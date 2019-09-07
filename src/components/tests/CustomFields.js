import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import TextFieldMui from '@material-ui/core/TextField'
import Input from '@material-ui/core/Input'
import SelectMui from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import InputLabel from '@material-ui/core/InputLabel'
import NumberFormat from 'react-number-format'

const styles = (theme) => ({
	marginRight: {
		textAlign: 'right'
	}
})

const TextField = ({ field, form, disabled = false, ...props }) => {
	// console.log(JSON.stringify(field, null, 2))
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

const NumberField = withStyles(styles, { withTheme: true })(
	({ classes, ...props }) => (
		<TextFieldMui
			{...props}
			InputProps={{
				classes: {
					input: classes.marginRight
				}
			}}
		/>
	)
)

const AvailableField = ({ field, form, disabled = false, ...props }) => {
	// console.log(JSON.stringify(field, null, 2))
	const { name } = field
	const { touched, errors, isSubmitting } = form

	return (
		<NumberField
			{...props}
			{...field}
			type="number"
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

const PriceField = ({ field, form, disabled = false, ...props }) => {
	// console.log(JSON.stringify(form, null, 2))
	const { name } = field
	const { touched, errors, isSubmitting } = form

	return (
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
			customInput={NumberField}
		/>
	)
}

const CategorySelect = ({
	field,
	form: { isSubmitting },
	disabled = false,
	...props
}) => {
	// console.log(JSON.stringify(field, null, 2))
	return (
		<FormControl>
			<InputLabel htmlFor="category">Category</InputLabel>
			<SelectMui
				{...props}
				{...field}
				value={field.value || ''}
				disabled={isSubmitting || disabled}
				inputProps={{
					id: 'category'
				}}
				style={{ width: 200 }}
			/>
		</FormControl>
	)
}

class FileUpload extends Component {
	state = {
		imgURL: require('../../assets/images/upload-file.png')
	}

	handleFileRead = (result) => this.setState({ imgURL: result })

	handleFileSelect = (file) => {
		let reader = new FileReader()
		reader.onloadend = () => this.handleFileRead(reader.result)
		reader.readAsDataURL(file)
	}

	render() {
		const {
			label,
			field,
			form: { touched, errors, isSubmitting, setFieldValue },
			disabled = false
		} = this.props
		const error = touched[field.name] && errors[field.name]
		return (
			<div>
				<img src={this.state.imgURL} alt="" height={150} width={150} />
				<FormControl>
					{label && (
						<InputLabel shrink error={!!error}>
							{label}
						</InputLabel>
					)}
					<Input
						error={!!error}
						inputProps={{
							type: 'file',
							disabled: disabled || isSubmitting,
							name: field.name,
							onChange: (event) => {
								const file = event.currentTarget.files[0]
								setFieldValue(field.name, file)
								this.handleFileSelect(file)
							}
						}}
					/>
					{error && <FormHelperText error>{error}</FormHelperText>}
				</FormControl>
			</div>
		)
	}
}

export { TextField, AvailableField, PriceField, CategorySelect, FileUpload }
