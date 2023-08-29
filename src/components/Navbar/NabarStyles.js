import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const NavbarContainerStyled = styled.div`
    margin: 0 auto;
    width: 100%;
    height: 100px;
    padding: 0px 50px 0px 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed; 
    top: 0; 
    z-index: 1;
    background-color: rgb(50, 50, 50); 
`;
export const UserContainer = styled.div`
display: flex;
align-items: center;
gap: 20px; 
font-size: 20px;
color: white;
cursor: pointer;
margin-right:20px;

`;
export const RegisterContainer = styled.div`
display: flex;
align-items: center;
gap: 20px; 
font-size: 20px;
color: white;
cursor: pointer;
margin-right:20px;

`;

export const CartNavStyled = styled.div`
font-size: 20px; 
color: white;
cursor: pointer;
position: relative;

  span {
    position: absolute;
    top: -8px;
    right: -8px;
    text-align: center;
    background: blue;
    color: white;
    font-size: 10px;
    font-weight: 500;
    height: 18px;
    width: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 1px; 
    border-radius: 50%;
  }
`;

export const LinksContainer = styled.div`
display: flex;
`;

export const ModalOverlayStyled = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: calc(100vw - 450px);
  height: 100%;
  ${({ isHidden }) =>
    !isHidden &&
    css`
      backdrop-filter: blur(5px);
    `}
`;

