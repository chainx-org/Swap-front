import styled from "styled-components";
import React from "react";

export const CardMainStyle = styled.div`
    .opreturn-res {
      display: flex;
      justify-content: space-between;
      .verticalLine {
        width: 1px;
        height: 108px;
        border-left: 1px dashed #DBDBDB;
        box-shadow: 1px 0 1px 0 #ffffff;
        margin: 5px 0 8px 15px;
      }
    }
    .opreturn-title {
      display: flex;
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
        box-shadow: 3px 3px 8px 0 #EFE3C0, -3px -3px 8px 0 #FFFFFF;
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
      justify-content: flex-end;
      margin-top: 6px;
      .line {    
        width: 1px;
        height: 40px;
        background: #DBDBDB;
        border: 0;
        box-shadow: 0.5px 0 0px 0 #ffffff;
        margin: 0;
        margin-top: 2px;
      }
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
        height: 40px;
        cursor: pointer;
      }
    }
    .tip-wrapper{
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-top: 12px;
    }
    .qr-wrapper{
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 12px 0 0 40px;
      .qr{
        width: 380px;
        font-size: 12px;
        color: #282828;
        line-height: 16px;
        font-weight: 400;
        margin-left: 8px;
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
      .line {    
        width: 1px;
        height: 55px;
        background: #DBDBDB;
        border: 0;
        box-shadow: 0.5px 0 0px 0 #ffffff;
        margin: 0;
        margin-top: 2px;
      }
      .copy{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 56px;
        cursor: pointer;
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
      background:rgba(245,34,45,0.1);
      justify-content: center;
      align-items: center;
      img{
        margin-right: 8px;
      }
    }
`