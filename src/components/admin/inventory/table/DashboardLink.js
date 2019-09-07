import React from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import {
  Typography,
  typographyHoverStyles
} from './mui/dashboardLinkMui'

const DashboardLink = ({ classes, history }) => 
  <Typography
    className={classes.animate}
    onClick={() => history.goBack()}
  >
    {'<'} Back to DASHBOARD
  </Typography>

DashboardLink.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(typographyHoverStyles)(withRouter(DashboardLink))
