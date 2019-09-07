import React, { Fragment } from 'react'

import Navbar from './Navbar'

const withNavbar = WrappedComponent => () => (
  <Fragment>
    <Navbar/>
    <WrappedComponent/>
  </Fragment>
)

export default withNavbar