import styled from "styled-components";
const BridgeDiv = styled.div`
  .BridegeBox {
    display: flex;
    justify-content: space-between;
    width: 47px;
    height: 32px;
    margin: 0 0px 0 7px;
    cursor: pointer;
    .Bridege {
      align-self: center;
      display: inline-block;
      width: 40px;
      font-family: PingFangSC-Medium;
      line-height: 40px;
      height: 40px;
      font-size: 15px;
      color: #adadad;
      font-weight: 500;
      text-align: center;
    }
    .Bridege:hover {
      color: black;
    }
    .clickBridege {
      align-self: center;
      display: inline-block;
      width: 40px;
      // height: 100%;
      font-family: PingFangSC-Medium;
      line-height: 40px;
      height: 40px;
      font-size: 15px;
      font-weight: 500;
      text-align: center;
      color: black;
    }
    .BridgeList {
      display: none;
    }
    &:hover .BridgeList {
      display: block;
    }
  }
`;

export default BridgeDiv;
