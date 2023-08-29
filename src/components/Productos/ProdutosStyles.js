import { styled } from "styled-components";

export const ProductosContainerStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 15px;
    padding: 40px 0;
`;

export const ProductoContainerStyled = styled.div`
    background:rgb(150, 150, 150);
    padding: 20px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    margin-bottom: 20px;
    box-shadow: 10px 5px 5px black;
    align-items: center;
    width: 290px;
    img{
    width: 200px;
    height: 200px;
    border-radius: 10%;
    box-shadow: 10px 5px 5px black;
    }
`;

export const CardProductoTop = styled.div`
    display: flex;
    justify-content: center;
    
    h3 {
    font-size: 16px;
    font-weight: 600;
    color: white;
    }
`;
export const CardProductoInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    gap: 20px;
`;
export const CardProductoMid = styled.div`
    display: flex;
    justify-content: space-between; 
    p {
    font-weight: 800;
    color: white;
    padding-right: 5px;
  }
  span {
    font-weight: 800;
    color: white;
  }
`;
export const CardProductoBot = styled.div`
    display: flex;
    justify-content: space-between; 
    p {
    font-weight: 800;
    color: white;
    padding-right: 5px;
  }
  span {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const BtnAgregar = styled.button`
    background:rgb(87, 87, 87);
    height: 40px;
    width: 130px;
    cursor: pointer;
    border: none;
    border-radius: 10px;
    font-weight: 800;
    color: white;
    box-shadow: 10px 5px 5px black;
`;
export const BtnMasMenos = styled.button`
    background: rgb(50, 50, 50);
    height: 30px;
    width: 80px;
    cursor: pointer;
    border: none;
    border-radius: 10px;
    font-weight: 800;
    margin:5px;
    color: white;
    box-shadow: 10px 5px 5px black;
    border: 1px solid rgb(70, 70, 70);
    &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
 `;

export const ButtonConteiner= styled.div`
display: flex;
justify-content: center;
`;
