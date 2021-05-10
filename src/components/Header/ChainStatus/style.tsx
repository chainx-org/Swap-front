import styled from "styled-components"

export const ChainStatusStyle = styled.div`
  width: 200px;
  height: 58px;
  background: #F4F4F5;
  box-shadow: 3px 3px 8px 0 rgba(0,0,0,0.11), -3px -3px 8px 0 #FFFFFF;
  border-radius: 16px;
  img{
    height: 27px;
  }
  .chainStatus-content{
    padding:7.5px 29.5px;
  }
  .status-content{
    margin-top: 2px;
     display: flex;
    align-items: center;
    .status-text{
      font-size: 10px;
      color: #8E8E8E;
      font-weight: 400;
    }
  }
`
export const PointStyle = styled.div`
    width: 10px;
    height: 10px;
  border-radius: 50%;
  background:#34C69A ;
  `