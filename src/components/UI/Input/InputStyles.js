import styled from 'styled-components';

export const InputContainer= styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 50%;
`;

export const InputTitle= styled.label`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  `;

export const InputStyled = styled.input`
  background-color: white;
  outline: none;
  border: ${({ isError }) => (isError ? '1px solid #fb103d ' : 'none')};
  border-radius: 8px;
  height: 30px;
  color: white;
  width: 70%;
  margin-top: 1rem;
`;

export const ErrorMessageStyled  = styled.p`
  margin: 0;
  margin-top: 5px;
  color: white;
  font-size: 14px;
`;
