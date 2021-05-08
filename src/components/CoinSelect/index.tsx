import React, { useState } from "react";
import styled from "styled-components";
import BCHs from './icons/BCH_s.svg'
import BTCs from './icons/BTC_S.svg'
import DOGEs from './icons/DOGE_s.svg'
import Sherpaxs from './icons/sherpax_s.svg'
import Fill from './icons/fill.svg'

interface CoinSelectProps {
  className?: string;
  select?: boolean;
}
interface coinProps {
    img_url: any,
    coinName: string,
    symol: string
}
export default function CoinSelect({className = '' , select }:CoinSelectProps): React.ReactElement<CoinSelectProps>{
    
    const optionList = [
        {
            img_url: BTCs,
            coinName: 'BTC',
            symol: 'Bitcoin'
        },
        {
            img_url: BCHs,
            coinName: 'BCH',
            symol: 'Bitcoin Cash'
        },
        {
            img_url: DOGEs,
            coinName: 'DOG',
            symol: 'Dogecoin'
        }
    ]
    const [isShow, setIsShow] = useState(false)
    const [coinSymol, setCoinSymol] = useState<coinProps>({
        img_url: BTCs,
        coinName: 'BTC',
        symol: 'Bitcoin'
    })
    const currCoin = (value:any) => {
        setCoinSymol(value)
        setIsShow(!isShow)
    }
    const ShowSelect = () =>{
        setIsShow(!isShow)
    }
    return (
       <Wrapper className={` ${className}`}>
           {
            select ? <div className='currContent'>
               <img src={Sherpaxs} alt=""/>
               <p className='currName'>SherpaX</p>
            </div> : <>
                <div className='currContent' onClick={ShowSelect}>
                    <img src={coinSymol.img_url} alt=""/>
                    <p className='currName'>{coinSymol.coinName}</p>
                    <img src={Fill} alt=""/> 
                </div>
                { isShow && <div className='option'>
                    <p className='optinTitle'>ASSET</p>
                    {
                        optionList.map((item)=>{
                            return ( <div className='optionContent' key={item.coinName} onClick={()=>currCoin(item)}>
                                <img src={item.img_url} alt=""/>
                                <div className='coinSymol'>
                                    <p className='coinName'>{item.coinName}</p>
                                    <p className='symol'>{item.symol}</p>
                                </div>
                            </div>)
                        })
                    }
                </div> }
            </>
            }
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
        width: 142px;
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
        width: 200px;
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
        }
        .optionContent {
            padding: 8px 0;
            display: flex;
            img {
                margin-right: 8px;
            }
            .coinName {
                font-family: PingFangSC-Medium;
                font-size: 16px;
                color: #282828;
                font-weight: 500;
                margin-bottom: 2px;
            }
            .symol {
                font-size: 12px;
            }
        }
    }
`