import React, { Fragment } from 'react'
import {
  Card,
  CardMedia,
  CardContent,
  Typography1,
  Typography2,
  Typography3,
  GridContainer,
  GridItem1,
  GridItem2
} from './mui/productMui'
import NumberFormat from 'react-number-format'
import { penniesToString } from '../../../utils'
import StarRating from './StarRating'
import AddToCartButton from './AddToCartButton'


const Product = ({ 
  image, 
  name, 
  vendor, 
  price, 
  onAddToCartClick, 
  isProductInCart }) => 
    <Fragment>
      <Card>
        <CardMedia image={image}/>
        <CardContent>
          <Typography1>
            {name}
          </Typography1>
          <Typography2>
            {vendor}
          </Typography2>
          <Typography3>
            <NumberFormat 
              value={penniesToString(price)} 
              displayType="text" 
              thousandSeparator={true} 
              prefix={'$'}
            />   
          </Typography3>
        </CardContent>
          <GridContainer>
            <GridItem1>
              <StarRating />
            </GridItem1>
            <GridItem2>
              <AddToCartButton
                onAddToCartClick={onAddToCartClick}
                isProductInCart={isProductInCart}
              />
            </GridItem2>
          </GridContainer>
      </Card>
    </Fragment>

export default Product

