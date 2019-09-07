import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { EditIcon, iconHoverStyles } from './mui/tableIconsMui'

const EditProductIcon = ({ classes }) =>
  <EditIcon className={classes.animate}/>

EditProductIcon.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(iconHoverStyles)(EditProductIcon)

