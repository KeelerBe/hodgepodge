import React from 'react'
import {
  GridItem,
  GridContainer,
  Paper,
  Icon
} from './mui/widgetMui'
import WidgetLink from './WidgetLink'

const Widget = ({ icon, path, title }) => 
  <GridItem>
    <Paper>
      <GridContainer>
        <GridItem>
          <Icon>
            {icon}
          </Icon>
        </GridItem>
        <GridItem>
          <WidgetLink
            path={path}
            title={title}
          />
        </GridItem>
      </GridContainer>
    </Paper>
  </GridItem>

export default Widget