import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { 
  Typography,
  linkStyles,
  typographyHoverStyles 
} from './mui/widgetLinkMui'

const WidgetLink = ({ classes, path, title }) => (
  <Link {...linkStyles} to={path}>
    <Typography className={classes.animate}>
      {title}
    </Typography>
  </Link>
)

WidgetLink.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(typographyHoverStyles)(WidgetLink)