import styled from "styled-components";

export const DivDialog = styled.div`
  .mask {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    right: 0;
    background-color: #000;
    opacity: 0.4;
    color: #f00;
  }
  .content {
    position: fixed;
    height: 300px;
    width: 300px;
    left: 50%;
    top: 50%;
    background-color: #fff;
    transform: translate(-50%, -50%);
  }
`;
