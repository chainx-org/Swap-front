import React from 'react';
import { Button } from "antd";
import styled from 'styled-components';

const ButtonWrapper = styled(Button)`
  width: 392px;
  height: 44px;
  margin: 16px 0 0 0;
`

interface ButtonProps{
  label: string;
  onClick?: () => void;
}

const NormalButton = ({label, onClick}: ButtonProps): React.ReactElement<ButtonProps> => {
  return (
    <ButtonWrapper type="primary" onClick={onClick}>
      {label}
    </ButtonWrapper>
  )
}

export default NormalButton
