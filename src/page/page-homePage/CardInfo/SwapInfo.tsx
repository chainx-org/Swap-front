import React, { useState } from "react";
import styled from "styled-components";

const Item = styled.div`
  .Box {
    width: 424px;
    height: 168px;
    margin: -47px auto;
    background: #f4f4f5;
    border: 1px solid #efefef;
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.08);
    border-radius: 24px 24px 24px 24px;
    .info {
        display: flex;
        flex-direction:column;
        padding-left: 16px;
        padding-right: 16px;
        padding-top:12px;
        margin: 47px 0px 0 0px;
        .item{
            display: flex;
            justify-content: space-between;
            margin-top:12px;
            & > span:nth-child(1) {
                display: inline-block;
                //   height: 17px;
                text-align: right;
                letter-spacing: 0.1px;
                font-size: 12px;
                color: #3f3f3f;
                font-weight: 500;
                line-height: 17px;
              }
              & > span:nth-child(2) {
                  display: inline-block;
                    height: 17px;
                  font-size: 12px;
                  line-height: 17px;
                  font-family: PingFangSC-Medium;
                  font-size: 12px;
                  color: #3F3F3F;
                  text-align: right;
                  font-weight: 500;
                }
        }
        & >div:nth-child(2){
            & > span:nth-child(2) {
                display: inline-block;
                  height: 17px;
                font-size: 12px;
                line-height: 17px;
                font-family: PingFangSC-Medium;
                font-size: 12px;
                color: #E9A840;
                text-align: right;
                font-weight: 500;
              }
        }
       
  }
`;

function SwapInfo() {
  return (
    <Item>
      <div className="Box">
        <div className="info">
          <div className="item">
            <span>122</span>
            <span>fvfvf</span>
          </div>
          <div className="item">
            <span>122</span>
            <span>fvfvf</span>
          </div>
          <div className="item">
            <span>122</span>
            <span>fvfvf</span>
          </div>
        </div>
      </div>
    </Item>
  );
}

export default SwapInfo;
