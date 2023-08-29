import styled from 'styled-components';
import { Form as FormikForm } from 'formik';

export const ForgotContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  height: calc(100vh - 400px);
  margin-top: 110px;
  background:rgb(150, 150, 150);
  margin-left: 10%;
  margin-right: 10%;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 10px 5px 5px black;
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  gap: 20px;
`;
export const ForgotWrapper = styled.div`
width: 100%;
height: auto;
padding-bottom:250px;
display: flex;
justify-content: center;
background-color: rgb(50, 50, 50); 
`;