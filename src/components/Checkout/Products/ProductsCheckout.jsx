import React from 'react'
import {Divider, PriceConteiner, ProductsChekoutContainer, ProductsContainer } from './ProductsCheckoutStyles'
import ProductCheckoutCard from './ProductCheckoutCard'

const ProductsCheckout = ({ cartItems, shippingCost, totalPrice }) => {
  return (
    <ProductsChekoutContainer>
        <h2>Resumen de tu compra</h2>
    <ProductsContainer>
    {
          cartItems.length ? (
            cartItems.map(item => <ProductCheckoutCard key={item.id} {...item} />)
          ) : (
            <p>Compra algo</p>
          )
        }
      

    </ProductsContainer> 
    <Divider/>
     <PriceConteiner>
        <p>Subtotal: ${totalPrice}</p>
        <p>Envio: ${shippingCost}</p>
        <p>Total: ${shippingCost+totalPrice}</p>
     </PriceConteiner>
    </ProductsChekoutContainer>
  )
}

export default ProductsCheckout