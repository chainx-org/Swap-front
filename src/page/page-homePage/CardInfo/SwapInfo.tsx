import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Question } from "../../../assets/icon_question.svg";
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
            .item-left{
                display: flex;
                flex-direction:row;
                & > span:nth-child(1) {
                    display: inline-block;
                    //   height: 17px;
                    text-align: right;
                    letter-spacing: 0.1px;
                    line-height: 17px;
                    margin-right:4px;
                    font-family: PingFangSC-Regular;
                    font-size: 12px;
                    color: #908E8E;
                    font-weight: 400;
                  }
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
const accounts = [
  {
    title: "Maximum Sold",
    info: "15.83 DOT",
  },
  { title: "Price Impact", info: "< 0.01%" },
  { title: "Liquidity Provider Fee", info: "0.03926 DOT" },
];
function SwapInfo() {
  return (
    <Item>
      <div className="Box">
        <div className="info">
          {accounts.map((item, index) => {
            return (
              <div className="item" key={index}>
                <div className="item-left">
                  <span>{item.title}</span>
                  <Question />
                </div>
                <span>{item.info}</span>
              </div>
            );
          })}
        </div>
      </div>
    </Item>
  );
}

export default SwapInfo;
