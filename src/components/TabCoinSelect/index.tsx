import React, { useState } from "react";
import styled from "styled-components";
// import BCHs from './icons/SBCH.svg'
// import BTCs from './icons/SBTC.svg'
// import DOGs from './icons/SDOG.svg'
import Fill from './icons/fill.svg'


interface CoinSelectProps {
  className?: string;
  optionList: any;
  isShow: boolean;
  coinSymol: any;
  ShowSelect: ()=> void;
  currCoin: (value: any)=> void;
}

export default function TabCoinSelect({className = '' , optionList, isShow, coinSymol, ShowSelect, currCoin }:CoinSelectProps): React.ReactElement<CoinSelectProps>{
    
    return (
       <Wrapper className={` ${className}`}>
            <div className='currContent' onClick={ShowSelect}>
                <img src={coinSymol.img_url} alt=""/>
                <p className='currName'>{coinSymol.coinName}</p>
                <img src={Fill} alt=""/> 
            </div>
            { isShow && <div className='option'>
                <div className='optinTitle'>
                    <p>ASSET</p>
                    <p>YOUR BALANCE</p>
                </div>
                {
                    optionList.map((item: any)=>{
                        return ( <div className='optionContent' key={item.coinName} onClick={()=>currCoin(item)}>
                            <div className='left'> 
                                <img src={item.img_url} alt=""/>
                                <div className='coinSymol'>
                                    <p className='coinName'>{item.coinName}</p>
                                    <p className='symol'>{item.symol}</p>
                                </div>
                            </div>
                            <div className='right'>{item.balance}</div>
                        </div>)
                    })
                }
            </div> }
       </Wrapper>
    )
}

const Wrapper = styled.div`
    position: relative;
    .currContent {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        background: #EFEFEF;
        box-shadow: -2px -2px 3px 0 rgba(0,0,0,0.10), 2px 2px 3px 0 #FFFFFF;
        border-radius: 15px;
        width: 153px;
        height: 40px;
        .currName {
            opacity: 0.85;
            font-family: PingFangSC-Medium;
            font-size: 14px;
            color: #000000;
            text-align: center;
            line-height: 22px;
            font-weight: 500;
        }
    }
    .option {
        position: absolute;
        top: 50px;
        min-width: 260px;
        background: #FFFFFF;
        box-shadow: 6px 6px 8px 0 rgba(0,0,0,0.06);
        border-radius: 8px;
        padding: 12px 16px 10px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: #8E8E8E;
        z-index: 99;
        .optinTitle {
            padding: 6px 0;
            font-size: 11px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .optionContent {
            padding: 8px 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-family: PingFangSC-Medium;
            font-weight: 500;
            .left {
                display: flex;
                img {
                    margin-right: 8px;
                }
                .coinName {
                    font-size: 16px;
                    color: #282828;
                    margin-bottom: 2px;
                }
                .symol {
                    font-size: 12px;
                }
            }
            .right {
                opacity: 0.85;
                font-size: 14px;
                color: #000000;
                line-height: 22px;
            }
        }
    }
`