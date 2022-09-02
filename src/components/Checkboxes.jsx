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
    left: 6px;
    top: 2px;
    width: 5px;
    height: 10px;
    border: solid black;
    border-width: 0 3px 3px 0;
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
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #eee;
`;

const Flex = styled.div`
  width: 500px;
  flex-direction: column;
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
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
