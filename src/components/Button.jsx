import React from 'react';
import styled from 'styled-components';
import { generatePassword } from '../functions';

const StyledButton = styled.button`
  width: 500px;
  height: 60px;
  background-color: rgb(165, 255, 172);
  cursor: pointer;
  font-size: 1.5rem;
  margin-bottom: 1rem;

  @media (max-width: 600px) {
    width: 300px;
  }
`;
export const Button = ({ setPassword, state, length }) => {
  return (
    <StyledButton onClick={() => setPassword(generatePassword(length, state))}>
      GENERATE
    </StyledButton>
  );
};
