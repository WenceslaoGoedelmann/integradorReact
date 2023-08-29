import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CartContainerStyled = styled(motion.div)`
  position: fixed;
  top: 100px;
  right: 0;
  z-index: 99;

  display: flex;
  flex-direction: column;
  align-items: center;
  
  gap: 30px;

  width: 450px;
  height: 82%;

  padding: 2rem;
  background-color: grey;
  border-radius: 0 0 0 1rem;
  box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.3);
`;
export const CartProductsContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  
  overflow: scroll;
  &::-webkit-scrollbar {
    background: transparent;
  }

  &::-webkit-scrollbar:horizontal {
    display: none;
  }

`;

export const CartItemContainer = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 400px;
        height: 100px;
        border: 1px solid black;
        border-radius:5px;
        padding: 5px;
        background-color:rgb(100, 100,100);
        img {
        height: 65px;
        width: 65px;
        border-radius: 5px;
        } 
         
`;

export const TitlePrice = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        color: white;
        h2{
            font-size: 15px;
        }
        p {
            font-size: 15px;
        }
`;

export const ItemHandler = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
`;

export const HandlerDownUp = styled.span`
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      padding:2px;
      border: 1px solid black;
      border-radius: 3px;
      color: white;
      cursor: pointer;
`;
export const HandlerQuantity = styled.span`
color: white;
`;
export const PriceConteiner = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      color: white;
`;

export const BtnsConteiner = styled.div`
      display: flex;
      align-items: center;
      gap: 10px;
`;

export const Btns = styled.button`
      background:rgb(87, 87, 87);
      height: 30px;
      width: 100px;
      cursor: pointer;
      border: none;
      border-radius: 10px;
      
      font-weight: 800;
      color: white;
      box-shadow: 10px 5px 5px black; 
       &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;



