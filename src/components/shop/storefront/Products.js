import React from 'react'
import { GridContainer, GridItem } from './mui/productsMui.js'
import Product from './Product'

const Products = ({ 
  products, 
  onAddToCartClick, 
  shoppingCartItems }) => 
    <GridContainer>
      {
        products.map(product => {
          const isProductInCart = shoppingCartItems.find(item => item.id === product.id)

          return (
            <GridItem key={product.id}>
              <Product 
                {...product}
                onAddToCartClick={() => onAddToCartClick(product)}
                isProductInCart={!!isProductInCart}
              />
            </GridItem>
          )
        })
      }
    </GridContainer>

export default Products