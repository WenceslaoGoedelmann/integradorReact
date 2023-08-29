import { styled } from "styled-components";

export const HeroContainerStyled = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
margin: 0 auto; 
align-content: center;
padding: 110px 50px 50px 50px; 
gap: 15px;
`;

export const HeroContainerText = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 15px;
h1 {
    color: white;
    font-size: 30px;
  }
  p {
    color: white;
    font-size: 20px;
    text-align: center;
    }  
`;
export const HeroContainerImg = styled.div`
img{
width: 350px;
height: 200px;
border-radius: 5px;
}
`;