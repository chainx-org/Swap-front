import styled from "styled-components";

export const CoinInfoWrapper = styled.div`
  &.contentDiv {
    position: relative;
    z-index: 1;
  }
  .arrowDown {
    position: absolute;
    width: 16px;
    height: 16px;
    top: 60%;
    left: 50%;
    transform: translateX(-50%);
  }
  .numWrapper {
    width: 100%;
    padding: 29.5px 72px 14.5px 72px;
    .numInfo {
      background: rgba(255, 255, 255, 0.9);
      border: 1px solid #efefef;
      border-radius: 20px;
      white-space: nowrap;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 256px;

      .coinName {
        display: flex;
        align-items: center;
        padding: 10px 89px 10px 10px;
        > span,
        img {
          height: 20px;
          padding-right: 6px;
        }
        .name {
          font-size: 14px;
          color: #282828;
          font-weight: 500;
        }
      }
      .num {
        font-size: 14px;
        color: #282828;
        font-weight: 500;
        padding: 10px 16px 10px 0;
      }
      &:first-child {
        margin-bottom: 48px;
      }
    }
  }
`;

export const PriceWrapper = styled.div`
  padding: 16px;

  .field {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 12px;
    .fieldName {
      font-size: 12px;
      color: #908e8e;
      line-height: 17px;
    }
    .fieldContent {
      font-family: PingFangSC-Medium;
      font-size: 12px;
      color: #3f3f3f;
      font-weight: 500;
      line-height: 17px;
    }
  }

  .confirmButton {
    margin-top: 12px;
    width: 368px;
  }
`;

export const WaitingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 28px;
  .loading {
    height: 100px;
    width: 100px;
  }
  .waiting {
    font-size: 20px;
    color: #000000;
    text-align: center;
    line-height: 28px;
    font-weight: 500;
    font-family: PingFangSC-Medium;
  }
  .confirm {
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #908e8e;
    text-align: center;
    line-height: 28px;
    font-weight: 400;
  }
`;

export const StatusWrapper = styled.div`
  padding: 24px 16px 16px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .status {
    width: 64px;
    height: 64px;
    margin-bottom: 12px;
  }
  .statusValue {
    font-family: PingFangSC-Medium;
    font-size: 20px;
    color: #000000;
    text-align: center;
    line-height: 28px;
    font-weight: 500;
    margin-bottom: 24px;
  }
`;

export const ConfirmModalWrapper = styled.div`
  &.confirmBox {
    position: absolute;
    z-index: 3;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -85%);
  }
`;
