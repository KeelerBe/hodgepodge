import React from 'react'
import { Div, Typography, Paper } from './mui/storeSignInMui'
import NewCustomer from './NewCustomer'
import ReturningCustomer from './ReturningCustomer'

const StoreSignIn = () => (
	<Div>
		<Typography>Please sign in to continue</Typography>
		<Paper>
			<NewCustomer />
			<ReturningCustomer />
		</Paper>
	</Div>
)

export default StoreSignIn
