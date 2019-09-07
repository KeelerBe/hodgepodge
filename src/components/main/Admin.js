import React, { Fragment } from 'react'
import AdminNavbar from '../admin/navbar/AdminNavbar'
import Dashboard from '../admin/dashboard/Dashboard'

const Admin = ({ authUser }) => (
  <Fragment>
    <AdminNavbar/>
    <Dashboard/>
  </Fragment>
)

export default Admin