import React from 'react'
import { Formik, Form, Field } from 'formik'
import {
	GridWrapper,
	GridContainer,
	GridItem,
	Heading,
	ErrorMessage,
	Button
} from './mui/returningCustomerMui'
import StoreForgetPasswordLink from './StoreForgetPasswordLink'
import { AuthTextFieldWithStyles } from './AuthTextFields'

const ReturningCustomer = () => (
	<GridWrapper>
		<GridItem>
			<Heading>Returning customer?</Heading>
		</GridItem>

		<Formik
			onSubmit={(values, { setSubmitting }) => {
				setTimeout(() => {
					alert(JSON.stringify(values, null, 2))
					setSubmitting(false)
				}, 400)
			}}
		>
			{({ isSubmitting }) => (
				<Form>
					<Field
						type="email"
						name="email"
						placeholder="Email address"
						component={AuthTextFieldWithStyles}
					/>
					<Field
						type="password"
						name="password"
						placeholder="Password"
						component={AuthTextFieldWithStyles}
					/>
					<ErrorMessage>Wrong email or password.</ErrorMessage>
					<GridContainer>
						<Button type="submit" disabled={isSubmitting}>
							Sign In
						</Button>
						<StoreForgetPasswordLink />
					</GridContainer>
				</Form>
			)}
		</Formik>
	</GridWrapper>
)

export default ReturningCustomer
