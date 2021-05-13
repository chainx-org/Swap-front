import React, { useContext, useState } from "react";
import Header from "../../components/Header";
import ContainerCard from "../../components/Card/ContainerCard";
import styled from "styled-components";
import CardItem from "./CardInfo/CardItem";
import BottomItem from "./CardInfo/CardBottom";
import SwapInfo from "./CardInfo/SwapInfo";
import { ReactComponent as DogIcon } from "../../assets/symbols_DOGE.svg";
import { ReactComponent as BtcIcon } from "../../assets/symbols_BTC.svg";
import { ReactComponent as ExchangeIcon } from "../../assets/icon_exchange.svg";
import { AccountsContext } from "../../hooks/AccountsProvider";

const Container = styled.div`
  background-image: linear-gradient(180deg, #faf5e8 7%, #f7f8fa 100%);
`;
const Content = styled.main`
  display: flex;
  justify-content: center;
  margin-top: 90px;
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
      bottom: 165px;
      width: 26px;
      height: 26px;
      margin-left: 120px;
      cursor: pointer;
    }
  }
`;

interface CoinInfo {
  coinName: string;
  coinIcon: React.ReactNode;
}

const HomePage = (): React.ReactElement => {
  const [coinInfo, setCoinInfo] = useState<CoinInfo[]>([
    {
      coinName: "XDOT",
      coinIcon: <DogIcon style={SvgStyle} />,
    },
    {
      coinName: "XDOGE",
      coinIcon: <BtcIcon style={SvgStyle} />,
    },
  ]);
  const { isExtensionInjected } = useContext(AccountsContext);

  return (
    <Container>
      <Header />
      <Content>
        {/*<ConfirmModal confirmType={'waiting'}/>*/}
        <ContainerCard title="Swap" className={"cardContent"}>
          {/* 货币一 */}
          <CardItem currencyTitle="From" currencyName={coinInfo[0].coinName}>
            {coinInfo[0].coinIcon}
          </CardItem>
          {/* 转换icon */}
          <ExchangeIconStyle>
            <div
              className="box"
              onClick={() => setCoinInfo([...coinInfo].reverse())}
            >
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
            btnLabel={!isExtensionInjected ? "Connect Wallet" : "Swap"}
            value="1%"
          />
          {/* Swap info */}
        </ContainerCard>
      </Content>
      <SwapInfo />
    </Container>
  );
};

export default HomePage;
