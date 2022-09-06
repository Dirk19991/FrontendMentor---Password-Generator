import React from 'react';
import styled from 'styled-components';
import { generatePassword } from '../functions';

const StyledButton = styled.button`
  width: 500px;
  height: 60px;
  background-color: rgb(165, 255, 172);
  cursor: pointer;
  font-size: 1.5rem;
`;
export const Button = ({ setPassword, state, length }) => {
  console.log(length);

  console.log(
    generatePassword(length, {
      uppercase: true,
      lowercase: false,
      numbers: false,
      symbols: false,
    })
  );

  return (
    <StyledButton onClick={() => setPassword(generatePassword(length, state))}>
      GENERATE
    </StyledButton>
  );
};
