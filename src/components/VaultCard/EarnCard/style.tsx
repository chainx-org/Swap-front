import styled from "styled-components";

export const EarnCardStyle = styled.div`
  padding: 30px;
  padding-top: 10px;
  width: 598px;
  height: 322px;
  background: #fff;
  border: 1px solid #EFEFEF;
  border-radius: 10px;
  button{
    width: 200px;
    height: 45px;
    margin-left: 300px;
  }
  ul li{
    margin-top: 20px;
    .earn-pcx-num{
      color: #34C69A;
      font-size: 20px;
      font-weight: bold;
    }
    .chainx-address{
      width: 239px;
      font-size: 12px;
      color: #009FCF;
      word-break:break-all;
    }
    .issue-redeem-num{
      font-size: 20px;
      color: #3D3D3D;
      font-weight: bold;
    }
    .issuable-num{
      font-size: 20px;
      color: #3D3D3D;
      font-weight: bold;
    }
    .collateral-rate{
      display: flex;
      font-size: 20px;
      color: #3D3D3D;
      font-weight: bold;
      .collateral-rate-num{
        font-size: 20px;
        color: #34C69A;
      }
    }
    .email-edit{
      font-size: 12px;
      color: #282828;
    }
  }
  .right-ul{
    margin-left: 50px;
  }
  .earn-card-title{
    font-size: 12px;
    color: #8E8E8E;
    margin-bottom: 10px;
  }
`
export const EarnCardTopStyle = styled.div`
  display: flex;
`
export const AddCollateralModalStyle =styled.div`
 position: absolute;
`
export const AddCollateralInput = styled.div`
 .addCollateral-info{
   display: flex;
   justify-content: space-between;
   .addCollateral-title{
     font-size: 12px;
     color: #282828;
     font-weight: bold;
   }
   .addCollateral-amount{
     font-size: 12px;
     color: #282828;
   }
 }
  .ant-input-number{
    width: 472px;
    height: 44px;
    margin-top: 7px;
    line-height: 44px;
  }
`

export const CollateralDisplayStyle =styled.div`
  ul{
    background: #F6F6F6;
    border-radius: 6px;
    margin-top: 16px;
    width: 472px;
    height: 60px;
    padding: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .collateral-num{
      font-size: 16px;
      color: #34C69A;
      font-weight: bold;
    }
    .before{
      display: flex;
      justify-content: flex-end;
    }
  }
`
