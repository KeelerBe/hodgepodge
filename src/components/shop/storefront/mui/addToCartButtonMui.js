import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import AddShoppingCartIconMui from '@material-ui/icons/AddShoppingCart'

const styles = {
  IconButton: {
    color: '#555',
    height: 40, 
    width: 40,
    paddingTop: 8
  },
}

export const AddShoppingCartIcon = (props) =>
  <IconButton style={styles.IconButton} {...props}>
    <AddShoppingCartIconMui/>
  </IconButton>