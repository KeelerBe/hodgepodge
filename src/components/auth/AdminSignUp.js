import React from 'react'
import { Formik, Form, Field } from 'formik'
import { Paper, GridItem, Typography, Button } from './mui/adminSignUpMui'
import { AuthTextFieldWithError } from './AuthTextFields'
import Checkbox from './Checkbox'
import { AdminValidationSchema } from './ValidationSchema'

const AdminSignUp = () => (
	<Paper>
		<GridItem>
			<Typography>Sign Up</Typography>
		</GridItem>

		<Formik
			validationSchema={AdminValidationSchema}
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
						type="text"
						name="username"
						label="Username"
						placeholder="Jane Doe"
						component={AuthTextFieldWithError}
					/>
					<Field
						type="text"
						name="shopName"
						label="Shop name"
						placeholder="Chewy Inc"
						component={AuthTextFieldWithError}
					/>
					<Field
						type="email"
						name="email"
						label="Email address"
						placeholder="jane@example.com"
						component={AuthTextFieldWithError}
					/>
					<Field
						type="password"
						name="password"
						label="Password"
						placeholder="******"
						component={AuthTextFieldWithError}
					/>
					<Field
						type="password"
						name="confirm"
						label="Confirm password"
						placeholder="******"
						component={AuthTextFieldWithError}
					/>
					<Field
						name="buyerAccount"
						label="Also sign up on HodgePodge.com"
						component={Checkbox}
					/>
					<Button type="submit" disabled={isSubmitting}>
						Sign Up
					</Button>
				</Form>
			)}
		</Formik>
	</Paper>
)

export default AdminSignUp
