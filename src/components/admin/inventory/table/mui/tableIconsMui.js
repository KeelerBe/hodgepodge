import React from 'react'
import Icon from '@material-ui/core/Icon'

const styles = {
  Icon: {
    fontSize: 22
  }
}

export const iconHoverStyles = {
  animate: {
    '&:hover': {
      color: '#77b7af'
    }
  }
}

export const DeleteIcon = () =>
  <Icon style={styles.Icon}>
    delete
  </Icon>

export const EditIcon = () =>
  <Icon style={styles.Icon}>
    edit
  </Icon>