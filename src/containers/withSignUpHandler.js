import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createAuthUser } from '../actions/users'
import * as firebase from '../firebase/firebase'

const INITIAL_STATE = {
  shopName: null,
  email: '',
  password: '',
  confirm: '',
  hodgePodge: false,
  merchants: false
}

const withSignUpHandler = WrappedComponent => {
  class SignUpHandler extends Component {
    state = {
      ...INITIAL_STATE
    }

    handleOnChange = event => {
      const { name, value } = event.target
      this.setState({
        [name]: value
      })
    }

    handleOnSubmit = event => {
      event.preventDefault()

      const {
        shopName,
        email,
        password
      } = this.state

      let user

      firebase.auth.createUserWithEmailAndPassword(email, password)
        .then(user => {
          user = user
          createAuthUser({ ...this.state })
        })
        .catch(error => console.log(error.message))

      

    }

    render() {
      return (

      )
    }
  }

  return connect(null, createAuthUser)(SignUpHandler)
}

export default withSignUpHandler