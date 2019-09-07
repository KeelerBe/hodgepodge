import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthUser } from '../actions/users'
import * as firebase from '../firebase/firebase'

const INITIAL_STATE = {
  email: '',
  password: ''
}

const withSignInHandler = WrappedComponent => {
  class SignInHandler extends Component {
    state = {
      ...INITIAL_STATE
    }

    handleOnChange = event => {
      const { name, value } = event.target
      this.setState({
        [name]: value
      })
    }

    handleOnClick = event => {
      event.preventDefault()

      // const { setAuthUser } = this.props

      const { 
        email, 
        password 
      } = this.state

      firebase.auth.signInWithEmailAndPassword(email, password)
        .then(user => {
          console.log("signed in")
          console.log(user)
        })
        .catch(error => console.log(error.message))

      this.setState(INITIAL_STATE)
    }

    render() {
      return (
        <WrappedComponent 
          email={this.state.email}
          password={this.state.password}
          onChange={this.handleOnChange}
          onClick={this.handleOnClick}
          {...this.props}
        />
      )
    }
  }

  return connect(null, setAuthUser)(SignInHandler)
}

export default withSignInHandler