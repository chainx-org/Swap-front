import React from 'react';
import { Button } from "antd";
import styled from 'styled-components';

const ButtonWrapper = styled(Button)`
  width: 392px;
  height: 44px;
`

interface ButtonProps{
  label: string;
  onClick?: () => void;
  className?: string;
}

const NormalButton = ({label, onClick, className= ''}: ButtonProps): React.ReactElement<ButtonProps> => {
  return (
    <ButtonWrapper className={className} type="primary" onClick={onClick}>
      {label}
    </ButtonWrapper>
  )
}

export default NormalButton
