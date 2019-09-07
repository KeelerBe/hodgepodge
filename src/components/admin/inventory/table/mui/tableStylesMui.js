import React from 'react'
import TableHeadMui from '@material-ui/core/TableHead'
import TableBodyMui from '@material-ui/core/TableBody'
import TableRowMui from '@material-ui/core/TableRow'
import TableCell from './CustomTableCell'

const styles = {
  TableCell1: {
    width: 200,
    fontWeight: 500,
    letterSpacing: 1,
  },
  TableCell2: {
    marginRight: 50,
    width: 100,
    letterSpacing: 1,
    textAlign: 'right'
  },
  TableCell3: {
    margin: 0,
    padding: 0,
    width: 15,
    letterSpacing: 1,
    color: '#d1dbd9',
  },
}

export const oddRowStyles = theme => ({
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
})

export const TableHead = ({ children }) =>
  <TableHeadMui>
    {children}
  </TableHeadMui>

export const TableBody = ({ children }) =>
  <TableBodyMui>
    {children}
  </TableBodyMui>

export const TableRow1 = ({ children }) =>
  <TableRowMui>
    {children}
  </TableRowMui>

export const TableRow2 = ({ children, ...props }) =>
  <TableRowMui {...props}>
    {children}
  </TableRowMui>

export const TableCell1 = ({ children }) =>
  <TableCell style={styles.TableCell1}>
    {children}
  </TableCell>

export const TableCell2 = ({ children }) =>
  <TableCell style={styles.TableCell2}>
    {children}
  </TableCell>

export const TableCell3 = ({ children }) =>
  <TableCell style={styles.TableCell3}>
    {children}
  </TableCell>
