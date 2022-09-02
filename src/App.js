import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Header } from './components/Header';
import { Button } from './components/Button';
import { Checkboxes } from './components/Checkboxes';
import { passwordValues } from './passwordValues';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  width: 500px;
  gap: 1.5rem;
`;

export const App = () => {
  const [password, setPassword] = useState('Password');

  const [state, setState] = useState({
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
  });

  return (
    <StyledApp>
      <Header password={password} />
      <Checkboxes state={state} setState={setState} />
      <Button state={state} setPassword={setPassword} />
    </StyledApp>
  );
};
