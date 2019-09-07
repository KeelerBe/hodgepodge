import React, { Component } from 'react'
import { FormHelperText } from '@material-ui/core'
import { GridContainer, GridItem } from './mui/fileUploadMui'

// const styles = {
// 	input: {}
// }

class FileUpload extends Component {
	state = {
		imgURL: require('../../../../assets/images/upload-file.png')
	}

	handleFileRead = (result) => this.setState({ imgURL: result })

	handleFileSelect = (file) => {
		let reader = new FileReader()
		reader.onloadend = () => this.handleFileRead(reader.result)
		reader.readAsDataURL(file)
	}

	render() {
		const {
			field,
			form: { touched, errors, isSubmitting, setFieldValue },
			disabled = false
		} = this.props
		const error = touched[field.name] && errors[field.name]
		return (
			<GridContainer>
				<GridItem>
					<input
						type="file"
						error={(!!error).toString()}
						disabled={disabled || isSubmitting}
						onChange={(event) => {
							const file = event.currentTarget.files[0]
							console.log(file)
							this.handleFileSelect(file)
							setFieldValue('image', file.name)
						}}
						// style={styles.input}
					/>
				</GridItem>
				<GridItem>
					<img src={this.state.imgURL} alt="" height={150} width={250} />
				</GridItem>
				{error && <FormHelperText error>{error}</FormHelperText>}
			</GridContainer>
		)
	}
}

export default FileUpload
