import React from 'react'
import { GridContainer } from './mui/widgetsMui'
import Widget from './Widget'

const Widgets = () => 
  <GridContainer>
    <Widget
      icon="assignment"
      path="/admin/inventory"
      title="Manage Inventory"
    />
    <Widget
      icon="local_shipping"
      path="/admin/orders"
      title="Manage Orders"
    />
  </GridContainer>

export default Widgets