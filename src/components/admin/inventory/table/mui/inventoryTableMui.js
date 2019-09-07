import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PaperMui from '@material-ui/core/Paper'
import TableMui from '@material-ui/core/Table'

const styles = theme => ({
  Paper: {
    width: 900,
    overflowX: 'auto',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 190,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  Table: {
    width: '100%',
    tableLayout: 'fixed'
  }
})

export const Paper = withStyles(styles, { withTheme: true })(({ classes, children }) =>
  <PaperMui className={classes.Paper}>
    {children}
  </PaperMui>
)

export const Table = withStyles(styles, { withTheme: true })(({ classes, children }) =>
  <TableMui className={classes.Table}>
    {children}
  </TableMui>)
