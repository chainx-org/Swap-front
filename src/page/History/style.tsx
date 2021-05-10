import styled from "styled-components";

export const HistoryStyle = styled.div`
  background: #F4F4F5;
  box-shadow: 8px 8px 13px 0 rgba(0,0,0,0.08), -8px -8px 13px 0 #FFFFFF;
  border-radius: 16px;
  margin-top: 29px;
`
export const FunctionSwitchButton = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #8E8E8E;
  ul{
    width: 520px;
    height: 52px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-image: linear-gradient(134deg, #FAFAFB 0%, #F4F4F5 100%);
    box-shadow: -3px -3px 4px 0 rgba(0,0,0,0.10), 3px 3px 4px 0 #FFFFFF;
    border-radius: 19px;
    margin-top: 48px;
    margin-left: 40px;
  }
  li{
    width: 208px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    &.active{
      background: #fff;
      color: #282828;
    }
  };
`
export const TableStyle = styled.div`
 margin-top: 36px;
  .ant-table-cell{
    background: #F4F4F5;;
  }
`
