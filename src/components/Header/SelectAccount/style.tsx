import styled from "styled-components";

export const SelectAccountStyle = styled.div`
  display: flex;
  width: 222px;
  height: 32px;
  cursor: pointer;
  // justify-content: space-between;
  margin-right: 16px;
  align-items: center;
  background: #fff8e3;
  border: 1px solid #282828;
  border-radius: 18px;
  .avatar {
    margin-right: 8px;
  }
  .icon {
    margin-left: 4px;
  }
  .current-icon {
    // width: 16px;
    // height: 16px;
    // border: 1px solid black;
    margin-left: 8px;
    margin-right: 8px;
    margin-top: -4px;
    & > svg {
      width: 16px;
      height: 16px;
    }
  }
  .current-name {
    width: 82px;
    height: 17px;
    line-height: 17px;
    margin-right: 16px;
    box-sizing: content-box;
    font-family: PingFangSC-Medium;
    font-size: 12px;
    color: #282828;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .current-address {
    width: 82px;
    height: 20px;
    line-height: 20px;
    margin-right: 16px;
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #282828;
    font-weight: 400;
    // overflow: hidden;
    // text-overflow: ellipsis;
    // white-space: nowrap;
  }
`;
