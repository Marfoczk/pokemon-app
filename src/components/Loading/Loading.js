import React from 'react';
import { LoopCircleLoading } from 'react-loadingg';
import styled from 'styled-components'

const StyledDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

const Loading = () => {

  return (
    <StyledDiv>
      <LoopCircleLoading />
    </StyledDiv>
  )
}


export default Loading;