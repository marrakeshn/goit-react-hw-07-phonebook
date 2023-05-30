// import styled from 'styled-components';
import styled from '@emotion/styled';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-bottom: 10px;
  color: #8d8d8d;
`;

export const Input = styled.input`
  background-color: #000;
  color: #fff;
  padding: 5px 10px;
`;

export const Button = styled.button`
  padding: 5px;
  border-radius: 4px;
  cursor: pointer;
  min-width: 80px;
  padding: 5px 10px;
  border-radius: 20px;
  background-color: #8d8d8d;
  color: #000;
`;

export const Form = styled.form`
  background-color: #424242;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid #000;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.7);
  min-width: 660px;
`;
