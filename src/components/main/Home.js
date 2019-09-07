import React, { Fragment } from 'react'
import Sidebar from '../shop/sidebar/Sidebar'
import StorefrontContainer from '../../containers/StorefrontContainer'

const Home = () => 
  <Fragment>
    <Sidebar />
    <StorefrontContainer />
  </Fragment>


export default Home