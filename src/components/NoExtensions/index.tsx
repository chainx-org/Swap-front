import React from "react";
import styled from "styled-components";
import PolkadotJS from './icons/polkadotjs.svg'
import BgBtn from './icons/polkadotBgBtn.svg'
import Shape1 from './icons/shape1.svg'
import Shape2 from './icons/shape2.svg'
import { HeaderStyle } from "../Header/style";
import ChainStatus from "../Header/ChainStatus";
import ChangeLanguage from "../Header/ChangeLanguage";

const NoExtensionsStyle = styled.div`
    background-image: linear-gradient(180deg, #E2E1E6 0%, #F4F3F8 85%);
    position: fixed;
    z-index: 2;
    width: 100vw;
    height: 100vh;
`
const DescribeText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin-top: -79px;
    .bgShape1 {
        position: relative;
        h1 {
            font-family: PingFangSC;
            font-size: 42px;
            color: #282828;
            line-height: 44px;
            font-weight: 500;
            margin-bottom: 54px;
        }
        .shape1 {
            position: absolute;
            z-index: -1;
            top: -116%;
            left: -12%;
        }
        .shape2 {
            position: absolute;
            bottom: -176px;
            right: 0;
        }
    }

    .info{
        opacity: 0.8;
        font-family: PingFangSC-Regular;
        font-size: 16px;
        color: #282828;
        letter-spacing: 5px;
        text-align: center;
        font-weight: 400;
        margin-bottom: 10px;
    }
    .tip{
        position: relative;
        .tiplogo {
            position: absolute;
            left: 60px;
            top: 26px;
        }
    }
`
function NoExtensions(): React.ReactElement {

    return(
        <NoExtensionsStyle>
            <HeaderStyle>
                <ChainStatus/>
                <ChangeLanguage/>
            </HeaderStyle>
            <DescribeText>
                <div className='bgShape1'>
                    <h1>去信任、去中心化的实现比特币跨链到 ChainX</h1>
                    <img src={Shape1} alt='bgShape' className='shape1' />
                    <img src={Shape2} alt='bgShape'  className='shape2'/>
                </div>
                <p className="info">请使用 PolkadotJS 插件登陆</p>
                <a href="https://polkadot.js.org/extension/" target='_blank' className='tip'>
                    <img src={BgBtn} alt=""/>
                    <img src={PolkadotJS} alt="" className='tiplogo' />
                </a>
            </DescribeText>
        </NoExtensionsStyle>
    )
}
export default NoExtensions;
