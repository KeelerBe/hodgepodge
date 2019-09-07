import React, { Component } from 'react'
import { AddShoppingCartIcon } from './mui/addToCartButtonMui'

class AddToCartButton extends Component {
  state = {
    animate: ""
  }

  handleOnClick = () => {
    this.props.onAddToCartClick()
    this.setState({animate: "animated tada"})
  }

  render() {
    const { isProductInCart } = this.props
    return (
      <div className={this.state.animate}>
        <AddShoppingCartIcon
          disabled={isProductInCart}
          onClick={this.handleOnClick}
        />
      </div>
    )
  }
}

export default AddToCartButton