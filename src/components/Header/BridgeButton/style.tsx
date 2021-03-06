import styled from "styled-components";
const BridgeDiv = styled.div`
  &.Box {
    // border: 1px solid black;
    position: relative;
    z-index: 1;
  }
  .BridegeBox {
    display: flex;
    justify-content: space-between;
    width: 47px;
    height: 32px;
    margin: 0 0px 0 7px;
    cursor: pointer;
    // border: 1px solid black;

    .Bridege {
      align-self: center;
      display: inline-flex;
      width: 40px;
      font-family: PingFangSC-Medium;
      line-height: 40px;
      height: 40px;
      font-size: 15px;
      color: #adadad;
      font-weight: 400;
      text-align: center;
    }
    .Bridege:hover {
      color: black;
    }
    .clickBridege {
      align-self: center;
      display: inline-flex;
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
      position: relative;
    }
  }
`;

export default BridgeDiv;
