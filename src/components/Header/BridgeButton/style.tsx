import styled from "styled-components";
const BridgeDiv = styled.div`
  .BridegeBox {
    display: flex;
    justify-content: space-between;
    width: 120px;
    height: 32px;
    margin: 0 37px 0 7px;
    .Bridege {
      display: inline-block;
      width: 40px;
      font-family: PingFangSC-Medium;
      line-height: 30px;
      font-size: 15px;
      color: #adadad;
      font-weight: 500;
      text-align: center;
    }
    .Bridege:hover {
      color: black;
    }
    .clickBridege {
      display: inline-block;
      width: 40px;
      font-family: PingFangSC-Medium;
      line-height: 30px;
      font-size: 15px;
      font-weight: 500;
      text-align: center;
      color: black;
    }
  }
`;

export default BridgeDiv;
