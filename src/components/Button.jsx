import React from 'react';
import styled from 'styled-components';
import { generatePassword } from '../functions';

const StyledButton = styled.button`
  width: 500px;
  height: 60px;
  background-color: rgb(165, 255, 172);
  cursor: pointer;
`;
export const Button = ({ setPassword, state }) => {
  console.log(
    generatePassword(10, {
      uppercase: true,
      lowercase: false,
      numbers: false,
      symbols: false,
    })
  );

  return (
    <StyledButton onClick={() => setPassword(generatePassword(10, state))}>
      Generate
    </StyledButton>
  );
};
