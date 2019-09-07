import React from 'react'
import { connect } from 'react-redux'
import AdminLink from '../components/shop/navbar/AdminLink'

const AdminLinkContainer = ({ isAuthenticated }) => {
  let pathName
  
  isAuthenticated ? pathName = "/admin" : pathName = "/admin-signin"

  return <AdminLink pathName={pathName}/>
}

const mapStateToProps = ({ authUser }) => {
  return {
    isAuthenticated: authUser
  }
}

export default connect(mapStateToProps)(AdminLinkContainer)