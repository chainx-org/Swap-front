import styled from "styled-components";

export const BtcInfoCardStyle = styled.div`
  width: 400px;
  height: 322px;
  background: #fff;
  border: 1px solid #EFEFEF;
  border-radius: 10px;
  margin-left: 24px;
  padding: 30px 20px;

  .card-title {
    font-size: 12px;
    color: #8E8E8E;
  }

  .card-item {
    margin-bottom: 20px;

    .card-address {
      margin-top: 4px;
      font-size: 12px;
      color: #009FCF;
    }

    .card-balance {
      font-size: 20px;
      color: #282828;
      font-weight: bold;
      margin-top: 4px;
    }
  }
`
export const TradeInfoStyle = styled.div`
  margin-top: 50px;
  padding: 16px;
  height: 107px;
  width: 360px;
  background: #F6F6F6;
  border-radius: 6px;
  .trade-info-header{
    display: flex;
    justify-content: space-between;
    .header-title{
      font-size: 12px;
      color: #3D3D3D;
    }
    .trade-hash{
      font-size: 12px;
      color: #009FCF;
      width: 125px;
    }
  }
  ul {
    display: flex;
    justify-content: space-between;
    text-align: center;
    margin-top: 20px;
    li{
      .trade-title{
        font-size: 12px;
        color: #8E8E8E;
      }
      .trade-data{
        margin-top: 12px;
        font-size: 12px;
        color: #282828;
      }
    }
  }
  
  
`
