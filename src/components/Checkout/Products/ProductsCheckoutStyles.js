import styled from 'styled-components';


export const ProductsChekoutContainer = styled.div`
        margin-top: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background:rgb(150, 150, 150);
        margin-left: 10%;
        margin-right: 10%;
        border-radius: 10px;
        min-height: 310px;
        justify-content: center;
 h2 {
        color: black;
        font-size: 20px;
        font-weight: 600;
        padding-top: 20px;
        padding-bottom: 5px;
        
        }
`;

export const ProductsContainer = styled.div`
        display: flex;
        flex-direction: column;
`;

export const ProductCheckoutContainer = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 400px;
        height: 100px;
        border-bottom: 1px solid black;
        img {
        height: 65px;
        width: 65px;
        border-radius: 5px;
        } 
         
`;

export const ItemTitulo = styled.div`
        color: white;
        font-weight: 600;
        font-size: 16px;
`;
export const ItemPrecio = styled.div`
        color: white;
        font-weight: 600;
        font-size: 16px;
        padding-right: 3px;
`;
export const ItemCant = styled.div`
        color: white;

`;
export const Divider = styled.div`
        margin: 20px  20px ; 
        margin-left: 10%;
        margin-right: 10%;
        border: 0.5px solid black;
        width: 90%;
`;

export const PriceConteiner = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      color: white;
`;
