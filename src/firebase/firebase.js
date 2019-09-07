import firebase from 'firebase'
import 'firebase/database'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyC26lrJChGjfiwcZmDwDGycScjdZT3cxSc",
  authDomain: "shopping-cart-78b0a.firebaseapp.com",
  databaseURL: "https://shopping-cart-78b0a.firebaseio.com",
  projectId: "shopping-cart-78b0a",
  storageBucket: "shopping-cart-78b0a.appspot.com",
  messagingSenderId: "466014896978"
}

firebase.initializeApp(config)

const database = firebase.database()
const auth = firebase.auth()

export {
  database,
  auth
}