import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Header } from './components/Header';
import { Button } from './components/Button';
import { Checkboxes } from './components/Checkboxes';
import { Character } from './components/Character';
import { Strength } from './components/Strength';
import { passwordValues } from './passwordValues';
import Range from 'rc-slider';
import 'rc-slider/assets/index.css';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  width: 550px;
  gap: 1.5rem;

  @media (max-width: 600px) {
    width: 350px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 550px;
  background-color: rgb(36, 35, 43);

  align-items: center;
  justify-content: space-between;
`;

const StyledRange = styled(Range)`
  width: 475px;

  @media (max-width: 600px) {
    width: 315px;
  }
`;

export const App = () => {
  const [password, setPassword] = useState('Password');

  const [state, setState] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
  });

  const [length, setLength] = useState(1);

  return (
    <StyledApp>
      <Header password={password} />
      <Wrapper>
        <Character length={length} setLength={setLength} />
        <StyledRange
          onChange={(e) => setLength(e)}
          min={1}
          max={10}
          handleStyle={{
            backgroundColor: 'white',
            height: '1.5rem',
            opacity: 1,
            marginTop: '-0.7rem',

            width: '1.5rem',
            borderColor: 'white',
          }}
          trackStyle={{
            backgroundColor: 'rgb(165, 255, 172)',
          }}
          railStyle={{
            backgroundColor: 'black',
          }}
        />
        <Checkboxes state={state} setState={setState} />
        <Strength length={length} state={state} />
        <Button length={length} state={state} setPassword={setPassword} />
      </Wrapper>
    </StyledApp>
  );
};
