import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
	withStyles,
	MuiThemeProvider,
	createMuiTheme
} from '@material-ui/core/styles'
import { Paper, Grid, TextField, MenuItem, Button } from '@material-ui/core'
import NumberFormatCustom from '../admin/inventory/NumberFormatCustom'
import { stringToPennies } from '../../utils'

const categories = [
	'Category 1',
	'Category 2',
	'Category 3',
	'Category 4',
	'Category 5',
	'Category 6',
	'Category 7',
	'Category 8',
	'Category 9',
	'Category 10',
	'Category 11',
	'Category 12'
]

const styles = (theme) => ({
	root: {
		width: '50%',
		marginLeft: 'auto',
		marginRight: 'auto',
		marginTop: 50
	},
	paper: {
		paddingTop: 30,
		paddingBottom: 20,
		paddingLeft: 50,
		paddingRight: 50
	},
	title: {
		fontFamily: 'Roboto',
		fontSize: 30,
		color: '#333',
		letterSpacing: 1,
		fontWeight: 500,
		marginBottom: 20
	},
	button: {
		marginTop: 50,
		color: theme.palette.getContrastText('#673ab7'),
		backgroundColor: '#673ab7',
		'&:hover': {
			backgroundColor: '#4d2b88'
		},
		letterSpacing: 1.5
	}
})

const theme = createMuiTheme({
	palette: {
		primary: {
			light: '#484848',
			main: '#212121',
			dark: '#000',
			contrastText: '#fff'
		}
	}
})

class ProductDetails extends Component {
	state = {
		name: '',
		price: '',
		category: '',
		image: '',
		description: '',
		isDisabled: true
	}

	checkFields = () => {
		const { name, price, category, image } = this.state

		if (!name) return true
		if (!price) return true
		if (!category) return true
		if (!image) return true

		return false
	}

	handleChange = (name) => (event) => {
		this.setState({
			[name]: event.target.value
		})

		this.setState({ isDisabled: this.checkFields() })
	}

	handleSave = (event) => {
		event.preventDefault()

		const { name, category, image, description } = this.state

		let price = this.state.price
		price = stringToPennies(price)
		const vendor = 'Vendor Name'

		this.props.onStartClick({
			name,
			price,
			vendor,
			category,
			image,
			description
		})

		this.setState({
			name: '',
			price: '',
			category: '',
			image: '',
			description: '',
			isDisabled: true
		})
	}

	render() {
		const { classes } = this.props

		return (
			<div className={classes.root}>
				<Paper className={classes.paper}>
					<h3 className={classes.title}>Add New Product</h3>
					<form>
						<Grid container direction="column">
							<Grid container justify="space-between" alignItems="flex-end">
								<Grid item>
									<MuiThemeProvider theme={theme}>
										<TextField
											id="name"
											label="Name"
											value={this.state.name}
											onChange={this.handleChange('name')}
											margin="normal"
										/>
									</MuiThemeProvider>
								</Grid>
								<Grid item>
									<MuiThemeProvider theme={theme}>
										<TextField
											id="price"
											label="Price"
											value={this.state.price}
											onChange={this.handleChange('price')}
											InputProps={{
												inputComponent: NumberFormatCustom
											}}
											margin="normal"
										/>
									</MuiThemeProvider>
								</Grid>
							</Grid>

							<Grid item>
								<MuiThemeProvider theme={theme}>
									<TextField
										id="category"
										label="Category"
										select
										value={this.state.category}
										onChange={this.handleChange('category')}
										SelectProps={{
											MenuProps: {
												className: classes.menu
											}
										}}
										helperText="Please select a category"
										margin="normal"
									>
										{categories.map((option) => (
											<MenuItem key={option} value={option}>
												{option}
											</MenuItem>
										))}
									</TextField>
								</MuiThemeProvider>
							</Grid>

							<Grid item>
								<MuiThemeProvider theme={theme}>
									<TextField
										id="image"
										label="Image"
										value={this.state.image}
										onChange={this.handleChange('image')}
										margin="normal"
									/>
								</MuiThemeProvider>
							</Grid>

							<Grid item className={classes.description}>
								<MuiThemeProvider theme={theme}>
									<TextField
										id="full-width"
										label="Description"
										value={this.state.description}
										onChange={this.handleChange('description')}
										helperText="Write a short description of your product"
										fullWidth
										margin="normal"
									/>
								</MuiThemeProvider>
							</Grid>
						</Grid>

						<Grid container justify="space-around">
							<Grid item>
								<div>
									<Button variant="raised" className={classes.button}>
										Cancel
									</Button>
								</div>
							</Grid>
							<Grid item>
								<div>
									<Button
										variant="raised"
										className={classes.button}
										onClick={this.handleSave}
										disabled={this.state.isDisabled}
									>
										Save
									</Button>
								</div>
							</Grid>
						</Grid>
					</form>
				</Paper>
			</div>
		)
	}
}

ProductDetails.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ProductDetails)
