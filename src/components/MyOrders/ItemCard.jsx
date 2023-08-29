import React from 'react'
import { ItemCardContainer } from './MyOrdersStyles'

const ItemCard = ({title, price,quantity,img}) => {
  return (
    <ItemCardContainer>
    <img src={img} alt={title} />
    <div>{title}</div>
    <div>{quantity}</div>
    <div>${price}</div>
    </ItemCardContainer>
  )
}

export default ItemCard