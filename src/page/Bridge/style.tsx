import styled from "styled-components";

export const BridgeStyle = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #8E8E8E;
    font-weight: 400;
    &.active{
      background: #F4F4F5;
      box-shadow: 3px 3px 8px 0 rgba(0,0,0,0.11), -3px -3px 8px 0 #FFFFFF;
      border-radius: 16px;
      font-family: PingFangSC-Semibold;
      color: #282828;
      font-weight: 600;
    }
  };
`

export const IssueModalStyle = styled.div`
  button{
    border-radius: 0;
    height: 40px;
  }
  position: absolute;
  .ant-modal-body{
    display: flex;
    flex-direction: column;
    padding: 0;
  }
`
export const IssueModalTip = styled.div`
  margin-top: 24px;
  margin-left: 24px;
  margin-right: 24px;
  img{
    width: 16px;
    height: 16px;
    margin-left:8px;
    margin-right: 6px;
  }
  display: flex;
  width: 470px;
  height: 28px;
  background: #FFEBE3;
  border-radius: 6px;
  align-items: center;
`
export const IssueTransferInfoStyle = styled.div`
  display: flex;
  flex-direction: column;
 align-items: center;
  margin-top: 24px;
  .info-title{
    font-size: 12px;
    color: #282828;
  }
  .transfer-amount{
    margin-top: 4px;
    font-size: 24px;
    color: #282828;
    font-weight: bold;
  }
  .transfer-tip{
    img{
      margin-right: 4px;
    }
    display: flex;
  }
`

export const VaultBtcAddressStyle =styled.div`
  margin-right: 24px;
  margin-left: 24px;
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  .title{
    font-size: 12px;
    color: #282828;
    font-weight: bold;
  }
  .address{
    margin-top: 8px;
    height: 40px;
    background: #EFEFEF;
    border-radius: 4px;
    padding: 16px 12px;
    display: flex;
    align-items: center;
  }
`
export const VaultOpReturnStyle =styled.div`
  margin-right: 24px;
  margin-left: 24px;
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  .title{
    font-size: 12px;
    color: #282828;
    font-weight: bold;
  }
  .address{
    margin-top: 8px;
    height: 56px;
    background: #EFEFEF;
    border-radius: 4px;
    padding: 16px 12px;
    display: flex;
    align-items: center;
    word-break:break-all;
  }
`
export const IssueModalFooter = styled.div`
  background: #F6F6F6;
  margin-top: 30px;
  padding: 24px;
 li{
   display: flex;
   justify-content: space-between;
   margin-bottom: 12px;
   .title{
     font-size: 12px;
     color: #8E8E8E;
   }
   .content{
     font-size: 12px;
     color: #282828;
   }
 }
`

export const RedeemModalStyle = styled.div`
  position: absolute;
  .ant-modal-body{
    display: flex;
    flex-direction: column;
    padding: 0;
  }
`
export const RedeemModalTip = styled.div`
  padding: 4px;
  margin-top: 24px;
  margin-left: 24px;
  margin-right: 24px;
  img{
    width: 16px;
    height: 16px;
    margin-left:8px;
    margin-right: 6px;
    margin-top: 4px;
  }
  display: flex;
  width: 470px;
  height: 100%;
  background: #FFEBE3;
  border-radius: 6px;
`
export const RedeemTimeStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;
  .title{
    font-size: 14px;
    color: #282828;
  }
  .time{
    font-size: 32px;
    color: #EA754B;
    font-weight: bold;
  }
`
export const CancelRedeemStyle =styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;
 button{
   width: 340px;
   height: 44px;
 }
  .force-redeem{
    font-size: 14px;
    color: #EA754B;
    margin-top: 16px;
  }
`
export const RedeemModalFooterStyle = styled.div`
  background: #F6F6F6;
  margin-top: 30px;
  padding: 24px;
  li{
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
    .title{
      font-size: 12px;
      color: #8E8E8E;
    }
    .content{
      font-size: 12px;
      color: #282828;
    }
  }
`
