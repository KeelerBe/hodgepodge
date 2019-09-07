import React from 'react'
import { Formik, Form, Field } from 'formik'
import { Paper, GridItem, Typography, Button, Div } from './mui/storeSignUpMui'
import { AuthTextFieldWithError } from './AuthTextFields'
import Checkbox from './Checkbox'
import { StoreValidationSchema } from './ValidationSchema'

const StoreSignUp = () => (
	<Paper>
		<GridItem>
			<Typography>Sign Up</Typography>
		</GridItem>

		<Formik
			validationSchema={StoreValidationSchema}
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
						name="vendorAccount"
						label="Also sign up on HP Merchants"
						component={Checkbox}
					/>
					<Div>
						<Field
							type="text"
							name="shopName"
							label="Shop name"
							placeholder="Chewy Inc"
							component={AuthTextFieldWithError}
						/>
					</Div>
					<Button type="submit" disabled={isSubmitting}>
						Sign Up
					</Button>
				</Form>
			)}
		</Formik>
	</Paper>
)

export default StoreSignUp
