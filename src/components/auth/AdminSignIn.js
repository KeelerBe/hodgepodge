import React from 'react'
import { Formik, Form, Field } from 'formik'
import {
	Paper,
	GridContainer,
	WrapperDiv,
	Heading,
	Typography,
	ErrorMessage,
	Button
} from './mui/adminSignInMui'
import AdminSignUpLink from './AdminSignUpLink'
import AdminForgetPasswordLink from './AdminForgetPasswordLink'
import { AuthTextField } from './AuthTextFields'

const AdminSignIn = () => (
	<Paper>
		<GridContainer>
			<Heading>Sign In</Heading>
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
							component={AuthTextField}
						/>
						<Field
							type="password"
							name="password"
							placeholder="Password"
							component={AuthTextField}
						/>
						<ErrorMessage>Wrong email or password.</ErrorMessage>
						<Button type="submit" disabled={isSubmitting}>
							Sign In
						</Button>
					</Form>
				)}
			</Formik>

			<WrapperDiv>
				<Typography>
					Not yet registered?
					<AdminSignUpLink />
					<AdminForgetPasswordLink />
				</Typography>
			</WrapperDiv>
		</GridContainer>
	</Paper>
)

export default AdminSignIn
