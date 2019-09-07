import React from 'react'
import { withRouter } from 'react-router-dom'
import { Button } from './mui/cancelButtonMui.js'

const CancelButton = ({ history }) => (
	<Button onClick={() => history.goBack()}>Cancel</Button>
)

export default withRouter(CancelButton)
