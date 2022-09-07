import React from 'react';
import styled from 'styled-components';
import { passwordStrength } from '../functions';

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  background: linear-gradient(180deg, #14131b 0%, #08070b 100%);
  padding: 1.5rem;
  width: 500px;

  @media (max-width: 600px) {
    width: 300px;
  }
`;

const StyledStrength = styled.div`
  font-size: 22px;
`;

const StrengthScale = styled.div`
  display: flex;
  gap: 4px;
`;

const StrengthBar = styled.div`
  heigth: 12px;
  width: 10px;
  border: 2px solid white;
  background-color: ${(props) => props.color};
`;

const strengthArr = [1, 1, 1, 1];

export const Strength = ({ length, state }) => {
  const states = Object.values(state).reduce((a, b) => {
    if (b === true) {
      return (a += 2);
    } else {
      return a;
    }
  }, 0);

  let strengthCount = passwordStrength(length, states);

  return (
    <Flex>
      <StyledStrength>STRENGTH</StyledStrength>
      <StrengthScale>
        {strengthArr.map((elem, index) => {
          --strengthCount;
          return strengthCount >= 0 ? (
            <StrengthBar color='rgb(165, 255, 172)' key={index}></StrengthBar>
          ) : (
            <StrengthBar key={index}></StrengthBar>
          );
        })}
      </StrengthScale>
    </Flex>
  );
};
