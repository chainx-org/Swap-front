import styled from "styled-components";

export const ChainStatusStyle = styled.div`
  width: 200px;
  height: 58px;
  border-radius: 16px;
  img {
    width: 111px;
    height: 22px;
  }
  .chainStatus-content {
    padding: 19px 0px 19px 16px;
  }
  .status-content {
    margin-top: 2px;
    display: flex;
    align-items: center;
    .status-text {
      font-size: 10px;
      color: #8e8e8e;
      font-weight: 400;
    }
  }
`;
export const PointStyle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #34c69a;
`;
