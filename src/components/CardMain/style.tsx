import styled from "styled-components";
import React from "react";

export const CardMainStyle = styled.div`
    .opreturn-title {
      display: flex;
      margin-top: 23px;
      font-size: 14px;
      color: #282828;
      line-height: 16px;
      font-weight: 600;
      align-items: center;
      .info{
        font-size: 12px;
        color: #8E8E8E;
        line-height: 16px;
        font-weight: 400;
        margin-right: 5px;
      }
      .step-one{
        margin-right: 9px;
        background: #F6C94A;
        width: 30px;
        height: 30px;
        color: white;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .cp-op{
        margin-right: 4px;
      }
    }
    .opreturn-content-wrapper{
      display: flex;
      justify-content: center;
      margin-top: 12px;
    }
    .btc-content{
      display: flex;
      align-items: center;
      padding-left: 20px;
      padding-top: 11px;
      padding-bottom: 13px;
      width: 380px;
      height: 40px;
      background: #EFEFEF;
      box-shadow: -2px -2px 3px 0 rgba(0,0,0,0.10), 2px 2px 3px 0 #FFFFFF;
      border-radius: 4px;
      font-size: 12px;
      color: #8E8E8E;
      line-height: 16px;
      font-weight: 400;
      .op-return-text{
        width: 285px;
        word-break: break-all;
        margin-right: 18.5px;
      }
      .copy{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        border-left: 1px solid #DBDBDB;;
        height: 40px;
        box-shadow: 1px 0 1px 0 #FFFFFF;
      }
    }
    .tip-wrapper{
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 12px;
    }
    .qr-wrapper{
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 12px;
      .qr{
        width: 380px;
        font-size: 12px;
        color: #282828;
        line-height: 16px;
        font-weight: 400;
        margin-left: 8px;
      }
    }
    .tip{
      width: 380px;
      height: 28px;
      border: 1px solid #F5222D;
      border-radius: 6px;
      font-size: 12px;
      color: #554D4E;
      line-height: 16px;
      font-weight: 400;
      display: flex;
      background:rgba(245,34,45,0.5);;
      justify-content: center;
      align-items: center;
      img{
        margin-right: 8px;
      }
    }
    .opreturn-content{
      display: flex;
      align-items: center;
      padding-left: 20px;
      padding-top: 11px;
      padding-bottom: 13px;
      width: 380px;
      height: 56px;
      background: #EFEFEF;
      box-shadow: -2px -2px 3px 0 rgba(0,0,0,0.10), 2px 2px 3px 0 #FFFFFF;
      border-radius: 4px;
      font-size: 12px;
      color: #8E8E8E;
      line-height: 16px;
      font-weight: 400;
      .op-return-text{
        width: 285px;
        word-break: break-all;
        margin-right: 18.5px;
      }
      .copy{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        border-left: 1px solid #DBDBDB;;
        height: 56px;
        box-shadow: 1px 0 1px 0 #FFFFFF;
      }
    }
    .tip-wrapper{
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 12px;
    }
    .tip{
      width: 380px;
      height: 28px;
      border: 1px solid #F5222D;
      border-radius: 6px;
      font-size: 12px;
      color: #554D4E;
      line-height: 16px;
      font-weight: 400;
      display: flex;
      background:rgba(245,34,45,0.5);;
      justify-content: center;
      align-items: center;
      img{
        margin-right: 8px;
      }
    }

`