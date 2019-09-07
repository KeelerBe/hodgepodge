import { database } from '../firebase/firebase'
import {
  ADD_NEW_PRODUCT,
  SET_PRODUCTS
} from './types'

export const setProducts = products => ({
  type: SET_PRODUCTS,
  products
})

export const startSetProducts = () => {
  return dispatch => {
    database.ref('products').once('value') // return allows us to attach .then()
      .then(snapshot => {
        const products = []

        snapshot.forEach(childSnapshot => {
          products.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          })
        })

        dispatch(setProducts(products))
      })
      .catch(error => {
        console.log("Error fetching data " + error)
      })
  }
}

export const addNewProduct = ({ 
  name, 
  price, 
  vendor, 
  category, 
  image, 
  description = '' }) => ({
    type: ADD_NEW_PRODUCT,
    // id: uuid(),
    name,
    price,
    vendor, 
    category,
    image,
    description
})

export const startAddNewProduct = productData => {
  return dispatch => {
    const { 
      name, 
      price, 
      vendor, 
      category, 
      image, 
      description = '' 
    } = productData

    const product = { 
      name, 
      price, 
      vendor, 
      category, 
      image, 
      description 
    }

    database.ref('products').push(product)
      .then(ref => {
        dispatch(addNewProduct({
          id: ref.key,
          ...product
        }))
      })

  }
}
 


