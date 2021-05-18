import React, { useContext, useState, useEffect } from "react";
import Header from "../../components/Header";
import ContainerCard from "../../components/Card/ContainerCard";
import styled from "styled-components";
import CardItem from "./CardInfo/CardItem";
import BottomItem from "./CardInfo/CardBottom";
import SwapInfo from "./CardInfo/SwapInfo";
import { TokenContext } from "../../hooks/TokenProvider";
import DogIcon from "../../assets/symbols_DOGE.svg";
import BtcIcon from "../../assets/symbols_BTC.svg";
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
      z-index: 0;
      bottom: 165px;
      width: 26px;
      height: 26px;
      margin-left: 120px;
      cursor: pointer;
    }
  }
`;

interface CoinInput {
  coinIndex: Number;
  coinInput: any;
  canSwap: Boolean;
}

const HomePage = (): React.ReactElement => {
  const { coinList } = useContext(TokenContext);
  console.log(coinList, "coinList");

  //取前两项给card显示。即取coinList的前两项放到coinInfo中
  const [coinInfo, setCoinInfo] = useState([coinList[0], coinList[1]]);
  console.log(coinInfo, "coinInfo");
  const [coinInput, setCoinInput] = useState<CoinInput[]>([
    { coinIndex: 0, coinInput: "", canSwap: true },
    { coinIndex: 1, coinInput: "", canSwap: true },
  ]);
  const [isShowSwapInfo, setIsShowSwapInfo] = useState(false);
  const { isExtensionInjected } = useContext(AccountsContext);

  const swapCoin = [
    {
      id: coinInfo[0].id,
      unit: coinInfo[0].unit,
      icon: coinInfo[0].icon,
      decimals: coinInfo[0].decimals,
      coinNum: coinInput[0].coinInput,
    },
    {
      id: coinInfo[1].id,
      unit: coinInfo[1].unit,
      icon: coinInfo[1].icon,
      decimals: coinInfo[1].decimals,
      coinNum: coinInput[1].coinInput,
    },
  ];
  const clearCoinInput = () => {
    setCoinInput([
      ...[
        { coinIndex: 0, coinInput: "", canSwap: true },
        { coinIndex: 1, coinInput: "", canSwap: true },
      ],
    ]);
  };
  const addCoin = (item: any, index: any) => {
    if (
      coinInfo.some((n: { unit: any }) => {
        return n.unit === item.unit;
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
  useEffect(() => {
    setCoinInfo([coinList[0], coinList[1]]);
  }, [coinList]);
  return (
    <Container>
      <Header />
      <Content>
        {/*<ConfirmModal confirmType={'waiting'}/>*/}
        <ContainerCard title="Swap" className={"cardContent"}>
          {/* 货币一 */}
          {/* {coinList}12 */}
          <CardItem
            index={0}
            currencyTitle="From"
            currencyName={coinInfo[0].unit}
            currencyBalence={coinInfo[0].coinBalance}
            addCoin={addCoin}
            showSwapInfo={setIsShowSwapInfo}
            inputCoinValue={{ coinInput, setCoinInput }}
          >
            <img src={coinInfo[0].icon} alt="" />
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
            currencyName={coinInfo[1].unit}
            currencyBalence={coinInfo[1].coinBalance}
            addCoin={addCoin}
            showSwapInfo={setIsShowSwapInfo}
            inputCoinValue={{ coinInput, setCoinInput }}
          >
            <img src={coinInfo[1].icon} alt="" />
          </CardItem>
          {/* 底部按钮 */}
          {coinInput[0].canSwap && coinInput[1].canSwap && (
            <BottomItem
              name="Slippage Tolerance"
              value="1%"
              swapCoinInfo={swapCoin}
              btnLabel={!isExtensionInjected ? "Connect Wallet" : "Swap"}
              className="buttonDiv"
            />
          )}
          {(!coinInput[0].canSwap || !coinInput[1].canSwap) && (
            <BottomItem
              name="Slippage Tolerance"
              value="1%"
              btnLabel={"Insufficient DOT Balance"}
              className="cannot-swap"
            />
          )}
          {/* Swap info */}
        </ContainerCard>
      </Content>
      {isShowSwapInfo && <SwapInfo />}
    </Container>
  );
};

export default HomePage;
