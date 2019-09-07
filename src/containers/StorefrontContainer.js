import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/shoppingCart'
import store from '../store/configureStore'
import { startSetProducts } from '../actions/products'
import Products from '../components/shop/storefront/Products'

class Storefront extends Component {
  componentDidMount() {
    store.dispatch(startSetProducts())
  }

  render() {
    const { products, addToCart, shoppingCartItems } = this.props

    return (
      <Products 
        products={products}
        onAddToCartClick={addToCart}
        shoppingCartItems={shoppingCartItems}
      />
    )
  }
}

const mapStateToProps = ({ products, shoppingCart }) => {
  return {
    products,
    shoppingCartItems: shoppingCart.items
  }
}

export default connect(mapStateToProps, actionCreators)(Storefront)