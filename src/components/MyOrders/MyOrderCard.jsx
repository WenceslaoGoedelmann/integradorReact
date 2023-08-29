import React from "react";
import { ItemsContainer, MyOrderCardContainer } from "./MyOrdersStyles";
import ItemCard from "./ItemCard";

const MyOrderCard = ({ total, _id, items,createdAt,price,shippingCost }) => {
  const anio = createdAt.slice(0, 4)
  const mes = createdAt.slice(5, 7)
  const dia = createdAt.slice(8, 10)
  const fecha= dia+"/"+mes+"/"+anio
  return (
    <MyOrderCardContainer>
      <div>Orden N°: {_id.slice(0, 7)}</div>
      <div>Fecha: {fecha}</div>
      <ItemsContainer>
        {items.map((items) => (
          <ItemCard key={items.id} {...items} />
        ))}
      </ItemsContainer>
      <div>Subtotal: ${price}</div>
      <div>Costo Envio: ${shippingCost}</div>
      <div>Costo total: ${total}</div>
    </MyOrderCardContainer>
  );
};

export default MyOrderCard;
