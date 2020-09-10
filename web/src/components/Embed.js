import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.main`
  height: 100vh;
  width: 100%;
  display: block;
`;

function Embed({ url }) {
  return (
    <Wrapper>
      <embed src={url} type="text/html" height="100%" width="100%" />
    </Wrapper>
  );
}
export default Embed;
