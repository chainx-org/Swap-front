import styled from "styled-components";

export const DivDialog = styled.div`
  .mask {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    right: 0;
    top: 0px;
    background-color: #000;
    opacity: 0.4;
    color: #f00;
    z-index: 1;
  }
  .content {
    position: fixed;
    // height: 356px;
    width: 379px;
    left: 523px;
    top: 88px;
    opacity: 1;
    background-color: #fff;
    background: rgba(255, 255, 255, 0.9);
    border: 1px solid #efefef;
    border-radius: 24px 24px 16px 16px;
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.08);
    z-index: 2;
  }
`;

export const DialogItemList = styled.div`
  .itemBox {
    width: 356px;
    height: 64px;
    opacity: 0;
    background: #f7f7f7;
    border: 1px solid black;
  }
`;
