import styled from "styled-components";

export const SelectAccountStyle = styled.div`
  &.selectBox {
    // border: 1px solid black;
    position: relative;
    z-index: 0;
  }
  .watting-connect {
    // display: flex;
    justify-content: space-between;
    width: 160px;
    height: 32px;
    cursor: pointer;
    margin-right: 16px;
    align-items: center;
    background: #fff8e3;
    border: 1px solid #fdca77;
    border-radius: 18px;
    position: relative;
    right: 0px;
    .icon {
      margin-left: 4px;
    }
    .current-icon {
      margin-left: 8px;
      margin-right: 8px;
      margin-top: -4px;
      svg {
        width: 16px;
        height: 16px;
      }
    }
    .current-info {
      width: 100%;
      font-family: NotoSansSC-Regular;
      font-size: 12px;
      color: #e9a840;
      font-weight: 400;
    }
  }
  .account-info {
    display: flex;
    width: auto;
    height: 32px;
    cursor: pointer;
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
    .current-user {
      display: flex;
      width: 104px;
      margin-left: 8px;
      margin-right: 16px;

      justify-content: space-between;
      .current-icon {
        margin-right: 8px;
        svg {
          width: 16px;
          height: 16px;
        }
      }
      .current-name {
        box-sizing: border-box;
        width: 82px;
        height: 17px;
        line-height: 17px;
        font-family: PingFangSC-Medium;
        font-size: 12px;
        color: #282828;
        font-weight: 500;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-right: 0;
      }
    }
    .current-address {
      height: 20px;
      line-height: 20px;
      margin-right: 16px;
      font-family: PingFangSC-Regular;
      font-size: 12px;
      color: #282828;
      font-weight: 400;
      overflow: hidden;
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
    height: 20px;
    line-height: 20px;
    margin-right: 16px;
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #282828;
    font-weight: 400;
    overflow: hidden;
  }
`;
