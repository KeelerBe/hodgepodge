import { withStyles } from '@material-ui/core/styles'
import { TableCell } from '@material-ui/core'

const CustomTableCell = withStyles({
  head: {
    backgroundColor: '#2c3e50',
    color: '#fff',
  },
  body: {
    fontSize: 15,
    letterSpacing: 1
  }
})(TableCell)

export default CustomTableCell