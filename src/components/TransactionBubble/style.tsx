import styled from "styled-components";

export const TransactionBubbleStyle = styled.div`
  margin-right: 24px;
  margin-top: 24px;
`
export const IssueBubbleStyle = styled.div`
  width: 400px;
  height: 88px;
  background: #fff;
  border: 1px solid #EFEFEF;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 20px 24px;
  margin-bottom: 16px;
  justify-content: space-between;
  img{
    width: 16px;
    height: 16px;
  }
  .transaction-confirmation{
    display: flex;
    font-size: 16px;
    .confirmation-num{
      margin-left: 8px;
      font-weight: bold;
    }
    .confirmation-sum{
      color: #8E8E8E;
      font-weight: bold;
    }
  }
  .circle{
    width: 40px;
    height: 40px;
    background: #34C69A;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    color: #FFFFFF;
    font-weight: bold;
  }
  .btc-amount{
    font-size: 16px;
    color: #282828;
    font-weight: bold;
  }
`

export const RedeemBubbleStyle = styled.div`
  width: 400px;
  height: 88px;
  background: #fff;
  border: 1px solid #EFEFEF;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 20px 24px;
  margin-bottom: 16px;
  justify-content: space-between;
  img{
    width: 16px;
    height: 16px;
  }
  .remaining-time-title{
    display: flex;
    font-size: 16px;
    .remaining-time{
      font-weight: bold;
      margin-left: 8px;
      color: #EA754B;
    }
  }
  .circle{
    width: 40px;
    height: 40px;
    background: #EA754B;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    color: #FFFFFF;
    font-weight: bold;
  }
  .btc-amount{
    font-size: 16px;
    color: #282828;
    font-weight: bold;
  }
`

