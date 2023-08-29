import { styled } from "styled-components";
export const UsuarioContainer = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
align-content: center;
background:rgb(150, 150, 150);
box-shadow: 10px 5px 5px black;
width: 800px;
margin-top: 150px;
margin-bottom:50px;
border-radius: 5px;
`;
export const SaludoContainer = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: column;
align-content: center;
`;
export const InfoContainer = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: column;
align-content: center;
h2{
    color:white;
}
span{
    color:white;
}
`;

export const BtnLogout = styled.button`
     padding: 0.8rem 1.5rem;
  outline: none;
  border: none;
  border-radius: 10px;
  background: rgb(50, 50, 50);
  color: white;
  text-transform: uppercase;
  font-weight: 400;
  cursor: pointer;
  margin-top: 15px;
  box-shadow: 10px 5px 5px black;
`;