import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import styled from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  html {
  font-family: 'JetBrains', 'Arial', sans-serif;
  font-size: 18px;
  box-sizing: border-box;
  }

  body {
    background: linear-gradient(180deg, #14131B 0%, #08070B 100%);
  }
`;

const StyledApp = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StyledApp>
    <GlobalStyle />
    <App />
  </StyledApp>
);
