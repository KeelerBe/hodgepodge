import React from 'react'
import { 
  Paper, 
  Table 
} from './mui/inventoryTableMui'
import inventory from '../../../../temp/inventory'
import Head from './Head'
import Body from './Body'

const InventoryTable = () => 
  <Paper>
    <Table>
      <Head/>
      <Body inventory={inventory}/>
    </Table>
  </Paper>

export default InventoryTable