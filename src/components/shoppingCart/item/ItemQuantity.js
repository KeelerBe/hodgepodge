import React, { Component } from 'react'
import {
  GridItem2,
  NumberInput
} from './mui/itemStylesMui'

class ItemQuantity extends Component {
  state = {
    quantity: this.props.quantity
  }

  componentWillReceiveProps(update) {
    this.setState({quantity: update.quantity})
  }

  onChange = e => {
    const quantity = e.target.value
    e.preventDefault()
    this.props.onQuantityChange(this.props.id, quantity)
    this.setState({ quantity })
  }

  render() {
    return (
      <GridItem2>
        <NumberInput
          type="number"
          value={this.state.quantity}
          onChange={this.onChange}
        />
      </GridItem2>
    )
  }
}

export default ItemQuantity
