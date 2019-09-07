import React from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { 
  GridContainer,
  GridItem,
  Paper,
  Typography1,
  Typography2,
  Typography3,
  typography2HoverStyles
} from './mui/placeholderMui'

const Placeholder = ({ classes, history }) => 
  <Paper>
    <GridContainer>
      <GridItem>
        <Typography1>
          Under
        </Typography1>
      </GridItem>
      <GridItem>
        <Typography2>
          Construction
        </Typography2>
      </GridItem>
      <GridItem className={classes.animate}>
        <Typography3 
          className={classes.animate}
          onClick={() => history.goBack()}
        >
          {'<'} Go Back
        </Typography3>
      </GridItem>
    </GridContainer>
  </Paper>

Placeholder.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(typography2HoverStyles)(withRouter(Placeholder))