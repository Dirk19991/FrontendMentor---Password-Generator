import React from 'react';
import styled from 'styled-components';

const Flex = styled.div`
  width: 500px;

  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  font-size: 22px;
`;

export const Character = ({ length }) => {
  return (
    <Flex>
      <div>Character Length</div>
      <div>{length}</div>
    </Flex>
  );
};
