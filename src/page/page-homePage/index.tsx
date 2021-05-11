import React, { lazy, Suspense, useState, useEffect } from "react";
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
    }
  }
`;

const HomePage = (): React.ReactElement => {
  const a = ["XDOGE", "XBTC"];
  const [currencyName, setCurrencyName] = useState(a);
  const [currencyICon, setcurrencyICon] = useState([
    <DogIcon style={SvgStyle} />,
    <BtcIcon style={SvgStyle} />,
  ]);
  // const [currencyValue, setcurrencyValue] = useState(["1", "2"]);
  const currencySwap = () => {
    setCurrencyName(currencyName.reverse());
  };

  return (
    <>
      <Header />
      <Content>
        <SideBar />
        <ContainerCard value="true" label="Swap">
          {/* 货币一 */}
          <CardItem currencyTitle="From" currencyName={currencyName[0]}>
            {currencyICon[0]}
          </CardItem>
          {/* 转换icon */}
          <ExchangeIconStyle>
            <div className="box" onClick={() => currencySwap()}>
              <div className="iconBox">
                <ExchangeIcon />
              </div>
            </div>
          </ExchangeIconStyle>
          {/* 货币二 */}
          <CardItem currencyTitle="To" currencyName={currencyName[1]}>
            {currencyICon[1]}
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
