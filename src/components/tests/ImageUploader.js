import React, { Component } from 'react'
import { Input, Img, GridContainer, GridItem } from './imageUploaderMui'

class ImageUploader extends Component {
	state = {
		imgURL: require('../../../../assets/images/upload-file.png')
	}

	handleFileRead = (result) => this.setState({ imgURL: result })

	handleFileSelect = (file) => {
		let reader = new FileReader()
		reader.onloadend = () => this.handleFileRead(reader.result)
		reader.readAsDataURL(file)
	}

	handleOnChange = (event) => {}

	render() {
		return (
			<GridContainer>
				<GridItem>
					<Input
						type="file"
						name="imageUpload"
						onChange={(event) => this.handleFileSelect(event.target.files[0])}
					/>
				</GridItem>
				<GridItem>
					<Img src={this.state.imgURL} />
				</GridItem>
			</GridContainer>
		)
	}
}

export default ImageUploader
