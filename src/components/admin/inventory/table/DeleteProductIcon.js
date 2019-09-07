import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { DeleteIcon, iconHoverStyles } from './mui/tableIconsMui'

const DeleteProductIcon = ({ classes }) => 
  <DeleteIcon className={classes.animate}/>

DeleteProductIcon.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(iconHoverStyles)(DeleteProductIcon)