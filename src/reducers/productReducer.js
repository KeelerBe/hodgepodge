import {
  ADD_NEW_PRODUCT
} from '../actions/types'

export default (state = null, action) => {
  switch (action.type) {
    case ADD_NEW_PRODUCT: 
      return {
        id: action.id,
        name: action.name,
        price: action.price,
        vendor: action.vendor,
        category: action.category,
        image: action.image,
        description: action.description
      }
    default:
      return
  }
}