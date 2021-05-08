import styled from "styled-components";
import React from "react";

export const RedeemStyle = styled.div`
  margin-top: 20px;
`
export const RedeemBtcInputStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;

  .ant-input-number {
    width: 200px;
    height: 44px;
    font-size: 32px;
    color: #8E8E8E;
    line-height: 44px;
  }

  .btc-title {
    font-size: 32px;
    color: #282828;
    font-weight: bold;
    margin-left: 16px;
  }

  img {
    width: 32px;
    height: 32px;
    margin-right: 16px;
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
