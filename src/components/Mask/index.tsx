import React from 'react';
import styled from 'styled-components';

const MaskWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  background-color: #000;
  opacity: 0.4;
  color: #f00;
  z-index: 0;
`

const Mask = (): React.ReactElement => {
  return (
    <MaskWrapper/>
  )
}

export default Mask
