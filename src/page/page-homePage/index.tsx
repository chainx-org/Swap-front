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

interface CoinInput {
  coinIndex: Number;
  coinInput: any;
}

const HomePage = (): React.ReactElement => {
  const [coinInfo, setCoinInfo] = useState<CoinInfo[]>([
    {
      coinName: "XDOT",
      coinIcon: <DogIcon />,
    },
    {
      coinName: "XDOGE",
      coinIcon: <BtcIcon />,
    },
  ]);
  const [coinInput, setCoinInput] = useState<CoinInput[]>([
    { coinIndex: 0, coinInput: "" },
    { coinIndex: 1, coinInput: "" },
  ]);
  const { isExtensionInjected } = useContext(AccountsContext);
  const [isShowSwapInfo, setIsShowSwapInfo] = useState(false);
  const clearCoinInput = () => {
    setCoinInput([
      ...[
        { coinIndex: 0, coinInput: "" },
        { coinIndex: 1, coinInput: "" },
      ],
    ]);
  };
  const addCoin = (item: any, index: any) => {
    if (
      coinInfo.some((n) => {
        return n.coinName === item.coinName;
      })
    ) {
      alert("error");
      return;
    }
    coinInfo[index.index] = item;
    let list = coinInfo;
    setCoinInfo([...list]);
    clearCoinInput();
  };
  const exChangeIcon = () => {
    setCoinInfo([...coinInfo].reverse());
    clearCoinInput();
    setIsShowSwapInfo(false);
  };

  return (
    <Container>
      <Header />
      <Content>
        {/*<ConfirmModal confirmType={'waiting'}/>*/}
        <ContainerCard title="Swap" className={"cardContent"}>
          {/* 货币一 */}
          <CardItem
            index={0}
            currencyTitle="From"
            currencyName={coinInfo[0].coinName}
            addCoin={addCoin}
            showSwapInfo={setIsShowSwapInfo}
            inputCoinValue={{ coinInput, setCoinInput }}
          >
            {coinInfo[0].coinIcon}
          </CardItem>
          {/* 转换icon */}
          <ExchangeIconStyle>
            <div className="box" onClick={exChangeIcon}>
              <div className="iconBox">
                <ExchangeIcon />
              </div>
            </div>
          </ExchangeIconStyle>
          {/* 货币二 */}
          <CardItem
            index={1}
            currencyTitle="To"
            currencyName={coinInfo[1].coinName}
            addCoin={addCoin}
            showSwapInfo={setIsShowSwapInfo}
            inputCoinValue={{ coinInput, setCoinInput }}
          >
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
      {isShowSwapInfo && <SwapInfo />}
    </Container>
  );
};

export default HomePage;
