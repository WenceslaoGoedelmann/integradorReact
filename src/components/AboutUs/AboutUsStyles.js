import { styled } from "styled-components";

export const AboutUsContainerStyled = styled.div`
margin: 0 auto;
padding: 50px 50px;
display: flex;
align-items: center;
justify-content: space-around;
gap: 15px;
`;
export const AboutUsContainerText = styled.div`
display: flex;
flex-direction: column;
gap: 10px ;
h2{
    color: rgb(158, 158, 6);
    font-size: 30px;
}
  p {
    color: white;
    font-size: 20px;
    font-weight: 700;
    max-width: 600px;
    }  
`;
export const AboutUsContainerImg = styled.div`
img{
    width: 300px;
    height: 200px;
    border-radius: 5px;
}
`;