import { Input, Tooltip } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import Question from '../ExplainTag/icons/question.svg'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #8E8E8E;
    font-weight: 400;
    width: 100%;
    .topTitle {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-bottom: 8px;
        .righTooltip {
            display: flex;
            align-items: center;
            .tradeTip {
                margin-left: 5px;
                color: #282828;
            }
        }
    }
    .addressIpt {
        background: #EFEFEF;
        box-shadow: -2px -2px 3px 0 rgba(0,0,0,0.10), 2px 2px 3px 0 #FFFFFF;
        border-radius: 4px;
        width: 100%;
        .ant-input {
            border: none;
            background: #EFEFEF;
            box-shadow: -2px -2px 3px 0 rgba(0,0,0,0.10), 2px 2px 3px 0 #FFFFFF;
            border-radius: 4px;
            height: 40px;
            ::-webkit-input-placeholder { /* WebKit, Blink, Edge */
                font-family: PingFangSC-Regular;
                font-size: 14px;
                color: #CDCDCD;
                line-height: 16px;
                font-weight: 400;
            }
        }
    }
`

interface AddressInputProps {
  className?: string;
  coinSymol?: any
}

export default function AddressInput({className = '' , coinSymol }:AddressInputProps): React.ReactElement<AddressInputProps>{
    
    return (
       <Wrapper className={` ${className}`}>
           <div className='topTitle'>
               <p>{coinSymol.coinName.slice(1,4)} 地址</p>
               <div className='righTooltip'>
                  <Tooltip title={`发行成功后会解锁，若未按照要求完成btc转账，将失去锁定的抵押品`}>
                    <img src={Question} alt=""/>
                  </Tooltip>       
                  <p className='tradeTip'>网络交易费 0.0000 {coinSymol.coinName.slice(1,4)}</p>
               </div>
           </div>
           <div className='addressIpt'>
                <Input placeholder={`请输入您的 ${coinSymol.coinName.slice(1,4)} 地址`} />
           </div>
       </Wrapper>
    )
}
