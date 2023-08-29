import { styled } from "styled-components";

export const ContactContainerStyled = styled.div`
    display: flex;
    flex-direction: row;
    padding: 30px;
    justify-content: space-evenly;
`;
export const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    
    b {
        color: white;  
        font-size: 20px;
        font-weight:250;
        padding-bottom: 5px;
    }
    span {
        color: white; 
        padding: 3px 0;
    }
`;
export const Redes = styled.div`
    display: flex;
    flex-direction: column;
    b {
        color: white;  
        font-size: 20px;
        font-weight:250;
        padding-bottom: 5px;
    }
`;
export const LinksRedes = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    img{
    height: 35px;
    width: 35px;
    }

`;
