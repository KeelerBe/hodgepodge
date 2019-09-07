import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import {
  TableBody,
  TableRow2,
  TableCell1,
  TableCell2,
  TableCell3,
  oddRowStyles
} from './mui/tableStylesMui'
import NumberFormat from 'react-number-format'
import { penniesToString } from '../../../../utils'
import EditProductIcon from './EditProductIcon'
import DeleteProductIcon from './DeleteProductIcon'

const Body = ({ classes, inventory }) => 
  <TableBody>
    { 
      inventory.map(({ productName, price, quantityAvailable }) => (
          <TableRow2 className={classes.row} key={productName}>
            <TableCell1>{productName}</TableCell1>
            <TableCell2>
              <NumberFormat 
                value={penniesToString(price)} 
                displayType="text" 
                thousandSeparator={true} 
                prefix={'$'}
              />   
            </TableCell2>
            <TableCell2>{quantityAvailable}</TableCell2>
            <TableCell3>
              <EditProductIcon/>
            </TableCell3>
            <TableCell3>
              <DeleteProductIcon/>
            </TableCell3>
          </TableRow2>
      ))
    }
  </TableBody>

Body.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(oddRowStyles, { withTheme: true })(Body)
