import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  height: 100%;
  width: 100%;
`;

function Embed(props) {
  return (
    <>
      <h1>Company Logo could go here</h1>
      <Wrapper>
        <embed src={props} />
      </Wrapper>
    </>
  );
}
export default Embed;
