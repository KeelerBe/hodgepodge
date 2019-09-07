import React from 'react'
import {
  GridItem,
  GridContainer
} from './mui/itemsHeadingMui'
import ProductItemHeading from './ProductItemHeading'
import QuantityHeading from './QuantityHeading'
import PriceHeading from './PriceHeading'
import BlankHeading from './BlankHeading'

const ItemsHeading = ({ classes }) => 
  <GridItem>
    <GridContainer>
      <ProductItemHeading/>
      <QuantityHeading/>
      <PriceHeading/>
      <BlankHeading/>
    </GridContainer>
  </GridItem>

export default ItemsHeading
