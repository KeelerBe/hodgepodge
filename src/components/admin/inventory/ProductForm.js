import React from 'react'
import { Formik, Form, Field } from 'formik'
import {
	Div,
	Wrapper,
	Paper,
	Typography,
	MainGridContainer,
	GridContainer,
	Container,
	GridItem,
	ButtonsContainer,
	Button
} from './mui/productFormMui'
import { ProductNameField, DescriptionField } from './form/TextFields'
import { AvailableField, PriceField } from './form/NumberFields'
import SelectField from './form/SelectField'
import FileUpload from './form/FileUpload'
import CancelButton from './form/CancelButton'
import FormSchema from './form/FormSchema'

const ProductForm = () => (
	<Div>
		<Paper>
			<Typography>Add New Product</Typography>

			<Formik
				validationSchema={FormSchema}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						alert(JSON.stringify(values, null, 2))
						setSubmitting(false)
					}, 400)
				}}
			>
				{({ isSubmitting, setFieldValue, ...props }) => (
					<Wrapper>
						<Form>
							<MainGridContainer>
								<GridItem>
									<GridContainer>
										<Field name="productName" component={ProductNameField} />
										<Container>
											<Field name="available" component={AvailableField} />
											<Field name="price" component={PriceField} />
										</Container>
										<Field name="category" component={SelectField} />
										<Field name="description" component={DescriptionField} />
										<ButtonsContainer>
											<CancelButton />
											<Button type="submit" disabled={isSubmitting}>
												Save
											</Button>
										</ButtonsContainer>
									</GridContainer>
								</GridItem>
								<GridItem>
									<Field name="image" component={FileUpload} />
								</GridItem>
							</MainGridContainer>
						</Form>
					</Wrapper>
				)}
			</Formik>
		</Paper>
	</Div>
)

export default ProductForm
