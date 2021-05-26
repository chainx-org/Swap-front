import { Tooltip } from "antd";
import styled from "styled-components";

const Item = styled(Tooltip)`
  .title-info {
    display: flex;
    justify-content: space-between;
    padding-left: 16px;
    padding-right: 16px;
    margin: 32px 0px 0 0px;
    & > span {
      display: inline-block;
      text-align: right;
      letter-spacing: 0.1px;
      font-size: 12px;
      color: #3f3f3f;
      font-weight: 500;
      line-height: 17px;
    }
  }

  .ConnectWallet {
    width: 392px;
    height: 44px;
    padding-left: 16px;
    padding-right: 16px;
    margin: 8px 0px 15px 16px;
    position: static;
    .ant-btn {
    }
  }
  .cannot-swap {
    width: 392px;
    height: 44px;
    padding-left: 16px;
    padding-right: 16px;
    margin: 8px 0px 15px 16px;
    position: static;
    background: #b8b8b9;
    border-radius: 12px;
  }
  .title-info {
    display: flex;
    justify-content: space-between;
    padding-left: 16px;
    padding-right: 16px;
    margin: 32px 0px 0 0px;
    & > span {
      display: inline-block;
      text-align: right;
      letter-spacing: 0.1px;
      font-size: 12px;
      color: #3f3f3f;
      font-weight: 500;
      line-height: 17px;
    }
  }
  .buttonDiv {
    width: 392px;
    height: 44px;
    padding-left: 16px;
    padding-right: 16px;
    margin: 8px 0px 15px 16px;
    position: static;
    .ant-btn {
    }
  }
`;

export default Item;
