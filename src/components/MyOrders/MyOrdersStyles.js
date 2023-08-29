import { styled } from "styled-components";

export const MyOrdersContainer = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: column;

justify-content: center;
width:800px;
min-height:300px;
border-radius: 5px;
box-shadow: 10px 5px 5px black;
background:rgb(150, 150, 150);
h2{
        padding: 20px 0px;
        color:white;
}
`;

export const MyOrderCardContainer = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
        width: 500px;
       
        
        border-radius:5px;
        padding: 5px;
        background:rgb(100, 100, 100);
        margin:5px;
`;

export const ItemCardContainer = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid black;
        color:white;
        margin:5px;
        width: 400px;
        height: 60px;
        padding-bottom: 5px;
        img {
        height: 50px;
        width: 50px;
        border-radius: 5px;
        } 
`;

export const ItemsContainer = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: column;
align-content: center;
`;