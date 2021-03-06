import styled from "styled-components";

export const DialogItemList = styled.div`
  .itemBox {
    width: 356px;
    height: 64px;
    opacity: 0;
    background: #f7f7f7;
    // border: 1px solid black;
  }
`;

export const DialogItem = styled.div`
  width: 356px;
  height: 64px;
  .item {
    display:flex;
    justify-content: space-between;
    width: 356px;
    height: 64px;
    .left-item {
      display:flex;
      flex-direction:row;
      width: 100px;
      height: 64px;
      margin-left:16px;
      align-items: center;
      .left-icon{
        width:20px;
        height:20px;
        margin-right: 7px;
        & > svg {
          width: 20px;
          height: 20px;
        }
      }
      .left-coinIcon{
        width:20px;
        height:20px;
        margin-right: 7px;
        & > img {
          width: 20px;
          height: 20px;
        }
      }
      .right-info{
        display:flex;
        flex-direction:column;
        margin:auto 0px;
        width:80px;
        &>span:nth-child(1){
          width:80px;
          line-height:22px;
          height:22px;
          font-family: PingFangSC-Medium;
          font-size: 16px;
          color: #282828;
          font-weight: 500;
        }
        &>span:nth-child(2){
          height:17px;
          line-height:17px;
          width:80px;
          font-family: PingFangSC-Regular;
          font-size: 12px;
          color: #8E8E8E;
          font-weight: 400;
        }
      }
    }
    .right-item {
      height: 20px;
      margin:22px; 24px;
      line-height: 20px;
      font-family: PingFangSC-Medium;
      font-size: 14px;
      color: #908E8E;
      text-align: right;
      font-weight: 500;
    }
  }


`;
