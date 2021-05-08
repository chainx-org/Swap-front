import styled from "styled-components";

export const RegisterVaultCardStyle = styled.div`
  width: 499px;
  height: 524px;
  background: #fff;
  margin: auto;
  margin-top: 24px;
  padding: 30px 40px;
  button{
    width: 419px;
    height: 44px;
    margin-top: 43px;
  }
  .card-title{
    font-size: 16px;
    color: #282828;
    font-weight: bold;
  }
`
export const RegisterAccountStyle = styled.div`
  background: #F6F6F6;
  border-radius: 6px;
  width: 419px;
  height: 70px;
  padding: 16px;
  font-size: 12px;
  color: #282828;
  margin-top: 20px;

  .current-account {
    margin-top: 4px;
    font-size: 12px;
    color: #8E8E8E;
  }
`
export const CollateralStyle = styled.div`
  .collateral-info{
    display: flex;
    margin-top: 20px;
    .collateral-title{
      font-size: 12px;
      color: #282828;
      font-weight: bold;
    }
    .collateral-minimum{
      margin-left: 5px;
      font-size: 12px;
      color: #8E8E8E;
    }
  }
  .input-collateral{
    margin-top: 8px;
    display: flex;
    align-items: center;
    .ant-input-number {
      width: 240px;
      height: 40px;
      font-size: 14px;
      color: #8E8E8E;
      line-height: 40px;
      margin-right: 16px;
    }
    .pcx-balance{
      font-size: 12px;
      color: #282828;
    }
  }
`
export const AgreementStyle = styled.div`
  font-size: 12px;
  color: #282828;
`
