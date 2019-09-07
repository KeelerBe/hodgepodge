import React, { Component, Fragment } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Provider } from 'react-redux'
import 'animate.css'
import './index.css'

import AppRouter from './routers/AppRouter'
import store from './store/configureStore'

class App extends Component {
	render() {
		return (
			<Provider store={store} >
				<Fragment>
					<CssBaseline />
					<AppRouter />
				</Fragment>
			</Provider>
		)
	}
}

export default App