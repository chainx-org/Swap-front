import styled from "styled-components";

export const HistoryStyle = styled.div`
  background: #F4F4F5;
  box-shadow: 8px 8px 13px 0 rgba(0, 0, 0, 0.08), -8px -8px 13px 0 #FFFFFF;
  border-radius: 16px;
  margin-top: 29px;
  padding: 48px 40px 33px;
`
export const FunctionSwitchButton = styled.div`
  font-size: 16px;
  color: #8E8E8E;
  text-align: center;
  font-weight: 400;
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
  }
  li{
    width: 254px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    &.active{
      background: #F4F4F5;
      box-shadow: 3px 3px 8px 0 rgba(0,0,0,0.11), -3px -3px 8px 0 #FFFFFF;
      border-radius: 16px;
      font-size: 16px;
      color: #282828;
      text-align: center;
      font-weight: 600;
    }
  };
`
export const TableStyle = styled.div`
  width: 85vw;
  margin-top: 36px;
  .processing{
    font-size: 12px;
    color: #E88B00;
    text-align: right;
    line-height: 16px;
    font-weight: 400;
  }
  .fail{
    font-size: 12px;
    color: #F5222D;
    text-align: right;
    line-height: 16px;
    font-weight: 400;
  }
  .ant-table-cell{
    background: #F4F4F5;;
    font-size: 12px;
    color: #8E8E8E;
    font-weight: 400;
  }
  .ant-table-tbody{
    > tr:hover:not(.ant-table-expanded-row) > td,.ant-table-row-hover,.ant-table-row-hover>td{
      background:#F4F4F5!important;
    }
  }
  .ant-table-fixed{
    .ant-table-row-hover, .ant-table-row-hover>td{
      background: #F4F4F5!important;
    }
  }
`

export const ModalStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 16px;
  height: 761px;
  .card-header{
    font-size: 14px;
    color: #282828;
    text-align: center;
    font-weight: 400;
  }
  .time{
    font-size: 32px;
    color: #EA754B;
    text-align: right;
    font-weight: 600;
  }
  .line{
    width: 420px;
    height: 2px;
    background: #F4F4F5;
    box-shadow: -1px -1px 2px 0 rgba(0,0,0,0.04), 1px 1px 2px 0 #FFFFFF;
    margin-top: 32px;
  }
  .dotted-line{
    width: 420px;
    height: 2px;
    border: 1px dashed #E5E5E5;
    box-shadow: 0 2px 1px 0 #FFFFFF;
    margin-top: 23.5px;
  }
`
