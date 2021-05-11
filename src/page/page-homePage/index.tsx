import React, { useState } from "react";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import styled from "styled-components";
import ContainerCard from "./components/ContainerCard";
import CardItem from "./components/CardItem";
import BottomItem from "./components/CardBottom";
import { ReactComponent as DogIcon } from "../../assets/symbols_DOGE.svg";
import { ReactComponent as BtcIcon } from "../../assets/symbols_BTC.svg";
import { ReactComponent as ExchangeIcon } from "../../assets/icon_exchange.svg";

const Content = styled.main`
  display: flex;
  padding: 30px 40px;
`;
const SvgStyle = {
  margin: "8px",
};

const ExchangeIconStyle = styled.div`
  .box {
    width: 100%;
    height: 24px;
    display: inline-block;
    .iconBox {
      position: absolute;
      bottom: 172px;
      width: 26px;
      height: 26px;
      margin-left: 120px;
      cursor: pointer;
    }
  }
`;

interface CoinInfo{
  coinName: string;
  coinIcon: React.ReactNode;
}

const HomePage = (): React.ReactElement => {
  const [coinInfo, setCoinInfo] = useState<CoinInfo[]>([
    {
      coinName: 'XDOT',
      coinIcon:  <DogIcon style={SvgStyle}/>
    },
    {
      coinName: 'XDOGE',
      coinIcon: <BtcIcon style={SvgStyle} />
    }
  ])


  return (
    <>
      <Header />
      <Content>
        <SideBar />
        <ContainerCard value="true" label="Swap">
          {/* 货币一 */}
          <CardItem currencyTitle="From" currencyName={coinInfo[0].coinName}>
            {coinInfo[0].coinIcon}
          </CardItem>
          {/* 转换icon */}
          <ExchangeIconStyle>
            <div className="box" onClick={() => setCoinInfo([...coinInfo].reverse())}>
              <div className="iconBox">
                <ExchangeIcon />
              </div>
            </div>
          </ExchangeIconStyle>
          {/* 货币二 */}
          <CardItem currencyTitle="To" currencyName={coinInfo[1].coinName}>
            {coinInfo[1].coinIcon}
          </CardItem>
          {/* 底部按钮 */}
          <BottomItem
            name="Slippage Tolerance"
            label="Connect Wallet"
            value="1%"
          />
        </ContainerCard>
      </Content>
    </>
  );
};

export default HomePage;
