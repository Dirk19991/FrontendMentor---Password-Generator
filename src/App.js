import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Header } from './components/Header';
import { Button } from './components/Button';
import { Checkboxes } from './components/Checkboxes';
import { Character } from './components/Character';
import { passwordValues } from './passwordValues';
import Range from 'rc-slider';
import 'rc-slider/assets/index.css';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  width: 500px;
  gap: 1.5rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 450px;
  background-color: rgb(36, 35, 43);
  padding: 0.5rem;
  align-items: center;
  justify-content: space-between;
`;

export const App = () => {
  const [password, setPassword] = useState('Password');

  const [state, setState] = useState({
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
  });

  const [length, setLength] = useState(1);

  return (
    <StyledApp>
      <Header password={password} />
      <Wrapper>
        <Character length={length} setLength={setLength} />
        <Range
          onChange={(e) => setLength(e)}
          style={{ width: '475px' }}
          min={1}
          max={10}
          handleStyle={{
            backgroundColor: 'white',
            height: 28,
            opacity: 1,
            marginTop: -12,

            width: 28,
            borderColor: 'white',
          }}
          trackStyle={{
            backgroundColor: 'rgb(165, 255, 172)',
          }}
          railStyle={{
            backgroundColor: 'black',
            width: 475,
          }}
        />
        <Checkboxes state={state} setState={setState} />
        <Button length={length} state={state} setPassword={setPassword} />
      </Wrapper>
    </StyledApp>
  );
};
