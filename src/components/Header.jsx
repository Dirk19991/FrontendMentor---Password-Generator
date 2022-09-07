import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

const StyledName = styled.div`
  color: white;
  font-size: 1.2rem;
`;

const StyledPassword = styled.div`
  width: 100%;
  height: 70px;
  background-color: rgb(36, 35, 43);
  display: flex;
  padding: 1.5rem;
  align-items: center;
  justify-content: space-between;
  font-size: 2rem;
`;

const Wrapper = styled.div`
  cursor: pointer;
`;

export const Header = ({ password }) => {
  return (
    <>
      <StyledName>Password Generator</StyledName>
      <StyledPassword>
        {password}
        <Wrapper>
          <FontAwesomeIcon
            onClick={() => navigator.clipboard.writeText(password)}
            icon={faCopy}
            color='rgb(165, 255, 172)'
          />
        </Wrapper>
      </StyledPassword>
    </>
  );
};
