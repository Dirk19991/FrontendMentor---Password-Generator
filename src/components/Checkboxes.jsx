import { useState } from 'react';
import styled from 'styled-components';

const StyledCheckbox = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:hover {
    > span {
      background-color: #ccc;
    }
  }

  & input:checked ~ span {
    background-color: rgb(165, 255, 172);
  }

  & span::after {
    content: '';
    position: absolute;
    display: none;
  }

  & input:checked ~ span::after {
    display: block;
  }

  & span::after {
    left: 0.33rem;
    top: 0.12rem;
    width: 0.3rem;
    height: 0.55rem;
    border: solid black;
    border-width: 0 0.16rem 0.16rem 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;
const Checkmark = styled.span`
  position: absolute;
  top: 0rem;
  left: 0;
  height: 1.15rem;
  width: 1.15rem;
  background-color: #eee;

  @media (max-width: 600px) {
    top: 0.35rem;
  }
`;

const Flex = styled.div`
  width: 500px;
  flex-direction: column;
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  padding: 0.5rem;

  @media (max-width: 600px) {
    width: 300px;
  }
`;

export const Checkboxes = ({ state, setState }) => {
  return (
    <Flex>
      <StyledCheckbox>
        Include Uppercase Letters
        <Input
          type='checkbox'
          name='uppercase'
          id='uppercase'
          checked={state.uppercase}
          onChange={() => setState({ ...state, uppercase: !state.uppercase })}
        />
        <Checkmark />
      </StyledCheckbox>

      <StyledCheckbox>
        Include Lowercase Letters
        <Input
          type='checkbox'
          name='lowercase'
          id='lowercase'
          checked={state.lowercase}
          onChange={() => setState({ ...state, lowercase: !state.lowercase })}
        />
        <Checkmark />
      </StyledCheckbox>
      <StyledCheckbox>
        Include Numbers
        <Input
          type='checkbox'
          name='numbers'
          id='numbers'
          checked={state.numbers}
          onChange={() => setState({ ...state, numbers: !state.numbers })}
        />
        <Checkmark />
      </StyledCheckbox>
      <StyledCheckbox>
        Include Symbols
        <Input
          type='checkbox'
          name='symbols'
          id='symbols'
          checked={state.symbols}
          onChange={() => setState({ ...state, symbols: !state.symbols })}
        />
        <Checkmark />
      </StyledCheckbox>
    </Flex>
  );
};
