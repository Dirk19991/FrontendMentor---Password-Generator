import React from 'react';
import styled from 'styled-components';

const Flex = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  padding-bottom: 0;
  font-size: 2rem;
`;

const Length = styled.div`
  color: rgb(165, 255, 172);
  font-size: 2rem;
`;

const CharacterLength = styled.div`
  font-size: 2rem;
`;

export const Character = ({ length }) => {
  return (
    <Flex>
      <CharacterLength>Character Length</CharacterLength>
      <Length>{length}</Length>
    </Flex>
  );
};
