import styled from "styled-components";
import React from "react";

export const RedeemStyle = styled.div`
  margin-top: 24px;
  width: 500px;
  background: #F4F4F5;
  box-shadow: 8px 8px 13px 0 rgba(0,0,0,0.08), -8px -8px 13px 0 #FFFFFF;
  border-radius: 16px;
  padding: 40px;
  .topContent {
    padding: 20px 0;
  }
`

export const AccountSwitch = styled.div`
  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const RedeemBtcInputStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 24px;
  color: #282828;
  .redeemNum {
    display: flex;
    font-family: PingFangSC-Semibold;
    fon t-size: 32px;
    color: #282828;
    line-height: 44px;
    font-weight: 550;
    line-height: 44px;
    .ant-input-number {
      width: 200px;
      height: 44px;
    }
  }
  .balance {
    font-family: PingFangSC-Semibold;
    font-size: 14px;
    color: #282828;
    font-weight: 600;
    margin: 20px 0 40px;
  }
  .arrow {
    padding: 20px 0;
  }
  .receive {
    font-family: PingFangSC-Regular;
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 10px;
  }
  .redeemResNum {
    font-family: PingFangSC-Semibold;
    font-size: 24px;
    color: #282828;
    font-weight: 600;
    margin-bottom: 24px;
  }
`


export const XBtcBalanceStyle = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  font-size: 14px;
  color: #282828;
  font-weight: bold;
`
export const BtcAddressStyle = styled.div`
  margin-top:16px;
  .btc-address-info{
    display: flex;
    justify-content: space-between;
    .btc-address-title{
      font-size: 12px;
      color: #282828;
      font-weight: bold;
    }
    .btc-fee{
      font-size: 12px;
      color: #282828;
    }
  }
  .ant-input {
    width: 419px;
    height: 44px;
    font-size: 14px;
    color: #8E8E8E;
    line-height: 44px;
    margin-top: 8px;
  }
`
export const RedeemFooterStyle = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;

  .redeem-footer-title {
    font-size: 12px;
    color: #282828;
  }

  .redeem-footer-num {
    font-size: 24px;
    color: #282828;
    margin-top: 8px;
  }

  button {
    width: 419px;
    height: 44px;
    margin-top: 20px;
  }
`
