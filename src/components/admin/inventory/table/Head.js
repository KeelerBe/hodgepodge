import React from 'react'
import {
  TableHead,
  TableRow1,
  TableCell1,
  TableCell2,
  TableCell3
} from './mui/tableStylesMui'

const Head = () => 
  <TableHead>
    <TableRow1>
      <TableCell1>Product Name</TableCell1>
      <TableCell2>Price Per Unit</TableCell2>
      <TableCell2>Quantity Available</TableCell2>
      <TableCell3>{''}</TableCell3>
      <TableCell3>{''}</TableCell3>
    </TableRow1>
  </TableHead>

export default Head
