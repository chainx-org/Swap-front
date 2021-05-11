import React, { lazy, Suspense } from "react";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import Loading from "../../components/Loading";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import MyCard from "./components/MyCard";
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
    display: inline-block;
    .iconBox {
      width: 40px;
      margin-left: 120px;
    }
  }
`;

// const homePage = lazy(() => import('../page-homePage'));

const HomePage = (): React.ReactElement => {
  return (
    <>
      <Header />
      <Content>
        <SideBar />
        <MyCard value="true" label="Swap">
          {/* 单位一 */}
          <CardItem value="From" label="XDOGE">
            <DogIcon style={SvgStyle} />
          </CardItem>
          {/* 转换icon */}
          <ExchangeIconStyle>
            <div className="box">
              <div className="iconBox">
                <ExchangeIcon style={SvgStyle} />
              </div>
            </div>
          </ExchangeIconStyle>
          {/* 单位二 */}
          <CardItem value="To" label="XBTC">
            <BtcIcon style={SvgStyle} />
          </CardItem>
          {/* 底部按钮 */}
          <BottomItem
            name="Slippage Tolerance"
            label="Connect Wallet"
            value="1%"
          />
        </MyCard>
      </Content>
    </>
  );
};

export default HomePage;
