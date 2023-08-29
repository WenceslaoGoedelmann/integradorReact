import { motion } from "framer-motion";
import { styled } from "styled-components";

export const CategoriaContainerStyled = styled(motion.div)`
    padding: 10px 15px;
    color: white;
    border-radius: 10px;
    cursor: pointer;
    border: 1px solid rgb(70, 70, 70);
    box-shadow: 10px 5px 5px black;
    background-color: ${({ selected }) =>
    selected ? 'grey' : 'rgb(50, 50, 50)'};
`;
export const CategoriasContainerStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
`;


