import React from 'react'
import { Div, Typography } from './mui/inventoryMui'
import DashboardLink from './table/DashboardLink'
import InventoryTable from './table/InventoryTable'
import AddNewProductButton from './table/AddNewProductButton'

const Inventory = () => (
	<Div>
		<DashboardLink />
		<Typography>Inventory</Typography>
		<InventoryTable />
		<AddNewProductButton />
	</Div>
)

export default Inventory
