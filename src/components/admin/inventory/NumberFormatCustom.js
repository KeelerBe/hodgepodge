import React from "react"
import NumberFormat from "react-number-format"
import PropTypes from "prop-types"

const NumberFormatCustom = (props) => {
	const { inputRef, onChange, ...other } = props

	return (
		<NumberFormat
			{...other}
			ref={inputRef}
			onValueChange={(values) => {
				onChange({
					target: {
						value: values.value
					}
				})
			}}
			decimalScale={2}
			fixedDecimalScale
			thousandSeparator
			prefix="$"
		/>
	)
}

NumberFormatCustom.propTypes = {
	inputRef: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired
}

export default NumberFormatCustom
