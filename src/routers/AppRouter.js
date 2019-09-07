import React, { Component } from 'react'
import { 
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import * as routes from './AppRoutes'

class AppRouter extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/signin" component={routes.StoreSignInPage}/>
          <Route exact path="/signup" component={routes.StoreSignUp}/>
          <Route exact path="/pw-forget" component={routes.Placeholder}/>

          <Route exact path="/" component={routes.HomePage}/>
          <Route exact path="/shopping-cart" component={routes.ShoppingCartPage}/>
          <Route exact path="/payments" component={routes.Placeholder}/>
          
          <Route exact path="/admin-signin" component={routes.AdminSignInPage}/>
          <Route exact path="/admin-signup" component={routes.AdminSignUp}/>
          
          <Route exact path="/admin" component={routes.AdminPage}/>
          <Route exact path="/admin/inventory" component={routes.Inventory}/>
          <Route exact path="/admin/inventory/add" component={routes.ProductForm}/>
          <Route exact path="/admin/orders" component={routes.Placeholder}/>

          <Route path="/test" component={routes.Test}/>
        </div>
      </Router>
    )
  }
}

export default AppRouter